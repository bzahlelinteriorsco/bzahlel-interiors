import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      consultation,
      date,
      time,
      message,
    } = body;

    await resend.emails.send({
      from: "B.ZAHLEL Interiors <onboarding@resend.dev>",
      to: "bzahlelinteriors.co@gmail.com",
      subject: "New Consultation Request",
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Consultation:</strong> ${consultation}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

   return NextResponse.json(
  { success: false },
  { status: 500 }
);
  }
}