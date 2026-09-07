import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "B.ZAHLEL Interiors <onboarding@resend.dev>",
      to: ["bzahlelinteriors.co@gmail.com"],
      subject: "New Mailing List Subscriber",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Mailing List Subscriber</h2>

          <p>A visitor has subscribed to the B.ZAHLEL Interiors mailing list.</p>

          <p>
            <strong>Subscriber email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Website:</strong> B.ZAHLEL Interiors
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { success: false, message: "Email could not be sent" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Newsletter error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}