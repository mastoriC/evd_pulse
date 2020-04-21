<template>
    <router-view/>
</template>
<style>
body {
    cursor: default;
    font-family: Arial, Helvetica, sans-serif;
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
</style>