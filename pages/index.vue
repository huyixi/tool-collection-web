<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">My Tool Collection</h1>
            <NuxtLink
                to="/add"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                </svg>
                Add Tool
            </NuxtLink>
        </div>

        <div class="mb-6">
            <SearchBar @search="handleSearch" />
        </div>

        <div v-if="loading" class="flex justify-center py-8">
            <div
                class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
            ></div>
        </div>

        <div v-else-if="!filteredTools.length" class="text-center py-8">
            <p class="text-gray-500 text-lg">
                No tools found. Add your first tool!
            </p>
        </div>

        <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <ToolCard
                v-for="tool in filteredTools"
                :key="tool.id"
                :tool="tool"
                @edit="navigateToEdit"
                @delete="confirmDelete"
            />
        </div>

        <div
            v-if="showDeleteModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h3 class="text-lg font-semibold mb-4">Confirm Delete</h3>
                <p>
                    Are you sure you want to delete this tool? This action
                    cannot be undone.
                </p>
                <div class="flex justify-end mt-6 space-x-3">
                    <button
                        @click="showDeleteModal = false"
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        @click="deleteTool"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useToolsStore } from "~/store/tools";

const toolsStore = useToolsStore();
const loading = ref(true);
const searchQuery = ref("");
const showDeleteModal = ref(false);
const toolToDelete = ref(null);

const fetchTools = async () => {
    loading.value = true;
    await toolsStore.fetchTools();
    loading.value = false;
};

onMounted(() => {
    fetchTools();
});

const filteredTools = computed(() => {
    if (!searchQuery.value) return toolsStore.tools;

    const query = searchQuery.value.toLowerCase();
    return toolsStore.tools.filter(
        (tool) =>
            tool.name.toLowerCase().includes(query) ||
            tool.summary.toLowerCase().includes(query),
    );
});

const handleSearch = (query) => {
    searchQuery.value = query;
};

const navigateToEdit = (tool) => {
    navigateTo(`/tool/${tool.id}/edit`);
};

const confirmDelete = (id) => {
    toolToDelete.value = id;
    showDeleteModal.value = true;
};

const deleteTool = async () => {
    await toolsStore.deleteTool(toolToDelete.value);
    showDeleteModal.value = false;
    toolToDelete.value = null;
};
</script>
