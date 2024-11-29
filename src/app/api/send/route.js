import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message} = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aliiyousseff144@gmail.com",
      subject: "Client email",
      replyTo: email,
      text: message,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
