<template>
    <!-- Teleport content to the body of the document -->
    <teleport to="body">
        <div v-if="show" class="modal">
            <div class="modal-content">
                <h2>Modal Dialog</h2>
                <p>This is a modal dialog teleported to the body element.</p>
                <button @click="closeModal">Close Modal</button>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>