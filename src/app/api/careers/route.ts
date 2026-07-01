import { NextResponse } from "next/server"
import { sendEmail, getCareersTemplate, getUserConfirmationTemplate } from "@/lib/mail-service"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string

    // 1. Send email to Admin
    await sendEmail({
      to: process.env.NEXT_PUBLIC_TO_EMAIL || "daffodilsconventexamination@gmail.com",
      subject: `NEW CAREER APPLICATION: ${name} (${position})`,
      html: getCareersTemplate({ name, email, phone, position, experience, message }),
    })

    // 2. Send confirmation to Candidate
    if (email) {
      await sendEmail({
        to: email,
        subject: "Job Application Received - Daffodils Convent School",
        html: getUserConfirmationTemplate(name),
      })
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" })
  } catch (error) {
    console.error("Error sending careers email:", error)
    return NextResponse.json({ success: false, error: "Failed to submit application" }, { status: 500 })
  }
}
