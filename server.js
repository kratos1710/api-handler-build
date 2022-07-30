import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static("public"));
app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});
app.listen(8080, () => {
  console.log("app is working on port :: 8080");
});