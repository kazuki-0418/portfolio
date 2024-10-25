import { type NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer";
import { env } from "process";

export const POST = async (req: NextRequest) => {
  const requestBody = await req.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: requestBody.email,
    to: env.NODEMAILER_EMAIL,
    subject: `Message from Contact(${requestBody.name})`,
    text: requestBody.message,
  };

  try {
    transport.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
};
