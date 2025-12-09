import "dotenv/config";
import express from "express";
import { config } from "./config/config";
import prisma from "./lib/prisma";

const app = express();

// Middleware
app.use(express.json());

prisma.$queryRaw`SELECT 1`
  .then(() => console.log("🟢 Database connection established!"))
  .catch((err: Error) => console.error("❌ Failed to connect:", err));

// Routes
// app.use('/api/routes', routes);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
