<template>
    <div>
        <h2>Component B</h2>
        <p>This is component B. Counter: {{ counter }}</p>
        <button @click="counter++">Increment B</button>
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