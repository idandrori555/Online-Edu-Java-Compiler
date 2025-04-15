import path, { dirname } from "node:path";

import express from "npm:express";
import cors from "npm:cors";

import { createAndRun } from "./functions.ts";

const __dirname = dirname(import.meta.url);
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// handle api
app.post("/api/:language", async (req, res) => {
  try {
    const response = await createAndRun(req.body?.code, req.params.language);
    res.status(200).json({ out: response });
  } catch (error) {
    res.status(500).json({ out: error?.toString() ?? "Error!" });
  }
});

// serve static content on /
app.get("/", (_req, res) => {
  console.log(path.join(__dirname, "public", "index.html"));

  res.sendFile(path.join(__dirname, "index.html"), (err) => {
    if (err) {
      console.error("Error sending file");
      res.status(500).send("Error sending file");
    } else {
      console.log("File sent successful");
    }
  });
});

app.listen(PORT, () => console.log(`OPEN ON: http://127.0.0.1:${PORT}`));
