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

/**
 * Generate results for DISC & Gifts
 * Returns HTML and the Excel attachment as base64
 */
app.post("/results", async (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length !== 93) {
    return res.status(400).send("Invalid answers array");
  }

  try {
    const discResult = scoreDISC(answers);
    const giftsResult = scoreGifts(answers);
    const attachmentBuffer = await buildExcelAttachment(
      giftsResult.map((g) => g.gift)
    );
    const html = buildResultHTML({ discResult, giftsResult });

    // Send HTML + Excel file encoded as base64
    res.send({
      html,
      attachment: attachmentBuffer.toString("base64"),
    });
  } catch (err) {
    console.error("Error building results:", err);
    res.status(500).json({ error: "Failed to build results" });
  }
});

/**
 * Send results email with attachment
 * Expects email, html, and attachment (base64)
 */
app.post("/send", async (req, res) => {
  const { email, html, attachment } = req.body;

  if (!email || !html || !attachment) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const buffer = Buffer.from(attachment, "base64");
    await sendEmail(email, html, buffer);
    res.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
