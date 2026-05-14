
import { NextResponse } from "next/server"
import { sendEmail, getContactTemplate, getUserConfirmationTemplate } from "@/lib/mail-service"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // 1. Send email to Admin
    await sendEmail({
      to: process.env.NEXT_PUBLIC_TO_EMAIL || "codeshorts007@gmail.com",
      subject: `New Website Enquiry: ${data.subject}`,
      html: getContactTemplate(data)
    })

    // 2. Send confirmation to User
    if (data.email) {
      await sendEmail({
        to: data.email,
        subject: "Thank you for contacting Daffodils Convent School",
        html: getUserConfirmationTemplate(data.name)
      })
    }
    
    return NextResponse.json({ success: true, message: "Enquiry sent successfully" })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ success: false, error: "Failed to send enquiry" }, { status: 500 })
  }
}
