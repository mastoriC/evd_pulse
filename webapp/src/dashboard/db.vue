<template>
    <div>
        <div class="container-fluid i-bg-red p-5">
            <div class="h4 mb-0">Dashboard</div>
        </div>
        <div class="container-fluid p-5">
            <div class="row">
                <div class="col-4">
                    <div class="h5 mb-2">5-Last Messurement</div>
                    <div class="p-3 hislog" v-for="log in Get_5Last_BPMreverseSortedArray" :key="log.index">
                        <div class="d-inline-block h5 mb-0">{{ log[1] }} BPM</div>
                        <div class="d-inline-block font-weight-light float-right">{{ parseInt(log[0]) | moment("D MMM YYYY &#8212 hh:mm A") }}</div>
                    </div>
                </div>
                <div class="col">
                    <canvas id="historyBPM" width="100%"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import firebase from 'firebase'
import Chart from 'chart.js'

export default {
    data() {
        return {
            bpm_object: {}
        }
    },
    created() {
        let database = firebase.database()
        database.ref('history').once('value').then((snapshot) => {
            this.bpm_object = snapshot.val()
        })
    },
    mounted() {
        // History BPM 's Chart Components
        var ctx = document.getElementById('historyBPM').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Beat Per Minute',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            options: {}
        })
    },
    computed: {
        Get_5Last_BPMreverseSortedArray: function() {
            let bpm_array = []
            let bpm_object = this.bpm_object

            // Reverse Sorting Comparator
            function reverseSort(a, b) {
                return (a[0] > b[0]) ? -1 : (a[0] < b[0]) ? 1 : 0
            }

            // Change BPM Object to Array
            for (let log in bpm_object) {
                bpm_array.push([log, bpm_object[log]])
            }

            bpm_array.sort(reverseSort)         // DESC Sorting BPM Array
            return bpm_array.slice(0, 5)        // Return only 5 first element in array.
        }
    }
}
</script>