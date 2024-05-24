import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
        title: "Pomelo API Documentation",
        version: "1.0.0",
      },
    },
  }))
  .get("/about", () => {
    return {
      "name": "Pomelo API Service",
      "version": "v1.0.0",
    };
  }).listen(
    3300,
  );

console.log(
  `🍊Pomelo is running at ${app.server?.hostname}:${app.server?.port}`,
);
