import ejs from "ejs";
import { join } from "path";
import { Readable } from "stream";
import nodemailer from "nodemailer";
import { AttachmentLike } from "nodemailer/lib/mailer";

export default async function sendMail(
  recipient: string,
  subject: string,
  otp: string,
  file: string,
  data: DataInterface
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const location = join(process.cwd(), "views", "email", file);

    // Pass the otp variable along with other data
    const template = await ejs.renderFile(location, {
      LOGO: "https://cdn.dropp.cloud/",
      otp: otp,
      ...data,
    });

    const mailOptions = {
      to: recipient,
      subject,
      html: template as string | Buffer | Readable | AttachmentLike | undefined,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log("ERROR SENDING", error);
      } else {
        console.log("SENT");
      }
    });
  } catch (error) {
    console.log("mail error", error);
  }
}
