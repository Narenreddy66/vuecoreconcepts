<template>
    <div>
        <h2>Component A</h2>
        <p>This is component A. Counter: {{ counter }}</p>
        <button @click="counter++">Increment A</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0, // Preserved state
        };
    },
};
</script>