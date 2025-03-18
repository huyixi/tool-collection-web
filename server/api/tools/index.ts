// server/api/tools/index.js
export default defineEventHandler(async (event) => {
  const { method } = event.node.req;

  // GET /api/tools - Get all tools
  if (method === "GET") {
    try {
      const client = useSupabaseClient();
      const { data, error } = await client
        .from("tools")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    }
  }

  // POST /api/tools - Create a new tool
  if (method === "POST") {
    try {
      const body = await readBody(event);
      const client = useSupabaseClient();

      // Get the user ID from the session
      const {
        data: { user },
      } = await client.auth.getUser();

      if (!user) {
        throw createError({
          statusCode: 401,
          statusMessage: "Unauthorized",
        });
      }

      const { data, error } = await client
        .from("tools")
        .insert([
          {
            ...body,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    }
  }
});

// server/api/tools/[id].js
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const { method } = event.node.req;

  // GET /api/tools/:id - Get a specific tool
  if (method === "GET") {
    try {
      const client = useSupabaseClient();
      const { data, error } = await client
        .from("tools")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    }
  }

  // PUT /api/tools/:id - Update a tool
  if (method === "PUT") {
    try {
      const body = await readBody(event);
      const client = useSupabaseClient();

      const { data, error } = await client
        .from("tools")
        .update(body)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    }
  }

  // DELETE /api/tools/:id - Delete a tool
  if (method === "DELETE") {
    try {
      const client = useSupabaseClient();
      const { error } = await client.from("tools").delete().eq("id", id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    }
  }
});
