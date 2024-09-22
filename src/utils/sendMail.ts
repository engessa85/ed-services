"use server"

import nodemailer from "nodemailer";

export async function sendEmail({
  from,
  name,
  subject,
  body,
}: {
  from: string;
  name: string;
  subject: string;
  body: string;
}) {

  const { SMPT_PASSWORD, SMPT_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: from,  // The email address entered by the user
      to: SMPT_EMAIL,  // Your email address where the form submission will be sent
      subject: subject || `New message from ${name}`,  // Subject provided by user or default
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${from}</p>
             <p><strong>Message:</strong> ${body}</p>`,  // HTML body containing user details
    });

    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
