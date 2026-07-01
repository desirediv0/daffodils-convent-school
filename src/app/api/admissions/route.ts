
import { NextResponse } from "next/server"
import { sendEmail, getAdmissionsTemplate, getUserConfirmationTemplate } from "@/lib/mail-service"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // 1. Send email to Admin
    await sendEmail({
      to: process.env.NEXT_PUBLIC_TO_EMAIL || "daffodilsconventexamination@gmail.com",
      subject: `NEW ADMISSION ENQUIRY: ${data.studentName} (${data.classApplying})`,
      html: getAdmissionsTemplate(data)
    })

    // 2. Send confirmation to User
    if (data.email) {
      await sendEmail({
        to: data.email,
        subject: "Admission Inquiry Received - Daffodils Convent School",
        html: getUserConfirmationTemplate(data.parentName)
      })
    }

    return NextResponse.json({ success: true, message: "Admission inquiry sent successfully" })
  } catch (error) {
    console.error("Error sending admissions email:", error)
    return NextResponse.json({ success: false, error: "Failed to send enquiry" }, { status: 500 })
  }
}
