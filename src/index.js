import express from "express";
import cors from "cors";
import { scoreDISC } from "./utils/scoreDISC.js";
import { scoreGifts } from "./utils/scoreGifts.js";
import { buildResultHTML } from "./templates/resultTemplate.js";
import { sendEmail } from "./utils/sendEmail.js";
import { buildExcelAttachment } from "./utils/buildExcelAttachment.js";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "https://one01church-growth-track.onrender.com",
    methods: ["POST", "GET"],
  })
);

app.use(express.json());

// results endpoint
app.post("/results", async (req, res) => {
  const { answers } = req.body;

  const discResult = scoreDISC(answers);
  const giftsResult = scoreGifts(answers);
  const attachment = await buildExcelAttachment(giftsResult.map(g => g.gift));
  const html = buildResultHTML({ discResult, giftsResult });

  res.json({
    html,
    attachment: attachment.toString("base64"), // send as base64
  });
});

// send endpoint
app.post("/send", async (req, res) => {
  const { email, html, attachment } = req.body;

  if (!email || !html || !attachment) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const buffer = Buffer.from(attachment, "base64");

  try {
    await sendEmail(email, html, buffer);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
