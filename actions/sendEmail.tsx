"use server";

import { Resend } from "resend";
import { ContactFormEmail } from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(message, 5000)) return { error: "Invalid message" };
  if (!validateString(email, 500)) return { error: "Invalid e-mail" };

  let data;
  try {
    data = resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "leonardopaini@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      html: "",
      react: ContactFormEmail({
        email: email as string,
        message: message as string
      })
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
