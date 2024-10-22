import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.get("/", async (_, res) => {
  return res.json({ msg: "Hello World, this seems to work" });
});

app.listen(PORT, () => {
  console.log("api is apparently running on port " + PORT);
});