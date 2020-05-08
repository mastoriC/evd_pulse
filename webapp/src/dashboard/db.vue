<template>
    <div>
        <div class="container-fluid i-bg-red px-4 py-5 p-lg-5">
            <div class="h4 mb-0">Dashboard</div>
            <div class="row my-5">
                <div class="col-12 col-lg-7">
                    <canvas id="currentECG" width="100" height="15"></canvas>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="h3">Current Pulse</div>
                    <div v-if="current != '-'">
                        <span class="display-4">{{ current }}</span>
                        <span class="ml-4">BPMs</span>
                    </div>
                    <div v-else>
                        <span class="h5">No pulse detected</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid px-4 py-5 p-lg-5">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <div class="h5 mb-2">5-Last Messurement</div>
                    <div class="p-3 hislog" v-for="log in Last5_BPMreverseSortedArray" :key="log.index">
                        <div class="d-inline-block h5 mb-0">{{ log[1] }} BPM</div>
                        <div class="d-inline-block font-weight-light float-right">{{ log[0] | moment("D MMM YYYY - hh:mm A") }}</div>
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <canvas id="historyBPM"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
div.hislog {
    background-color: hsl(200, 50%, 97.5%);
}
div.hislog:nth-child(odd) {
    background-color: hsl(200, 50%, 95%);
}
</style>
<script>
import firebase from 'firebase'
import Chart from 'chart.js'

export default {
    data() {
        return {
            current: '-',
            pulse: '-',
            bpm_object: {},
            bpm_array: [],
            bpm_array_seperate: {
                timestamps: [],
                bpms: []
            }
        }
    },
    mounted() {
        document.documentElement.style.overflow = 'auto'
        let bpm_object = {}

        // History BPM 's Chart Components
        let hbpm = document.getElementById('historyBPM').getContext('2d');
        let hbpm_chart = new Chart(hbpm, {
            type: 'line',
            data: {
                labels: this.bpm_array_seperate.timestamps,
                datasets: [{
                    label: 'Beat per Minute',
                    data: this.bpm_array_seperate.bpms,
                    borderColor: 'hsl(348, 83%, 47%)',
                    fill: false,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        })

        function time2date(timestamp) {
            return new Date(timestamp).toLocaleTimeString()
        }

        // Fetch data from Firebase
        let database = firebase.database()

        database.ref('current/bpm').on('value', (snapshot) => {
            this.current = snapshot.val()
        })
        database.ref('current/pulse').on('value', (snapshot) => {
            this.pulse = snapshot.val()
        })

        // Messurement History log
        database.ref('history').on('child_added', (snapshot) => {
            bpm_object = snapshot.val()
            this.bpm_array.push([bpm_object['timestamp'], bpm_object['bpm']])
            this.bpm_array_seperate.timestamps.push(time2date(bpm_object['timestamp']))
            this.bpm_array_seperate.bpms.push(bpm_object['bpm'])
            if (this.bpm_array.length > 15) {
                this.bpm_array.shift()
                this.bpm_array_seperate.timestamps.shift()
                this.bpm_array_seperate.bpms.shift()
            }
            hbpm_chart.update()
        })

        let ecgPulses = new Array(50)
        for (let i=0; i<ecgPulses.length; i++) {
            ecgPulses[i] = '-'
        }

        // ECG Pulse in Real-time Panel
        let cecg = document.getElementById('currentECG').getContext('2d');
        let cecg_chart = new Chart(cecg, {
            type: 'line',
            data: {
                labels: new Array(50),
                datasets: [{
                    label: 'ECG',
                    data: ecgPulses,
                    borderColor: '#FFF',
                    fill: false,
                    lineTension: 0.1,
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 1

                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        })

        // Update ecgGraph every 100ms
        const ecgGraph = () => {
            setTimeout(() => {
                ecgPulses.unshift(this.pulse)
                ecgPulses.pop()
                cecg_chart.update()
                ecgGraph()
            }, 100)
        }
        ecgGraph()
    },
    computed: {
        Last5_BPMreverseSortedArray: function() {
            let bpm_array = this.bpm_array

            // Reverse Sorting Comparator
            function reverseSort(a, b) {
                return (a[0] > b[0]) ? -1 : (a[0] < b[0]) ? 1 : 0
            }

            bpm_array.sort(reverseSort)         // DESC Sorting BPM Array
            return bpm_array.slice(0, 5)        // Return only 5 first element in array (reversed).
        },
    },
    methods: {

    }
}
</script>