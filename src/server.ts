import index from "../index.html";

const server = Bun.serve({
  port: 8765,
  routes: {
    "/": index,
    "/public/*": async (req) => {
      const url = new URL(req.url);
      const file = Bun.file(`.${url.pathname}`);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not Found", { status: 404 });
    },
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at http://localhost:${server.port}`);
