import express, { Express } from "express";

// routes
import homeRoutes from "./routes/home-route";

const app: Express = express();

app.use(homeRoutes)

export default app;
