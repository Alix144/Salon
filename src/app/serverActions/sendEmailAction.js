"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailAction = async (formData) => {
  const name = await formData.get("name");
  const email = await formData.get("email");
  const message = await formData.get("message");

  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aliiyousseff144@gmail.com",
      subject: "Client email",
      replyTo: email,
      text: message,
    });

  } catch (error) {
    return error
  }

};
export default sendEmailAction;
