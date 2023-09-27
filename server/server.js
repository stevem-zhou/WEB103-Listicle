import express from "express";
import minecraftRouter from "./routes/minecraftItems.js";
import "./config/dotenv.js"

const app = express();

app.use("/public", express.static("./public"));

app.use("/scripts", express.static("./public/scripts"));

const PORT = process.env.PORT || 3002;

app.use("/minecraftItems", minecraftRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Minecraft Items API</h1>'
    );
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
