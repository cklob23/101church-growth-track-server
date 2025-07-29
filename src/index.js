import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { scoreDISC } from "./utils/scoreDISC.js";
import { scoreGifts } from "./utils/scoreGifts.js";
import { buildResultHTML } from "./templates/resultTemplate.js";
const router = express.Router();
//import sendRoute from "./routes/send.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//app.use("/send", sendRoute);
app.post("/results", (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length !== 93) {
    return res.status(400).send("Invalid answers array");
  }

  const discResult = scoreDISC(answers);
  const giftsResult = scoreGifts(answers);
  //console.log(giftsResult);
  //console.log(discResult);
  const html = buildResultHTML({ discResult, giftsResult });
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
