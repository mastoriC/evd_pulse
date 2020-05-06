<template>
    <div>
        <div class="center-middle text-center w-100">
            <span id="header" class="display-4 font-weight-lighter">
                <span class="d-none d-md-inline">Everyday Pulse</span>
                <span class="d-inline d-md-none">EVD Pulse</span>
            </span>
            <div class="col-12 col-lg-4 offset-lg-4 my-5">
                <div class="row mx-auto">
                    <router-link tag="div" to="/dashboard" id="BPMbtn" class="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 h5 py-2 px-4 rounded-lg i-bg-red">
                        Your BPM
                    </router-link>
                </div>
            </div>
        </div>
        <div id="toInfo">
            <router-link tag="div" to="/info" class="rounded-circle bg-white p-4 shadow hover-color">
                <b-icon-bookmarks-fill class="h2 center-middle"></b-icon-bookmarks-fill>
                <div class="p-2"></div>
            </router-link>
        </div>
        <div class="bg-decorate-white"></div>
        <div class="bg-decorate-red"></div>
    </div>
</template>
<style scoped>
#header {
    letter-spacing: 8px;
    animation: moreSpace 2.5s ease-out;
}
@keyframes moreSpace {
    from {
        letter-spacing: 2px;
    }
    to {
        letter-spacing: 8px;
    }
}
#toInfo {
    position: absolute;
    top: calc(100% - 16px);
    left: calc(100% - 16px);
    transform: translate(-100%, -100%);
    animation: slideIn 3.5s;
    transition: .4s;
}
.hover-color {
    color: #333;
    transition: .4s;
}
.hover-color:hover {
    color: hsl(185, 65%, 40%);
}
.hover-color:active {
    color: hsl(185, 65%, 40%);
    transform: scale(0.925);
}
@keyframes slideIn {
    0% {
        left: calc(105%);
    }
    75% {
        left: calc(105%);
    }
    100% {
        left: calc(100% - 16px);
    }
}

.bg-decorate-white {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 45%;
    border-bottom-right-radius: 196px;
    bottom: 12vh;
    background: #FFF;
}
.bg-decorate-red {
    position: absolute;
    z-index: -2;
    width: 100%;
    height: 50%;
    bottom: 0;
    background: hsl(348, 83%, 47%);
    animation: fillIn 2.5s ease-in-out;
}
@keyframes fillIn {
    from {
        left: 100%;
        border-bottom-left-radius: 1024px;
    }
    to {
        left: 0%;
        border-bottom-left-radius: 0px;
    }
}
#BPMbtn {
    animation: fadeIn 2s ease-in-out;
    transition: .4s;
}
#BPMbtn:hover {
    transform: scale(1.05);
}
#BPMbtn:active {
    transform: scale(0.75);
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
<script>
export default {
    created() {
        document.documentElement.style.overflow = 'hidden'
    }
}
</script>