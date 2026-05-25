
"use client"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Sparkles, Loader2 } from "lucide-react"
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHero } from "@/components/ui/PageHero"
import { cn } from "@/lib/utils"

const contactDetails = [
  {
    icon: MapPin,
    label: "Main Campus",
    value: "114, Street No. 12, Chetan Basti, Block J, Nehru Nagar, Anand Parbat, New Delhi, Delhi, 110008",
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
  },
  {
    icon: Phone,
    label: "Admissions Helpline",
    value: "+91 7532817306",
    href: "tel:+917532817306",
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)",
  },
  {
    icon: Mail,
    label: "General Enquiries",
    value: "daffodilsconventinformation@gmail.com",
    href: "mailto:daffodilsconventinformation@gmail.com",
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 8:00 AM – 3:00 PM",
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)",
  },
]

const classOptions = ["Nursery", "LKG", "UKG / K.G.", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Other"]
const sectionOptions = ["A", "B", "C", "D", "N/A"]
const subjectOptions = ["Admission Enquiry", "Fee Related", "Academic Concerns", "Transport", "General Info", "Other"]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ name: "", phone: "", email: "", classFor: "", section: "", subject: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setSubmitted(true)
        setForm({ name: "", phone: "", email: "", classFor: "", section: "", subject: "", message: "" })
      } else {
        setError("Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Get in Touch"
        subtitle="Have questions? Our admissions team is here to help you navigate your child's educational journey."
        breadcrumb="Contact Us"
      />

      {/* ─── CONTACT CARDS ────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="p-8 rounded-xl bg-green-50 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Icon className="h-8 w-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-school-green-dark text-base leading-tight hover:text-school-gold transition-colors block break-words">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-school-green-dark text-base leading-tight break-words">{item.value}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MAP & FORM ───────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Location & Details */}
            <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
              <div>
                <Badge
                  className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
                  style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
                >
                  VISIT OUR CAMPUS
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                  Reach Out to Our <br />
                  <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Concierge Team</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                  Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.
                </p>
              </div>

              {/* Map Container */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-school-green/5 rounded-3xl blur-2xl group-hover:bg-school-gold/10 transition-colors" />
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-4 md:border-8 border-white shadow-2xl z-10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.87068275133!2d77.16307037550192!3d28.66359047564777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02e92977c1d3%3A0xea6c880c778a1c5b!2sDaffodils%20Convent%20School!5e0!3m2!1sen!2sin!4v1777970159255!5m2!1sen!2sin"
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="School Location"
                    />
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full h-14 rounded-xl border-2 border-slate-200 text-slate-600 font-black hover:bg-school-green-dark hover:text-white hover:border-school-green-dark transition-all gap-3 shadow-lg">
                  <a href="https://maps.app.goo.gl/Th3bqSCA8tg4LKxb7" target="_blank" rel="noreferrer">
                    <MapPin className="h-5 w-5 text-school-gold" />
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </a>
                </Button>

                {/* Social Media Links */}
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Stay Connected</p>
                  <div className="flex gap-4">
                    {[
                      { icon: FaInstagram, color: "hover:bg-pink-600", href: "https://www.instagram.com/daffodilsconventschool" },
                      { icon: FaFacebookF, color: "hover:bg-blue-600", href: "https://www.facebook.com/share/1E2jA5NuJG/" },
                      { icon: FaYoutube, color: "hover:bg-red-600", href: "https://youtube.com/@daffodilsschool8512?si=g2qjQM6aYJB35Q8r" },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white shadow-sm",
                          s.color
                        )}
                      >
                        <s.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-12 duration-1000">
              <div className="bg-white p-6 sm:p-12 md:p-16 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative">
                <div className="absolute -top-6 -right-6 h-20 w-20 bg-school-gold/10 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="h-10 w-10 text-school-gold" />
                </div>

                {submitted ? (
                  <div className="text-center py-20 space-y-6">
                    <div className="h-24 w-24 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="h-12 w-12 text-school-green" />
                    </div>
                    <h3 className="text-3xl font-black text-school-green-dark">Message Sent!</h3>
                    <p className="text-slate-500 font-bold max-w-sm mx-auto">Thank you for reaching out. Our admissions counselor will contact you within 24 working hours.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-xl font-black">Send another message</Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-12">
                      <h3 className="text-2xl font-black text-school-green-dark mb-4">Send an Enquiry</h3>
                      <p className="text-slate-400 font-medium">Please fill in the details below and we&apos;ll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Guardian Name *</Label>
                          <Input id="name" placeholder="John Doe" required className="h-14 rounded-xl border-slate-200 focus:border-school-green focus:ring-school-green-light font-bold" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="h-14 rounded-xl border-slate-200 focus:border-school-green focus:ring-school-green-light font-bold" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Email Address *</Label>
                          <Input id="email" type="email" placeholder="example@mail.com" required className="h-14 rounded-xl border-slate-200 focus:border-school-green focus:ring-school-green-light font-bold" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="class" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Admission For</Label>
                          <select id="class" className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-school-green-light" value={form.classFor} onChange={(e) => setForm({ ...form, classFor: e.target.value })}>
                            <option value="">Select Class</option>
                            {classOptions.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="section" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Section</Label>
                          <select id="section" className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-school-green-light" value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}>
                            <option value="">Select Section</option>
                            {sectionOptions.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                        <div className="space-y-3 lg:col-span-1 md:col-span-2 lg:col-auto">
                          <Label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Inquiry Type *</Label>
                          <select id="subject" required className="h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-school-green-light" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                            <option value="">Select Category</option>
                            {subjectOptions.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-school-green-dark/60 ml-1">Your Message *</Label>
                        <Textarea id="message" placeholder="Tell us more about your child..." required rows={6} className="rounded-xl border-slate-200 focus:border-school-green focus:ring-school-green-light font-bold" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm font-bold text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
                      )}
                      <Button type="submit" disabled={loading} size="lg" className="w-full h-16 rounded-xl font-black text-lg gap-4 shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100" style={{ backgroundColor: "var(--school-green-dark)", color: "white" }}>
                        {loading ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5 text-school-gold" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="h-5 w-5 text-school-gold" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK CONTACT BAR ────────────────────────────── */}
      <section className="py-12 bg-school-green-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-white">
              <MessageSquare className="h-10 w-10 text-school-gold" />
              <div>
                <p className="font-black text-xl">Prefer WhatsApp?</p>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Direct Message Our Team</p>
              </div>
            </div>
            <Button asChild size="lg" className="h-16 px-12 rounded-xl gap-3 font-black text-lg bg-white text-school-green-dark hover:bg-school-gold hover:text-school-green-dark transition-all">
              <a href="https://wa.me/917532817306" target="_blank" rel="noreferrer">
                Open WhatsApp Chat
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
