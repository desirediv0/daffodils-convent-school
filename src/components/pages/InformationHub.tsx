
import { BookOpen, FileText, CreditCard, Users, CheckCircle2, AlertCircle, ShieldCheck, GraduationCap, ClipboardList, Info, Heart, Globe, Calendar, ScrollText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function InformationHub() {
  // Brand colors as constants for reliability
  const colors = {
    greenDark: "#0d2d23",
    green: "#1a4d3c",
    gold: "#eeb328",
    slateDark: "#0f172a"
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Information Hub"
        subtitle="Complete school guidelines, admission procedures, fee structures, and student leadership details."
        breadcrumb="Information Hub"
      />

      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4">

          <div className="space-y-32">

            {/* 1. RULES AND REGULATIONS */}
            <div id="rules" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  style={{ backgroundColor: colors.greenDark }}
                >
                  <ScrollText className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">1. Rules and Regulations</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">Standards of Conduct & Attendance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <Card className="p-10 border-none bg-slate-50 shadow-sm rounded-3xl group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl font-black text-school-green-dark mb-8 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-school-green" />
                    Leave Rules
                  </h3>
                  <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                    <p>In case of any leave, please inform the facilitator in advance. In case, the parents have to take the children within the school hours, written application/verbal information (over phone) has to be submitted at the reception, failing which the child will not be handed over to the parents and will be sent by the usual transport.</p>
                    <div className="p-5 bg-school-green/5 border-l-4 border-school-green rounded-r-xl italic font-bold text-school-green-dark">
                      &quot;The child will be handed over only to the person carrying the Guardian I-card.&quot;
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-none bg-slate-50 shadow-sm rounded-3xl group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl font-black text-school-green-dark mb-8 flex items-center gap-3">
                    <ClipboardList className="h-6 w-6 text-school-gold-dark" />
                    Attendance
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "All Students must attend school regularly from the first to the last day of school.",
                      "Punctuality in school attendance is necessary.",
                      "A written application to the Class Facilitator is to be made in case of absence from school.",
                      "No student is permitted to leave school during school hours without a valid permission slip from the Principal.",
                      "If a student is afflicted with an infectious disease, completion of quarantine period is necessary. A medical fitness certificate must be submitted upon return."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="h-5 w-5 mt-1 text-school-green shrink-0" />
                        <span className="text-slate-600 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="mt-10">
                <Card
                  className="p-10 border-none text-white shadow-2xl rounded-3xl"
                  style={{ backgroundColor: colors.slateDark }}
                >
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-school-gold">
                    <ShieldCheck className="h-7 w-7" />
                    Rules for Students
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Be polite, courteous, respectful and disciplined inside and outside the school.",
                      "Take good care of books, stationary, uniform and all personal belonging.",
                      "Neatness and cleanliness is important.",
                      "Be punctual and regular in work habits.",
                      "Be responsible towards school property and others property.",
                      "Strictly forbidden to throw things out of place and at anyone.",
                      "Non-Sikh boys: Hair trimmed at regular intervals; Sikh boys: Navy-Blue turbans.",
                      "No sharp instruments or valuables allowed in school.",
                      "The school is not responsible for loss of personal belongings."
                    ].map((rule, i) => (
                      <div key={i} className="flex gap-4 items-start text-white/80 font-medium text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-school-gold mt-2 shrink-0" />
                        {rule}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="mt-10">
                <Card className="p-8 border-dashed border-2 border-slate-200 bg-white rounded-3xl flex items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-school-green-dark">School Holidays</h4>
                      <p className="text-slate-500 font-bold text-sm">(LIST OF HOLIDAYS WILL BE PROVIDED)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* 2. ADMISSIONS */}
            <div id="admissions" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-school-green-dark shadow-xl"
                  style={{ backgroundColor: colors.gold }}
                >
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">2. Admissions</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">Enrolment & Eligibility</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7 space-y-8">
                  <Card className="p-10 border-none bg-slate-50 rounded-3xl">
                    <h3 className="text-xl font-black text-school-green-dark mb-6">Eligibility Criteria</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-school-gold-dark font-black text-sm uppercase mb-1">Nursery</p>
                        <p className="text-slate-700 font-black text-xl">3+ Years</p>
                        <p className="text-slate-500 text-xs mt-1">As on 31st March 2026</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-school-gold-dark font-black text-sm uppercase mb-1">LKG</p>
                        <p className="text-slate-700 font-black text-xl">4+ Years</p>
                        <p className="text-slate-500 text-xs mt-1">As on 31st March 2026</p>
                      </div>
                    </div>
                  </Card>

                  <div className="space-y-4">
                    {[
                      "Registration opens from December onwards. (Does not guarantee admission).",
                      "New admissions are made from Nursery. Admission is finalized based on point system.",
                      "Principal reserves right to refuse admission in case of document irregularities.",
                      "Admission to other classes depends on availability and entrance test competence.",
                      "Transfer Certificate and all required documents must be attached once confirmed."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 items-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-school-gold/30 transition-all">
                        <div className="h-8 w-8 rounded-full bg-school-green/10 flex items-center justify-center font-black text-school-green-dark text-sm shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-slate-600 font-bold text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div
                    className="p-12 rounded-3xl shadow-2xl relative overflow-hidden h-full"
                    style={{ backgroundColor: colors.greenDark }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-white text-2xl font-black mb-8 flex items-center gap-3">
                      <FileText className="h-6 w-6 text-school-gold" />
                      Required Documents
                    </h3>
                    <ul className="space-y-6">
                      {[
                        "Completed Registration Form",
                        "Original Birth Certificate",
                        "Transfer Certificate (for other classes)",
                        "Previous School Report Card",
                        "Guardian I-Card Photos",
                        "Address Proof"
                      ].map((doc, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/90 font-bold text-sm">
                          <CheckCircle2 className="h-5 w-5 text-school-gold shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 pt-10 border-t border-white/10">
                      <Button className="w-full h-14 rounded-xl bg-white text-school-green-dark font-black text-lg shadow-xl hover:scale-105 transition-all">
                        Enquire for Admission
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. FEES AND WITHDRAWAL */}
            <div id="fees" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-14 w-14 rounded-2xl bg-school-green flex items-center justify-center text-school-green-dark shadow-xl">
                  <CreditCard className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">3. Fees and Withdrawal</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">Financial Procedures</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Card className="p-10 border-none bg-slate-50 rounded-3xl border-t-8 border-school-green shadow-xl">
                  <h3 className="text-2xl font-black text-school-green-dark mb-8">Payment of Fees</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl border border-slate-100">
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Due Date</p>
                      <p className="text-3xl font-black text-school-green-dark italic">10th of every month</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-900 font-bold text-sm">
                        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        Late fee fine: ₹1/- per day (11th to 30th of first month)
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-900 font-bold text-sm">
                        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        Fine of ₹50/- per month after the first month.
                      </div>
                      <div className="flex items-center gap-4 p-5 bg-red-50 rounded-xl border border-red-100 text-red-900 font-black text-sm">
                        <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                        Failure to pay by 30th of 2nd month results in name removal.
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs italic font-bold">
                      * Readmission granted at discretion after payment of re-admission fee, fee, and fine.
                    </p>
                  </div>
                </Card>

                <Card className="p-10 border-none bg-slate-50 rounded-3xl border-t-8 border-school-gold shadow-xl">
                  <h3 className="text-2xl font-black text-school-green-dark mb-8">Withdrawals</h3>
                  <div className="space-y-8">
                    <p className="text-slate-600 font-medium text-lg leading-relaxed">
                      If a child has to be withdrawn from school, parents are requested to submit a formal application for the same.
                    </p>
                    <div className="p-8 bg-white rounded-2xl border-l-8 border-school-gold shadow-sm">
                      <h4 className="font-black text-school-green-dark mb-4">Clearing Dues</h4>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">
                        The school follows a monthly system of fee collection. At the time of submission of withdrawal application, all fee demands must be cleared.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* 4. PARENTS / GUARDIANS */}
            <div id="parents" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  style={{ backgroundColor: colors.greenDark }}
                >
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">4. Parents / Guardians</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">Guidelines & Cooperation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    t: "Enforcing Discipline",
                    d: "Cooperate with school authorities in enforcing punctuality, regularity and discipline. Ensure wards participate in school activities and assignments.",
                    icon: ShieldCheck
                  },
                  {
                    t: "Diary & Rules",
                    d: "Please go through the pages of the school diary for further information and specific School rules.",
                    icon: BookOpen
                  },
                  {
                    t: "English Conversation",
                    d: "As English is the medium of instruction, it is desirable that a certain amount of English conversation is encouraged at home also.",
                    icon: Globe
                  },
                  {
                    t: "PTM Attendance",
                    d: "Parent Teacher meetings should be attended regularly. The administration takes a serious view of absences from these scheduled meetings.",
                    icon: Users
                  },
                  {
                    t: "Health Protocol",
                    d: "No pupil should be sent to school if suffering from a contagious or infectious disease.",
                    icon: Heart
                  },
                  {
                    t: "Address Updates",
                    d: "Please intimate any changes in address or phone number to the school office immediately.",
                    icon: Info
                  },
                  {
                    t: "Principal Visit",
                    d: "For legitimate complaints or child-related discussions, please feel free to contact the Principal during visiting hours.",
                    icon: FileText
                  }
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-none bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 rounded-3xl">
                    <div className="h-12 w-12 rounded-xl bg-school-green/10 flex items-center justify-center mb-6">
                      <item.icon className="h-6 w-6 text-school-green-dark" />
                    </div>
                    <h4 className="text-lg font-black text-school-green-dark mb-4 leading-tight">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.d}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* 5. ASR FELLOWSHIP AWARD */}
            <div id="asr" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <Card
                className="p-8 md:p-16 border-none text-white relative overflow-hidden rounded-[3rem]"
                style={{ backgroundColor: colors.slateDark }}
              >
                <div className="absolute top-0 right-0 w-[40%] h-full bg-school-gold/10 -skew-x-12 translate-x-1/2 blur-3xl" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-8">
                    <Badge className="mb-6 bg-school-gold text-school-green-dark font-black tracking-widest px-4 py-1">ACADEMIC EXCELLENCE</Badge>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">5. ASR Fellowship Award</h2>
                    <p className="text-xl text-white/80 leading-relaxed font-medium">
                      To ensure that the school children achieve their academic excellence and strive for that little extra, an annual event took shape in the year 2025 as the <span className="text-school-gold font-black">ASR (Anand Singh Routela) Fellowship Exam</span>.
                    </p>
                    <div className="mt-10 flex gap-6">
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                        <p className="text-school-gold font-black text-2xl mb-1">Gold Medal</p>
                        <p className="text-white/60 text-sm font-bold">One meritorious child per class</p>
                      </div>
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                        <p className="text-school-gold font-black text-2xl mb-1">Certificate</p>
                        <p className="text-white/60 text-sm font-bold">Certificate of Merit</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="h-48 w-48 rounded-full bg-school-gold/20 flex items-center justify-center border border-school-gold/30 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-school-gold animate-ping opacity-20" />
                      <GraduationCap className="h-24 w-24 text-school-gold" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 6. SLFRC COMMITTEE */}
            <div id="slfrc" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-14 w-14 rounded-2xl bg-school-green flex items-center justify-center text-school-green-dark shadow-xl">
                  <FileText className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">6. SLFRC Committee</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">Transparency & Governance</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-3xl p-10 flex flex-col sm:flex-row gap-6 items-center border border-slate-100">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl gap-3 font-black text-lg border-slate-200 text-school-green-dark hover:bg-[#0d2d23] hover:text-white transition-all shadow-sm">
                  <FileText className="h-6 w-6" />
                  Document 1
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl gap-3 font-black text-lg border-slate-200 text-school-green-dark hover:bg-[#0d2d23] hover:text-white transition-all shadow-sm">
                  <FileText className="h-6 w-6" />
                  Document 2
                </Button>
              </div>
            </div>

            {/* 7. STUDENT COUNCIL */}
            <div id="council" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="flex items-center gap-4 mb-12">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  style={{ backgroundColor: colors.greenDark }}
                >
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-school-green-dark">7. Student Council</h2>
                  <p className="text-school-gold-dark font-bold text-xs uppercase tracking-[0.2em]">House System & Leadership</p>
                </div>
              </div>

              <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 shadow-sm mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500" />
                <h3 className="text-2xl font-black text-school-green-dark mb-6">The House System</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium mb-12 max-w-5xl">
                  A service-cum-training organization with four houses named after mountain ranges, representing significant elevation and the journey of self-conquest.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    { n: "Aravali", c: "Red", s: "text-red-600", bg: "bg-red-50" },
                    { n: "Shivalik", c: "Yellow", s: "text-amber-500", bg: "bg-amber-50" },
                    { n: "Himalaya", c: "Blue", s: "text-blue-600", bg: "bg-blue-50" },
                    { n: "Nilgiri", c: "Green", s: "text-green-600", bg: "bg-green-50" }
                  ].map((h) => (
                    <div key={h.n} className={cn("p-8 rounded-[2rem] text-center shadow-sm border border-transparent hover:shadow-xl transition-all", h.bg)}>
                      <h4 className="text-2xl font-black text-slate-800 mb-1">{h.n}</h4>
                      <p className={cn("font-black text-xs uppercase tracking-widest", h.s)}>{h.c} House</p>
                    </div>
                  ))}
                </div>

                <div
                  className="p-8 rounded-2xl text-center italic font-black text-xl border-l-8 border-school-gold shadow-2xl"
                  style={{ backgroundColor: colors.greenDark, color: colors.gold }}
                >
                  &quot;It’s not the mountain we conquer, but ourselves.&quot;
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h4 className="text-2xl font-black text-school-green-dark border-b-4 border-school-gold pb-4 inline-block">Aims of House System</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "To promote the welfare of students.",
                      "To promote a better student-teacher relationship.",
                      "To impart citizenship training.",
                      "To encourage self-discipline.",
                      "To arouse greater school spirit.",
                      "To impart training in management and leadership."
                    ].map((aim, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group">
                        <CheckCircle2 className="h-6 w-6 text-school-green shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 font-bold text-sm leading-relaxed">{aim}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-black text-school-green-dark border-b-4 border-school-gold pb-4 inline-block">Rotation Duties</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Manage the morning assembly.",
                      "Write news and a thought for the day.",
                      "Explain the thought in a small speech.",
                      "Check late corners.",
                      "Maintain order during recess.",
                      "Look after general cleanliness.",
                      "Check student uniform.",
                      "Organize and arrange scheduled activities."
                    ].map((duty, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group">
                        <ClipboardList className="h-6 w-6 text-school-gold shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 font-bold text-sm leading-relaxed">{duty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
