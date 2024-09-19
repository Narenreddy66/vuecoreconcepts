<template>
    <div>
        <h1>Pinia</h1>
        <PiniaComp />
    </div>
    <hr>
    <div>
        <h1>Provide/Inject example</h1>
        <h3>Parent Component</h3>
        <p>Value provided: {{ message }}</p>
        <!-- Child component will receive the provided value -->
        <ChildComp />
    </div>
    <hr>
    <div>
        <h1>Teleport Example</h1>

        <button @click="showModal = true">Open Modal</button>

        <!-- Use the modal component -->
        <ModalComp :show="showModal" @close="showModal = false" />
    </div>
</template>

<script setup>
import PiniaComp from './PiniaComp.vue';
import { provide, ref } from 'vue';
import ChildComp from './ChildComp.vue';
import ModalComp from './ModalComp.vue';
const showModal = ref(false);
const message = 'Hello from Parent!';
provide('providedValue', message);
</script>