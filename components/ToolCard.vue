<template>
    <div class="bg-white p-4 rounded-lg shadow-md hover:pointer">
        <NuxtLink :to="tool.url">
            <!-- <NuxtImg :src="tool.icon" alt="tool.name" class="h-12 w-12 mb-2" /> -->
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
