#include <Wire.h>
#include "MAX30105.h"

#include <ArduinoWebsockets.h>
#include <ESP8266WiFi.h>

#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <WiFiManager.h>

#include "heartRate.h"

// Global Variable

using namespace websockets;

MAX30105 particleSensor;
WebsocketsClient client;

const char* websockets_server = "wss://api.loukhin.com/evdpulse/";

const byte RATE_SIZE = 4;
byte rates[RATE_SIZE];
byte rateSpot = 0;
long lastBeat = 0;
long irValue;

float beatsPerMinute;
int beatAvg;

long now = 0;
long lastSent = 0;
char data[60];
bool websocketConnected = false;

const char ssl_fingerprint[] PROGMEM = "5F 0B 1C 8F E0 0B E3 FB 06 41 9C EB 37 17 9F 1F CA E5 CD 3F";

// Function Prototype
bool isWaitedFor(int time, String unit);
bool isFingerDetected();

void onEventsCallback(WebsocketsEvent event, String data);

void setup() {
  Serial.begin(115200);
  Serial.println("Initializing...");

  pinMode(BUILTIN_LED, OUTPUT);
  digitalWrite(BUILTIN_LED, 1);

  WiFiManager wifiManager;
  Serial.println("Connecting to Wi-Fi...");
  wifiManager.autoConnect("EVDPulse");
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  
  client.onEvent(onEventsCallback);
  client.setFingerprint(ssl_fingerprint);
  
  // Connect to server
  Serial.println("Connecting to Websocket...");
  websocketConnected = client.connect(websockets_server);
  while(!websocketConnected) {
    Serial.print("Reconnecting ");
    delay(500);
    websocketConnected = client.connect(websockets_server);
  }

  // Send a message
  client.send("{\"type\":\"info\",\"data\":\"Connected\"}");
  // Send a ping
  client.ping();

  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) {
    Serial.println("MAX30105 was not found. Please check wiring/power. ");
  }

  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x0A);
}

void loop() {
  irValue = particleSensor.getIR();

  if (checkForBeat(irValue) == true) {
    long delta = millis() - lastBeat;
    lastBeat = millis();

    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;

      //Take average of readings
      beatAvg = 0;
      for (byte x = 0; x < RATE_SIZE; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }

  // Output to serial for debugging
  Serial.print("IR=");
  Serial.print(irValue);
  Serial.print(", BPM=");
  Serial.print(beatsPerMinute);
  Serial.print(", Avg BPM=");
  Serial.print(beatAvg);

  client.poll();
  
  now = millis();

  if(isFingerDetected()) {
    if(isWaitedFor(100, "ms")) {
      lastSent = now;
      snprintf(data, 60, "{\"type\":\"update\",\"data\":{\"pulse\":\"%d\",\"bpm\":\"%d\"}}", irValue, beatAvg);

      // send sensor data to server
      client.send(data);
    }
  }

  if(isWaitedFor(30, "s")) {
    // ping the server to keep connection alive
    lastSent = now;
    client.ping();
  }

  Serial.println();
}

// Function declaration

// Check if time passed by "$time"
bool isWaitedFor(int time, String unit) {
  if(unit == "ms") return now - lastSent > time;
  else if(unit == "s") return now - lastSent > time * 1000;
  else if(unit == "m") return now - lastSent > time * 10000;
}

// Check if finger present on a sensor
bool isFingerDetected() {
  return irValue > 50000;
}

// Handle websocket callback
void onEventsCallback(WebsocketsEvent event, String data) {
    if(event == WebsocketsEvent::ConnectionOpened) {
        Serial.println("Connnection Opened");
        digitalWrite(BUILTIN_LED, 0);
    } else if(event == WebsocketsEvent::ConnectionClosed) {
        Serial.println("Connnection Closed");
        digitalWrite(BUILTIN_LED, 1);
        if(websocketConnected){
          // restart board if connection lost
          ESP.restart();
        }
    } else if(event == WebsocketsEvent::GotPing) {
        Serial.println("Got a Ping!");
    } else if(event == WebsocketsEvent::GotPong) {
        Serial.println("Got a Pong!");
    }
}
