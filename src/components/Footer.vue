<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>
<template>
<footer class="shadow p-8 border-t-2">
    <div class="text-center text-zinc-500">©{{ currentYear }}  CoffeeChat | All Rights Reserved</div>
</footer>
</template>

<style scoped>

</style>