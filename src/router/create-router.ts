import CreateRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";
import { Routes } from "./routes";

export function createRouter() {
  const router = CreateRouter(Routes, { defaultRoute: "/" });
  router.usePlugin(browserPlugin({ useHash: true }));
  router.usePlugin(loggerPlugin);

  return router;
}
