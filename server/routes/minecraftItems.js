import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import MinecraftItemsController from '../controllers/minecraftitems.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", MinecraftItemsController.getMinecraftItems);

router.get("/:minecraftItemId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/minecraftItem.html"));
});

export default router;
