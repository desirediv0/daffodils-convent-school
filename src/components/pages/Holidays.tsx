
"use client"
import { Calendar, Download, CheckCircle2, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PageHero } from "@/components/ui/PageHero"
import { cn } from "@/lib/utils"

const holidayData = [
  { month: "APRIL", events: ["Good Friday", "Ambedkar Jayanti", "Baisakhi"], color: "bg-orange-50" },
  { month: "MAY", events: ["Budh Purnima", "Eid-ul-Zuha"], color: "bg-yellow-50" },
  { month: "JUNE", events: ["Muharram", "Summer Break"], color: "bg-blue-50" },
  { month: "AUGUST", events: ["Independence Day", "Raksha Bandhan", "Milad-ul-Nabi"], color: "bg-green-50" },
  { month: "SEPTEMBER", events: ["Janmashtami"], color: "bg-indigo-50" },
  { month: "OCTOBER", events: ["Gandhi Jayanti", "Dussehra", "Valmiki Jayanti"], color: "bg-red-50" },
  { month: "NOVEMBER", events: ["Diwali", "Bhai Duj", "Gurunanak Jayanti"], color: "bg-purple-50" },
  { month: "DECEMBER", events: ["Christmas"], color: "bg-blue-100" },
  { month: "JANUARY", events: ["Makar Sankranti", "Republic Day", "Winter Break"], color: "bg-cyan-50" },
  { month: "FEBRUARY", events: ["Basant Panchmi"], color: "bg-yellow-100" },
  { month: "MARCH", events: ["Maha Shivratri", "Eid-ul-Fitr", "Holi", "Good Friday"], color: "bg-rose-50" },
]

export function Holidays() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="School Holidays 2026-27"
        subtitle="Stay updated with our academic calendar, gazetted holidays, and seasonal breaks."
        breadcrumb="Holiday List"
      />

      {/* ─── INTRO ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge
            className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
            style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
          >
            ACADEMIC SESSION 2026-27
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
            Planning Ahead for <br />
            <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Excellence</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            A well-structured academic year ensures students and parents can prepare for exams, activities, and much-needed rest. Here is the comprehensive list of holidays for the upcoming session.
          </p>
        </div>
      </section>

      {/* ─── HOLIDAY GRID ─────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d2d23' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {holidayData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full border-none shadow-xl rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className={cn("p-6 text-center border-b border-slate-100", item.color)}>
                    <h3 className="text-2xl font-black text-school-green-dark group-hover:scale-110 transition-transform duration-500">
                      {item.month}
                    </h3>
                  </div>
                  <div className="p-8 space-y-4">
                    {item.events.map((event, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="h-2 w-2 rounded-full bg-school-gold group-hover/item:scale-150 transition-transform" />
                        <span className="text-slate-700 font-bold text-sm tracking-tight">{event}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPORTANT NOTES ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-10 border-none bg-school-green-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-school-gold" />
                </div>
                <h3 className="text-2xl font-black">Important Instructions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Dates are subject to change as per government notifications.",
                  "Second Saturdays are generally observed as holidays.",
                  "School will remain closed on all National Holidays.",
                  "Winter and Summer break dates will be confirmed via circular.",
                  "Parents are requested to check the school notice board regularly.",
                  "Absence before or after holidays is strictly discouraged."
                ].map((note, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-5 w-5 text-school-gold shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm font-bold leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ─── CONTACT CALLOUT ─────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-3xl bg-white border border-slate-200 shadow-lg">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-school-gold/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-school-gold-dark" />
              </div>
              <div>
                <h4 className="text-xl font-black text-school-green-dark">Need the Full Calendar?</h4>
                <p className="text-slate-500 font-bold text-sm">Download the complete academic schedule for 2026-27.</p>
              </div>
            </div>
            <Button size="lg" className="h-14 px-8 rounded-xl font-black bg-school-green-dark text-white gap-3 shadow-xl hover:scale-105 transition-all">
              <Download className="h-5 w-5" />
              Download PDF Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* ─── HOLIDAY HOMEWORK ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
              style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
            >
              SUMMER BREAK 2026
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-school-green-dark mb-4">Holiday Homework</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Download holiday homework for your class. Complete and submit on the first day of school reopening.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Pre-Nursery", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/PRE_NURSERY%20HHW.pdf" },
              { label: "Nursery", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20NURSERY.pdf" },
              { label: "K.G.", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20K.G.%20-%20Copy.pdf" },
              { label: "Class I", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20I%20.pdf" },
              { label: "Class II", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20II.pdf" },
              { label: "Class III", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20III.pdf" },
              { label: "Class IV", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20IV%20.pdf" },
              { label: "Class V", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20V.pdf" },
              { label: "Class VI", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20VI.pdf" },
              { label: "Class VII", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20VII.pdf" },
              { label: "Class VIII", url: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/daffodils/CLASS%20VIII.pdf" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-school-gold/40 hover:bg-school-gold/5 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-school-gold/10 transition-colors">
                    <Download className="h-5 w-5 text-slate-400 group-hover:text-school-gold-dark" />
                  </div>
                  <span className="font-black text-school-green-dark">{item.label}</span>
                </div>
                <span className="text-xs font-bold text-school-gold-dark uppercase tracking-wider">PDF</span>
              </a>
            ))}
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
