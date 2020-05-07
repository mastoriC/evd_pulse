<template>
    <div>
        <router-view/>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800&display=swap');

body {
    cursor: default;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    color: #333;
}
.center-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.center-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.mvh {
    height: 100vh;
}
.z-n1 {
    z-index: -1;
}

.cursor-pointer {
    cursor: pointer;
}

.i-border-red {
    border: 1px solid hsl(348, 83%, 47%);
}
.i-bg-red {
    background-color: hsl(348, 83%, 47%);
    color: #fff;
}
.i-text-red {
    color: hsl(348, 83%, 47%);
}

.i-text-blue {
    color: hsl(185, 75%, 40%);
}

.i-bg-dark {
    background-color: #222;
    color: #fff;
}
.i-bg-vdark {
    background-color: #111;
    color: #fff;
}
.i-text-lightgrey {
    color: #888;
}
.i-text-grey {
    color: #555;
}
.i-bg-grey {
    background-color: #eee;
}
.i-bg-white {
    background-color: #fff;
    color: #333;
}
</style>