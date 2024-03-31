<script setup>

</script>

<template>
<section class="container mx-auto min-h-[70vh] max-w-screen-xl flex items-center justify-center">
<div>
    <h3 class="text-3xl font-bold text-[#824A31] text-center italic mt-5 md:mt-2">Welcome to CoffeChat</h3>
    <div class="md:flex">
    <img class="max-w-[300px]" src="https://parspng.com/wp-content/uploads/2022/12/coffeepng.parspng.com_.png" alt="coffee cup">
    <img class="max-w-[300px]" src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-black-ceramic-coffee-mug-png-image_9124456.png" alt="coffee cup">
    <img class="max-w-[300px]" src="https://parspng.com/wp-content/uploads/2022/12/coffeepng.parspng.com_.png" alt="coffee cup">
</div>
<div class="flex justify-center m-5"><router-link :to="{name: 'Menu'}" class="p-3 bg-[#824A31] text-2xl text-white rounded">See Menu Items</router-link></div>
</div>
</section>
</template>

<style scoped>

</style>