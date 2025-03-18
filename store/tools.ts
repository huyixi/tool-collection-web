import { defineStore } from "pinia";

export const useToolsStore = defineStore("tools", {
  state: () => ({
    tools: [],
    currentTool: null,
  }),

  actions: {
    async fetchTools() {
      try {
        const { data } = await useFetch("/api/tools");
        this.tools = data.value || [];
      } catch (error) {
        console.error("Error fetching tools:", error);
        throw error;
      }
    },

    async fetchToolById(id) {
      try {
        const { data } = await useFetch(`/api/tools/${id}`);
        this.currentTool = data.value;
        return data.value;
      } catch (error) {
        console.error(`Error fetching tool ${id}:`, error);
        throw error;
      }
    },

    async addTool(tool) {
      try {
        const { data } = await useFetch("/api/tools", {
          method: "POST",
          body: tool,
        });
        this.tools.push(data.value);
        return data.value;
      } catch (error) {
        console.error("Error adding tool:", error);
        throw error;
      }
    },

    async updateTool(tool) {
      try {
        const { data } = await useFetch(`/api/tools/${tool.id}`, {
          method: "PUT",
          body: tool,
        });

        const index = this.tools.findIndex((t) => t.id === tool.id);
        if (index !== -1) {
          this.tools[index] = data.value;
        }

        return data.value;
      } catch (error) {
        console.error(`Error updating tool ${tool.id}:`, error);
        throw error;
      }
    },

    async deleteTool(id) {
      try {
        await useFetch(`/api/tools/${id}`, {
          method: "DELETE",
        });

        this.tools = this.tools.filter((tool) => tool.id !== id);
      } catch (error) {
        console.error(`Error deleting tool ${id}:`, error);
        throw error;
      }
    },
  },
});
