
"use client"
import { useState } from "react"
import {
  CheckCircle2,
  GraduationCap,
  Users,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  BookOpen,
  Award,
  ShieldCheck,
  Heart,
  Laptop,
  Trophy,
  Library,
  ClipboardList,
  HelpCircle,
  Sparkles,
  Search,
  FileText,
  Globe
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHero } from "@/components/ui/PageHero"

const whyChooseUs = [
  {
    icon: Award,
    title: "Quality Education",
    desc: "We focus on academic excellence through modern teaching methods, concept-based learning, and continuous development.",
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)"
  },
  {
    icon: Users,
    title: "Experienced & Caring Teachers",
    desc: "Our dedicated faculty members ensure every child receives proper guidance and individual attention.",
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Positive Environment",
    desc: "We provide a disciplined, secure, and child-friendly atmosphere where students feel motivated to learn.",
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)"
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    desc: "Students participate in sports, cultural activities, competitions, and personality development programs.",
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)"
  },
  {
    icon: Heart,
    title: "Affordable Education",
    desc: "We believe quality education should be accessible and affordable for every family.",
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)"
  },
  {
    icon: Laptop,
    title: "Smart Learning Approach",
    desc: "Interactive classrooms and activity-based learning help students understand concepts effectively.",
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)"
  }
]

const steps = [
  {
    step: "01",
    title: "Admission Inquiry",
    desc: "Visit the campus or fill out our online form for all admission-related information."
  },
  {
    step: "02",
    title: "Registration",
    desc: "Complete the student registration form with accurate details to begin the process."
  },
  {
    step: "03",
    title: "Entrance Test / Interaction",
    desc: "Assessment for higher classes or a simple interaction for Nursery/KG students."
  },
  {
    step: "04",
    title: "Document Verification",
    desc: "Submit all necessary documents for verification by our administrative office."
  },
  {
    step: "05",
    title: "Admission Confirmation",
    desc: "Confirm admission by completing fee formalities within the provided timeline."
  }
]

const testSubjects = [
  { name: "English", icon: BookOpen },
  { name: "Mathematics", icon: Search },
  { name: "General Knowledge", icon: Globe },
  { name: "Subject Knowledge", icon: Library },
]

const eligibility = [
  { class: "Nursery", age: "Minimum 3+ Years" },
  { class: "KG", age: "Minimum 4+ Years" },
  { class: "Class I", age: "Minimum 5+ Years" },
  { class: "Higher Classes", age: "Previous Record & Test" },
]

const requiredDocs = [
  "Birth Certificate",
  "Aadhaar Card of Student",
  "Passport Size Photographs",
  "Previous Class Report Card",
  "Transfer Certificate (if applicable)",
  "Address Proof",
  "Parent ID Proof"
]

const coCurricular = [
  { icon: Heart, label: "Yoga & Meditation" },
  { icon: ShieldCheck, label: "Safety & Security" },
  { icon: Trophy, label: "Sports Activities" },
  { icon: Sparkles, label: "Festival Celebrations" },
]

const faqs = [
  {
    q: "Is admission open for all classes?",
    a: "Yes, admissions are open from Nursery to Class VIII subject to seat availability for the session 2026-27."
  },
  {
    q: "Is there an entrance test for admission?",
    a: "Yes, admissions are granted on the basis of an entrance assessment conducted by the school to maintain academic standards."
  },
  {
    q: "What documents are required?",
    a: "Basic documents such as Birth Certificate, Aadhaar Card, photographs, and previous report cards are required during the admission process."
  },
  {
    q: "How can I apply?",
    a: "Parents can visit the school campus personally or fill out the online admission inquiry form available on this page."
  }
]

const testimonials = [
  { text: "The school provides excellent discipline and quality education.", author: "Parent of Class IV Student" },
  { text: "Teachers are very supportive and caring towards students.", author: "Parent of Class II Student" },
  { text: "Best school environment for learning and overall development.", author: "Parent of Nursery Student" }
]

