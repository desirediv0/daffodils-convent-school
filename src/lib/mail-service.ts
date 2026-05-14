
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
})

export const sendEmail = async ({ to, subject, html }: { to: string, subject: string, html: string }) => {
  const mailOptions = {
    from: `"Daffodils Convent School" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
    to,
    subject,
    html,
  }

  return transporter.sendMail(mailOptions)
}

interface AdmissionData {
  studentName: string
  dob: string
  classApplying: string
  prevSchool?: string
  parentName: string
  phone: string
  address: string
  message?: string
}

export const getAdmissionsTemplate = (data: AdmissionData) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0d2d23; padding: 40px 20px; text-align: center;">
        <h1 style="color: #cca300; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">DAFFODILS CONVENT SCHOOL</h1>
        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; font-weight: 600; opacity: 0.8; text-transform: uppercase; letter-spacing: 2px;">Admission Inquiry Received</p>
      </div>
      <div style="padding: 40px; color: #1e293b;">
        <h2 style="font-size: 20px; font-weight: 800; color: #0d2d23; margin-top: 0;">New Admission Enquiry Details</h2>
        <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-top: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Student Name</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.studentName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Date of Birth</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.dob}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Class Applying For</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.classApplying}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Previous School</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.prevSchool || 'N/A'}</td>
            </tr>
            <tr><td colspan="2" style="border-bottom: 1px solid #e2e8f0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding: 15px 0 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Parent Name</td>
              <td style="padding: 15px 0 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.parentName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Residential Address</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 14px; font-weight: 600; line-height: 1.5;">${data.address}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px;">
          <h3 style="font-size: 14px; font-weight: 800; color: #0d2d23; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Additional Message:</h3>
          <p style="background-color: #fffbeb; border-left: 4px solid #cca300; padding: 15px; color: #92400e; font-size: 14px; font-weight: 600; margin: 0; line-height: 1.6; border-radius: 4px;">
            ${data.message || 'No additional message provided.'}
          </p>
        </div>
      </div>
      <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: 600;">&copy; 2026 Daffodils Convent School. All Rights Reserved.</p>
        <p style="margin: 5px 0 0 0; font-size: 11px; color: #94a3b8; font-weight: 500;">114, Street No. 12, Chetan Basti, Anand Parbat, New Delhi</p>
      </div>
    </div>
  `
}

interface ContactData {
  name: string
  phone: string
  classFor?: string
  subject: string
  message: string
}

export const getContactTemplate = (data: ContactData) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0d2d23; padding: 40px 20px; text-align: center;">
        <h1 style="color: #cca300; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">DAFFODILS CONVENT SCHOOL</h1>
        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; font-weight: 600; opacity: 0.8; text-transform: uppercase; letter-spacing: 2px;">New Website Enquiry</p>
      </div>
      <div style="padding: 40px; color: #1e293b;">
        <h2 style="font-size: 20px; font-weight: 800; color: #0d2d23; margin-top: 0;">Enquiry Details</h2>
        <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-top: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Name</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Class For</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.classFor || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Inquiry Type</td>
              <td style="padding: 8px 0; color: #0d2d23; font-size: 15px; font-weight: 700;">${data.subject}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px;">
          <h3 style="font-size: 14px; font-weight: 800; color: #0d2d23; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Message:</h3>
          <p style="background-color: #f1f5f9; border-left: 4px solid #0d2d23; padding: 15px; color: #334155; font-size: 14px; font-weight: 600; margin: 0; line-height: 1.6; border-radius: 4px;">
            ${data.message}
          </p>
        </div>
      </div>
      <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: 600;">&copy; 2026 Daffodils Convent School. All Rights Reserved.</p>
        <p style="margin: 5px 0 0 0; font-size: 11px; color: #94a3b8; font-weight: 500;">Admin Dashboard Notification</p>
      </div>
    </div>
  `
}

export const getUserConfirmationTemplate = (name: string) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0d2d23; padding: 40px 20px; text-align: center;">
        <h1 style="color: #cca300; margin: 0; font-size: 28px; font-weight: 900;">THANK YOU</h1>
        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; font-weight: 500; opacity: 0.9;">We have received your enquiry!</p>
      </div>
      <div style="padding: 40px; text-align: center; color: #1e293b;">
        <h2 style="font-size: 22px; font-weight: 800; color: #0d2d23; margin-top: 0;">Hi ${name},</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 30px;">
          Thank you for reaching out to **Daffodils Convent School**. We appreciate your interest in our institution. 
          Our team has received your details and will get back to you shortly to assist you further.
        </p>
        <div style="display: inline-block; background-color: #0d2d23; color: #ffffff; padding: 15px 30px; border-radius: 12px; font-weight: 800; text-decoration: none; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
          Enquiry Under Review
        </div>
        <p style="font-size: 14px; color: #94a3b8; margin-top: 30px;">
          If you have any urgent queries, feel free to call us at:<br/>
          <strong style="color: #0d2d23;">+91 7532817306</strong>
        </p>
      </div>
      <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: 600;">Daffodils Convent School • Inspiring Excellence</p>
      </div>
    </div>
  `
}
