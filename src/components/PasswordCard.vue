<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    password: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <RouterLink class="password-link" :to="{ name: 'password-details', params: { id: password.id } }">
        <div class="password-card">
            <!-- Display password data -->
            <h2>{{ password.title }}</h2>
            <span>@{{ password.time }} on {{ password.date }}</span>
        </div>
    </RouterLink> |
</template>

<style scoped>
.password-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.password-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.password-link {
    color: #2c3e50;
    text-decoration: none;
}
</style>
