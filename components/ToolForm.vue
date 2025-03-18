<template>
    <form
        @submit.prevent="submitForm"
        class="space-y-6 bg-white shadow-md rounded-lg p-6"
    >
        <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? "Edit Tool" : "Add New Tool" }}
        </h2>

        <div class="space-y-4">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                >
                <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tool name"
                />
            </div>

            <div>
                <label for="url" class="block text-sm font-medium text-gray-700"
                    >URL</label
                >
                <input
                    id="url"
                    v-model="formData.url"
                    type="url"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com"
                />
            </div>

            <div>
                <label
                    for="summary"
                    class="block text-sm font-medium text-gray-700"
                    >Summary</label
                >
                <textarea
                    id="summary"
                    v-model="formData.summary"
                    rows="3"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of the tool"
                ></textarea>
            </div>
        </div>

        <div class="flex justify-end">
            <button
                type="button"
                @click="$emit('cancel')"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2"
            >
                Cancel
            </button>
            <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {{ isEditing ? "Update Tool" : "Add Tool" }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
    editingTool: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["submit", "cancel"]);

const formData = ref({
    name: "",
    url: "",
    summary: "",
});

const isEditing = ref(false);

onMounted(() => {
    if (props.editingTool) {
        formData.value = { ...props.editingTool };
        isEditing.value = true;
    }
});

const submitForm = () => {
    emit("submit", { ...formData.value });
    formData.value = { name: "", url: "", summary: "" };
};
</script>
