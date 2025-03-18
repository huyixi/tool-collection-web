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
        name: "Figma",
        summary: "A collaborative interface design tool.",
        url: "https://www.figma.com",
        icon: "https://www.figma.com/favicon.ico",
    },
    {
        name: "CodePen",
        summary: "An online code editor and testing environment.",
        url: "https://codepen.io",
        icon: "https://blog.codepen.io/wp-content/uploads/2014/08/codepen-wordmark-display-inside-white@10x.png",
    },
    {
        name: "Canva",
        summary: "A simple graphic design tool for everyone.",
        url: "https://www.canva.com",
        icon: "https://static.canva.com/static/images/favicon.ico",
    },
];
</script>
