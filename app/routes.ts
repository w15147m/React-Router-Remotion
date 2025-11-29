import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/videos/home.tsx"),
  route("/short", "./pages/shorts/home.tsx"),
  route("/api/lambda/progress", "./styles/routes/progress.tsx"),
  route("/api/lambda/render", "./styles/routes/render.tsx"),
] satisfies RouteConfig;
