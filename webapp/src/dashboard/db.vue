<template>
    <div>
        <div class="container-fluid i-bg-red p-5">
            <div class="h4 mb-0">Dashboard</div>
        </div>
        <div class="container-fluid p-5">
            <div class="row">
                <div class="col-4">
                    <div class="h5 mb-2">5-Last Messurement</div>
                    <div class="p-3 bg-light">
                        <div class="d-inline-block h5 mb-0">184 BPM</div>
                        <div class="d-inline-block font-weight-light float-right">{{ new Date() | moment("D MMM YYYY &#8212 hh:mm A") }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {

        }
    },
    created() {

    }
}
</script>