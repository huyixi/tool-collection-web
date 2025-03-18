<template>
    <div class="min-h-screen bg-gray-100 p-6">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-center mb-6">Tool Collection</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ToolCard v-for="tool in tools" :key="tool.name" :tool="tool" />
            </div>
        </div>
    </div>
</template>

<script setup>
const tools = [
    {
        name: "名单比对",
        summary: "找出是两份名单中不同的名字.",
        url: "https://name-comparison.huyixi.com",
        icon: "/images/name-comparison.png",
    },
    {
        name: "即将到来",
        summary: "A collaborative interface design tool.",
        url: "https://www.figma.com",
        icon: "/images/name.png",
    },
];
</script>
