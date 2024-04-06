Bun.serve({
    port: 3333,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return new Response(Bun.file(url.pathname));
      if (url.pathname === "/home") return new Response(Bun.file("./src/index.html"));
      if (url.pathname === "/api/products") return new Response(Bun.file("./src/products.json"));
      return new Response("404!");
    },
});
