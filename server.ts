import express from "express";
import next from "next";
import payload from "payload";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(async () => {
  const server = express();

  // 🚀 Serve uploaded media files
  server.use("/media", express.static(path.join(__dirname, "media")));

  // 🚀 Initialize Payload CMS (no secret here!)
  await payload.init({
    express: server, // attach payload to Express
    configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
    onInit: () => {
      console.log("📌 Payload Admin:", payload.getAdminURL());
    },
  });

  // 🚀 Next.js handles all other routes
  server.all("*", (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
