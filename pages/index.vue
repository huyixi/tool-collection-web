<template>
    <div class="min-h-screen bg-gray-100 p-6">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-center mb-6">我的工具箱</h1>
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
        summary: "快速找出两份名单中不同的名字。",
        url: "https://name-comparison.huyixi.com",
        icon: "/images/name.png",
    },
    {
        name: "25佛山草莓排班表",
        summary: "2025年佛山草莓饮品组排班表",
        url: "https://fs25.huyixi.com",
        icon: "/images/strawberry.png",
    },
    {
        name: "tic-tac-toe",
        summary: "React 教程的练习小游戏",
        url: "https://tic-tac-toe.huyixi.com/",
        icon: "/images/tic-tac-toe.svg",
    },
    {
        name: "时间进度表",
        summary: "使用 Svelte 搭建的年度时间进度条",
        url: "https://yearsprogress.huyixi.com/",
        icon: "/images/year-progress.svg",
    },

    {
        name: "即将到来",
        summary: "A collaborative interface design tool.",
        url: "https://www.figma.com",
        icon: "/images/name.png",
    },
];

// const tools = [
//     {
//         name: "名单比对",
//         summary: "找出是两份名单中不同的名字.",
//         url: "https://name-comparison.huyixi.com",
//         icon: "/images/name.png",
//     },
// ];
</script>
