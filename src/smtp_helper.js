import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = expressAsyncHandler(async (formData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_LOGIN,
    to: process.env.SMTP_LOGIN,
    subject: "Access Request",
    text: `
      Name: ${formData.firstName}
      Email: ${formData.email}
      GitHub Profile: ${formData.githubProfile}
      Message: ${formData.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});

export default sendEmail;
