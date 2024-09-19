<template>
    <div>
        <p>Count: {{ counter.count }}</p>
        <p>Double Count: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">Increment</button>
        <button @click="counter.decrement">Decrement</button>
        <button @click="counter.fetchDta">FetchData</button>
        {{ counter.data }}
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store';



const counter = useCounterStore() // Access the store


</script>