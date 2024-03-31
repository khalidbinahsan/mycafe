<script setup>
import { ref } from 'vue'
const items1 = [
    { id: 1, name: 'Espresso Supreme'},
    { id: 2, name: 'Mocha Madness'},
    { id: 3, name: 'Caramel Dream'},
    { id: 4, name: 'Vanilla Bean Bliss'},
    { id: 5, name: 'Hazelnut Heaven'},
    { id: 6, name: 'Colombian Gold'},
    { id: 7, name: 'Ethiopian Sunrise'},
    { id: 8, name: 'French Roast Delight'}
]
const items2 = [
    {id: 9, name: 'Irish Cream Infusion'},
    {id: 10, name: 'Java Jive'},
    {id: 11, name: 'Pumpkin Spice Perfection'},
    {id: 12, name: 'Coconut Cream Concoction'},
    {id: 13, name: 'Raspberry Rapture'},
    {id: 14, name: 'Almond Amaretto Elixir'},
    {id: 15, name: 'Dark Chocolate Decadence'},
    {id: 16, name: 'Maple Pecan Pleasure'} 
]
function alertMsg(index){
    alert(items1[index].name)
}
function alertMsg2(index){
    alert(items2[index].name)
}
</script>

<template>
    <section class="container mx-auto min-h-[70vh] max-w-screen-xl p-3">
        <div class="max-w-[800px] rounded mx-auto bg-amber-100">
            <div class="bg-[#824A31] p-3 rounded">
                <h2 class="text-white text-2xl text-center">Menu Items</h2>
            </div>
            <div class="flex">
                <div class="basis-1/2">
                    <div @click="alertMsg(index)" v-for="(item, index) in items1" :key="index" class="p-3 cursor-pointer border hover:bg-orange-500 hover:text-white">{{ item.name }}</div>
                </div>
                <div class="basis-1/2">
                    <div @click="alertMsg2(index)" v-for="(item, index) in items2" :key="index" class="p-3 cursor-pointer border hover:bg-orange-500 hover:text-white">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>