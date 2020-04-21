<template>
    <div>
        <div class="container-fluid i-bg-red p-5">
            <div class="h4 mb-0">Dashboard</div>
            <div class="row my-5">
                <div class="col-7">
                    <canvas id="currentECG" width="100" height="25"></canvas>
                </div>
                <div class="col-5">
                    <div class="h3 mb-0">Current Pulse</div>
                    <div>
                        <span class="display-4">82</span>
                        <span class="ml-4">BPMs</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-5">
            <div class="row">
                <div class="col-4">
                    <div class="h5 mb-2">5-Last Messurement</div>
                    <div class="p-3 hislog" v-for="log in Last5_BPMreverseSortedArray" :key="log.index">
                        <div class="d-inline-block h5 mb-0">{{ log[1] }} BPM</div>
                        <div class="d-inline-block font-weight-light float-right">{{ log[0] | moment("D MMM YYYY &#8212 hh:mm A") }}</div>
                    </div>
                </div>
                <div class="col-8">
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
            bpm_object: {},
            bpm_array: [],
            bpm_array_seperate: {
                timestamps: [],
                bpms: []
            }
        }
    },
    created() {
        let bpm_object = {}

        // Fetch data from Firebase
        let database = firebase.database()
        database.ref('history').once('value').then((snapshot) => {
            bpm_object = snapshot.val()

        }).then(() => {
            
            let bpm_array = []
            let timestamps = []
            let bpms = []

            // Convert Object to Array
            for (let log in bpm_object) {
                bpm_array.push([parseInt(log), bpm_object[log]])
            }

            // Sorting Array
            bpm_array.sort(function(a, b) {
                return (a[0] > b[0]) ? 1 : (a[0] < b[0]) ? -1 : 0
            })

            // Seperate BPM and Timestamp
            for (let i=0; i < bpm_array.length; i++) {
                timestamps.push(bpm_array[i][0])
                bpms.push(bpm_array[i][1])
            }
            
            this.bpm_array = bpm_array
            this.bpm_array_seperate.timestamps = timestamps
            this.bpm_array_seperate.bpms = bpms

        }).then(() => {
            
            let timestamps = this.bpm_array_seperate.timestamps
            let dates = timestamps.map(function (timestamp) {
                let date = new Date(timestamp * 1000)
                return new Date(timestamp * 1000).toLocaleTimeString()
            })

            // History BPM 's Chart Components
            let hbpm = document.getElementById('historyBPM').getContext('2d');
            new Chart(hbpm, {
                type: 'line',
                data: {
                    labels: dates,
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

        })
    },
    mounted() {
        // ECG Pulse in Real-time Panel
        let cecg = document.getElementById('currentECG').getContext('2d');
        new Chart(cecg, {
            type: 'line',
            data: {
                labels: new Array(50),
                datasets: [{
                    label: 'ECG',
                    data: [0, 0, 2, -8, 8, -2, 0, 0],
                    borderColor: '#FFF',
                    fill: false,
                    lineTension: 0.1,
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',

                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        })
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