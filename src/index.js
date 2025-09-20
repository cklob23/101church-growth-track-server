import express from "express";
import cors from "cors";
import { scoreDISC } from "./utils/scoreDISC.js";
import { scoreGifts } from "./utils/scoreGifts.js";
import { buildResultHTML } from "./templates/resultTemplate.js";
import { sendEmail } from "./utils/sendEmail.js";
import { buildExcelAttachment } from "./utils/buildExcelAttachment.js";

const app = express();
const PORT = 4000;
let giftsResult = [];

app.use(
  cors({
    origin: "https://one01church-growth-track.onrender.com",
    methods: ["POST", "GET"],
  })
);
app.use(express.json());
app.post("/results", (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length !== 93) {
    return res.status(400).send("Invalid answers array");
  }

  const discResult = scoreDISC(answers);
  giftsResult = scoreGifts(answers);
  console.log(giftsResult);
  console.log(discResult);
  const html = buildResultHTML({ discResult, giftsResult });
  res.send(html);
});

app.post("/send", async (req, res) => {
  const { email, html } = req.body;

  if (!html) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const attachment = await buildExcelAttachment(giftsResult.map(g => g.gift));
    await sendEmail(email, html, attachment);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
