<template>
    <div>
        <h2>Child Component</h2>
        <p>Injected Value: {{ injectedValue }}</p>
    </div>

    <div>
        <h1>TransitionGroup Example</h1>

        <button @click="addItem">Add Item</button>
        <button @click="removeItem">Remove Item</button>

        <!-- TransitionGroup for animating the list -->
        <transition-group name="fade" tag="ul">
            <li v-for="(item, index) in items" :key="index" class="list-item">
                {{ item }}
            </li>
        </transition-group>
    </div>

    <div>
        <h1>KeepAlive Example</h1>

        <button @click="showComponent('ComponentA')">Show Component A</button>
        <button @click="showComponent('ComponentB')">Show Component B</button>

        <!-- KeepAlive to cache components -->
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
// import ComponentA from './ComponentA.vue';
// import ComponentB from './ComponentB.vue';

const items = ref([1, 2, 3, 4, 5, 6, "narenreddy"]);
const currentComponent = ref('ComponentA');

// Inject the value provided by the parent component
const injectedValue = inject('providedValue');

const addItem = () => {
    const newItem = items.value.length + 1;
    items.value.push(newItem);
};

const removeItem = () => {
    if (items.value.length > 0) {
        items.value.pop();
    }
};

// Function to toggle between components
const showComponent = (component) => {
    currentComponent.value = component;
};
</script>

<style scoped>
/* Transition for the list items */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

ul {
    list-style: none;
    padding: 0;
}

.list-item {
    margin: 10px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>