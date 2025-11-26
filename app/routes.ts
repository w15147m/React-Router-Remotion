import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("/api/lambda/progress", "./routes/progress.tsx"),
  route("/api/lambda/render", "./routes/render.tsx"),
] satisfies RouteConfig;
