import nodemailer from "nodemailer";

/**
 * Sends an email with the given HTML body to a specified email address
 *
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject line of the email.
 * @param {string} htmlBody - The HTML content of the email.
 */

export async function sendEmail(email, subject, htmlBody) {
  const transporter = nodemailer.createTransport({
    host: "imap.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "101churchgrowthtrack@gmail.com",
      pass: "nysb lvlm audm ojdz",
    },
    logger: true,
    debug: true,
  });

  const info = {
    from: '"101 Church Growth Track" <101churchgrowthtrack@gmail.com>',
    to: email,
    subject: subject,
    html: htmlBody,
    headers: { "x-cloudmta-class": "standard" },
  };
  try {
    const mailInfo = await transporter.sendMail(info, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent successfully: ${mailInfo.messageId}`);
        return mailInfo;
      }
    });
  } catch (err) {
    console.log("Error sending email:", err);
    throw err;
  }
}
