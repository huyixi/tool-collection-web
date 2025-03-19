<template>
    <div class="bg-white p-4 rounded-lg shadow-md hover:pointer">
        <NuxtLink :to="tool.url">
            <img :src="tool.icon" alt="Example" class="h-8 w-8 mb-2" />
            <h2 class="text-xl font-semibold">{{ tool.name }}</h2>
            <p class="text-gray-600">{{ tool.summary }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    tool: {
        type: Object,
        required: true,
    },
});
</script>
