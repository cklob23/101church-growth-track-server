import nodemailer from "nodemailer";

/**
 * Sends an email with the given HTML body to a specified email address
 *
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject line of the email.
 * @param {string} htmlBody - The HTML content of the email.
 */

export async function sendEmail(htmlBody) {
  try {
    const transporter = nodemailer.createTransport({
      host: "imap.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "101churchgrowthtrack@gmail.com",
        pass: "a3jxc7klrvizxu$",
      },
      logger: true,
      debug: true,
    });

    const info = {
      from: '"101 Church Growth Track" <101churchgrowthtrack@gmail.com>',
      to: "klobe.caleb23@gmail.com",
      subject: "My DISC and Spiritual Gifts Results",
      html: htmlBody,
      headers: { "x-cloudmta-class": "standard" },
    };

    transporter.sendMail(info, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (err) {
    console.log(err);
    return ["Something went wrong", err];
  }
}