export function Admissions() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    classApplying: "",
    prevSchool: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setSubmitted(true)
        setForm({
          studentName: "",
          dob: "",
          classApplying: "",
          prevSchool: "",
          parentName: "",
          phone: "",
          email: "",
          address: "",
          message: ""
        })
      }
    } catch (error) {
      console.error("Admissions submission error:", error)
    }
  }





  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Admissions Open 2026–27"
        subtitle="Give Your Child the Right Foundation for a Bright Future"
        breadcrumb="Admissions"
      />

      {/* ─── INTRO SECTION ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none font-beware"
                style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
              >
                WELCOME TO DAFFODILS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Shaping Confident <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Young Minds</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium mb-10">
                <p>
                  Welcome to <span className="font-beware font-black">Daffodils Convent School</span> — a place where learning, discipline, creativity, and values come together to shape confident young minds.
                </p>
                <p>
                  We are committed to providing quality education in a caring and supportive environment that encourages every child to grow academically, socially, and emotionally. Our admission process is simple, transparent, and based on merit through an entrance assessment conducted by the school.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-xl font-black bg-school-green-dark text-white hover:bg-school-green transition-all" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl font-black border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-12 duration-1000">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                <Image
                  src="/card1 (4).jpeg"
                  alt="Daffodils Classroom"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-school-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4" />

              <div className="absolute -bottom-6 -left-6 bg-school-gold p-8 rounded-2xl shadow-2xl z-20 animate-float">
                <p className="text-school-green-dark font-black text-4xl leading-none">2026-27</p>
                <p className="text-school-green-dark/60 text-[10px] font-bold uppercase tracking-widest mt-1">Admission Session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-4">Why Choose Us?</h2>
            <p className="text-school-gold-dark font-bold text-sm uppercase tracking-widest">Building Strong Foundations for Lifelong Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <Card key={i} className="p-8 border-none bg-white rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black text-school-green-dark mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADMISSION PROCESS ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
                style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
              >
                THE JOURNEY
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Simple & <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Transparent</span>
                <br />Process
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                We believe in a stress-free experience for parents. Follow these 5 simple steps to secure your child&apos;s future at Daffodils.
              </p>
            </div>
            <div className="lg:w-2/3 w-full">
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-school-gold/30 transition-all group">
                    <div className="text-3xl font-black text-school-gold/30 group-hover:text-school-gold transition-colors">{s.step}</div>
                    <div>
                      <h4 className="text-xl font-black text-school-green-dark mb-2">{s.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENTRANCE TEST & CLASSES ──────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Entrance Test */}
            <Card className="p-10 border-none bg-white rounded-3xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-xl bg-school-green/10 flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-school-green-dark" />
                </div>
                <h3 className="text-2xl font-black text-school-green-dark">Entrance Test Info</h3>
              </div>
              <p className="text-slate-500 font-medium mb-8">
                We maintain academic standards by conducting an entrance assessment for students seeking admission.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {testSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <sub.icon className="h-5 w-5 text-school-gold-dark" />
                    <span className="text-sm font-bold text-slate-700">{sub.name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Admission Criteria</p>
                {["Entrance Test Performance", "Availability of Seats", "Document Verification"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-school-green" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Classes Offered */}
            <Card className="p-10 border-none bg-school-green-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-school-gold" />
                </div>
                <h3 className="text-2xl font-black">Classes Offered</h3>
              </div>
              <p className="text-white/60 font-medium mb-8">
                We provide high-quality education across the primary and middle school years.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Nursery", "Kindergarten", "Class I", "Class II", "Class III",
                  "Class IV", "Class V", "Class VI", "Class VII", "Class VIII"
                ].map((c, i) => (
                  <Badge key={i} className="py-3 px-4 bg-white/5 border-white/10 text-white font-bold text-center justify-center rounded-xl hover:bg-school-gold hover:text-school-green-dark transition-colors">
                    {c}
                  </Badge>
                ))}
              </div>
              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-sm italic text-white/80">
                  * Admissions for session 2026-27 are subject to seat availability.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── ELIGIBILITY & DOCUMENTS ──────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black text-school-green-dark mb-8">Eligibility & Documents</h2>
              <p className="text-slate-500 font-medium mb-12">
                Please ensure you meet the age requirements and have all necessary photocopies ready for the admission process.
              </p>
              <div className="space-y-4">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
                    <span className="font-black text-school-green-dark">{item.class}</span>
                    <Badge variant="outline" className="border-school-gold text-school-gold-dark font-black">{item.age}</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {requiredDocs.map((doc, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-school-gold/10 transition-colors">
                      <FileText className="h-5 w-5 text-slate-400 group-hover:text-school-gold-dark" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACADEMIC EXCELLENCE & ACTIVITIES ─────────────── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-school-green-dark mb-8">Academic Excellence</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Activity-Based Learning",
                  "Regular Assessments",
                  "Homework Support",
                  "Spoken English Development",
                  "Moral & Value Education",
                  "Computer Awareness"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-school-gold" />
                    <span className="text-slate-700 font-bold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-school-green-dark mb-8">Co-Curricular Activities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {coCurricular.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl text-center group hover:bg-school-green-dark transition-all duration-300">
                    <item.icon className="h-8 w-8 text-school-green group-hover:text-school-gold transition-colors" />
                    <span className="text-xs font-black text-slate-600 group-hover:text-white uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INQUIRY FORM ─────────────────────────────────── */}
      <section id="inquiry" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <Badge
                  className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
                  style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
                >
                  GET STARTED
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                  Online Admission <br />
                  <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Inquiry Form</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                  Start your child’s educational journey today. Fill in the details, and our admission office will get back to you shortly.
                </p>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-school-green-dark text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-school-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700" />
                  <h4 className="font-black text-xl mb-4 relative z-10">Visit Our Campus</h4>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-school-gold shrink-0 mt-1" />
                      <p className="text-white/70 text-sm font-bold">114, Street No. 12, Chetan Basti, Anand Parbat, New Delhi – 110008</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-school-gold shrink-0" />
                      <p className="text-white/70 text-sm font-bold">+91 7532817306</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-school-gold shrink-0" />
                      <p className="text-white/70 text-sm font-bold">Mon – Sat: 8:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl border-2 border-dashed border-slate-200 text-center">
                  <h4 className="text-xl font-black text-school-green-dark mb-4">Affordable Education</h4>
                  <p className="text-slate-500 text-sm font-medium mb-6">We believe every child deserves access to quality education at a reasonable cost.</p>
                  <Button variant="outline" className="rounded-xl font-black">Enquire About Fees</Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-6 sm:p-12 rounded-3xl border border-slate-100 shadow-xl relative">
                {submitted ? (
                  <div className="text-center py-20 space-y-6">
                    <div className="h-24 w-24 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="h-12 w-12 text-school-green" />
                    </div>
                    <h3 className="text-3xl font-black text-school-green-dark">Enquiry Submitted!</h3>
                    <p className="text-slate-500 font-bold max-w-sm mx-auto">Thank you for your interest. Our admissions team will contact you very soon.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-xl font-black">New Inquiry</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-xs font-black uppercase tracking-widest text-school-gold-dark border-l-4 border-school-gold pl-4">Student Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Student Name *</Label>
                          <Input required className="h-14 bg-white rounded-xl" placeholder="Full Name" value={form.studentName} onChange={e => setForm({ ...form, studentName: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Date of Birth *</Label>
                          <Input required type="date" className="h-14 bg-white rounded-xl" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Class Applying For *</Label>
                          <select required className="h-14 w-full bg-white border border-slate-200 rounded-xl px-4 text-sm font-bold" value={form.classApplying} onChange={e => setForm({ ...form, classApplying: e.target.value })}>
                            <option value="">Select Class</option>
                            {["Nursery", "KG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Previous School</Label>
                          <Input className="h-14 bg-white rounded-xl" placeholder="School Name" value={form.prevSchool} onChange={e => setForm({ ...form, prevSchool: e.target.value })} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xs font-black uppercase tracking-widest text-school-gold-dark border-l-4 border-school-gold pl-4">Parent Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Parent/Guardian Name *</Label>
                          <Input required className="h-14 bg-white rounded-xl" placeholder="Full Name" value={form.parentName} onChange={e => setForm({ ...form, parentName: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Mobile Number *</Label>
                          <Input required type="tel" className="h-14 bg-white rounded-xl" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Email Address *</Label>
                          <Input required type="email" className="h-14 bg-white rounded-xl" placeholder="example@mail.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Residential Address *</Label>
                          <Textarea required className="bg-white rounded-xl" placeholder="Full Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-black text-school-green-dark/60 uppercase tracking-tighter">Additional Message</Label>
                      <Textarea className="bg-white rounded-xl" placeholder="Any specific queries?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <Button type="submit" className="w-full h-16 rounded-xl font-black text-lg bg-school-green-dark text-white hover:bg-school-gold hover:text-school-green-dark transition-all shadow-xl group">
                      Apply for Admission
                      <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-school-green-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What Parents Say</h2>
            <p className="text-school-gold font-bold text-sm uppercase tracking-widest">Community Feedback</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 relative group hover:bg-white/10 transition-all">
                <Sparkles className="h-8 w-8 text-school-gold/30 absolute top-6 right-6" />
                <p className="text-lg font-medium italic mb-8 relative z-10 leading-relaxed text-white/90">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-8 bg-school-gold rounded-full" />
                  <span className="text-sm font-black text-school-gold tracking-tighter uppercase">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-4">Common Admission Queries</h2>
            <p className="text-school-gold-dark font-bold text-sm uppercase tracking-widest">Frequently Asked Questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-school-gold/30 transition-all group">
                <h4 className="text-lg font-black text-school-green-dark mb-4 flex items-center gap-4">
                  <HelpCircle className="h-6 w-6 text-school-gold group-hover:scale-110 transition-transform" />
                  {faq.q}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-school-gold to-transparent opacity-30" />
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-school-green-dark mb-8 leading-tight">
            Begin Your Child&apos;s <br />
            Educational <span className="text-school-gold">Journey</span> With Us
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
            Give your child the opportunity to learn, grow, and succeed in a positive educational environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-16 px-12 rounded-xl font-black text-lg bg-school-green-dark text-white hover:scale-105 transition-all shadow-2xl" onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 rounded-xl font-black text-lg border-2 border-slate-200 bg-transparent text-school-green-dark hover:bg-white hover:border-school-gold transition-all shadow-xl">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-school-gold-dark font-black tracking-[0.4em] uppercase text-xs font-beware">
            Daffodils Convent School
          </p>
          <p className="mt-4 text-slate-400 font-bold text-sm">
            Inspiring Excellence • Building Character • Creating Futures
          </p>
        </div>
      </footer>
    </div>
  )
}
