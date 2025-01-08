import "./tailwind.config";
import "./build";

import * as middleware from "middleware";
import { html } from "@elysiajs/html";
import Elysia, { t } from "elysia";
import log from "logging";

// Import page templates here
import e404 from "./templates/e404";

import Home from "./templates/home";

const sstart = performance.now();
const server = new Elysia()
.use(middleware.rateLimiter)
.use(middleware.staticFiles)
.use(html())

.onError(({ code }) => { if (code === "NOT_FOUND") return new Response(e404() as string, { headers: { "Content-Type": "text/html" }})})
// Add routes here
.get("/", () => <Home />)


try {
    server.listen({ port: 3000 });

    log(performance.now() - sstart, "Start server");
    log(performance.now(), "Total start time");
} catch(e: any) {
    console.log("Houston we have a problem.");
    process.exit(0);
};