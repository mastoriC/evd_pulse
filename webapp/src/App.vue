<template>
    <div>
        <router-view/>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap');

body {
    cursor: default;
    font-family: 'Sarabun', sans-serif;
}
.center-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    color: hsl(185, 90%, 50%);
}

.i-bg-dark {
    background-color: #222;
    color: #fff;
}
.i-text-grey {
    color: #555;
}
</style>