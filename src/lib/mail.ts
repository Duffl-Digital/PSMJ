import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import React from "react";
import ThankYouTemplate from "../emails/ThankYouTemplate";
import AdminContactTemplate from "../emails/AdminContactTemplate";



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactMail(data: any) {

  const adminhtml = await render(
  React.createElement(AdminContactTemplate, {
    name: data.name,
    email: data.email,
    phone: data.phone,
    whatsapp: data.whatsapp,
    subject:data.subject,
    message: data.message,
  })
);

const thankYouHtml = await render(
  React.createElement(ThankYouTemplate, {
    name: data.name,
  })
);


// 1. Send enquiry to admin
await transporter.sendMail({
  from: `"PSMJ Contact Form" <${process.env.SMTP_USER}>`,
  to: process.env.ADMIN_EMAIL,
  subject: "New Contact Form Enquiry",
  html: adminhtml,
});

await transporter.sendMail({
  from: `"PSMJ" <${process.env.SMTP_USER}>`,
  to: data.email,
  subject: "Thank You for Contacting PSMJ",
  html: thankYouHtml,
});
}