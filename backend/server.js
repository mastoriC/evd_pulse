const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const WebSocket = require('ws')

const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://evdpulse-4a3f9.firebaseio.com"
});

const app = express()
const port = 80

app.use(bodyParser.json())

app.disable('x-powered-by')

const server = http.createServer(app)

const wss = new WebSocket.Server({ server })

const currentRef = admin.database().ref('/current')
const historyRef = admin.database().ref('/history')

const average = (list) => {
    return list.reduce((a, b) => a + b, 0) / list.length
}

wss.on('connection', (ws) => {
    let data = [], timeout = setTimeout(() => { }, 0)

    console.log('[WS] Client connected')

    ws.on('message', (msg) => {
        try {
            msg = JSON.parse(msg)
        } catch (e) {
            console.log(`msg isn't valid`)
            return
        }

        console.log(`[WS] ${msg.type}: ${JSON.stringify(msg.data, '', 2)}`)

        if (msg.type == 'update') {
            try {
                clearTimeout(timeout)
            } catch (e) {
                console.log(e)
            }

            let { pulse, bpm } = msg.data

            pulse = parseInt(pulse)
            bpm = parseInt(bpm)

            currentRef.set({ pulse, bpm }).catch(error => {
                console.log(`[Firebase] Update failed -> ${error}`)
            })

            if(bpm) data.push(bpm)

            timeout = setTimeout(() => {
                currentRef.set({ pulse: '-', bpm: '-' }).catch(error => {
                    console.log(`[Firebase] Update failed -> ${error}`)
                })
                if(data.length > 0) {
                    let averageBPM = parseInt(average(data))
                    historyRef.push({ timestamp: admin.database.ServerValue.TIMESTAMP, bpm: averageBPM }).catch(error => {
                        console.log(`[Firebase] Update failed -> ${error}`)
                    })
                    console.log(`[WS] new history pushed`)
                    data = []
                }
            }, 350)
        }
    })

    ws.on('close', (e) => {
        console.log('[WS] Client disconnected')
    })
})

server.listen(port, '0.0.0.0', () => {
    console.log(`Listening on ${server.address().address}:${server.address().port}`)
})
