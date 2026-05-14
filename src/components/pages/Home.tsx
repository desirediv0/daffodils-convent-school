"use client"

import { useEffect, useRef, useState } from "react"

import { ArrowRight, BookOpen, Trophy, Users, Star, Play, CircleCheck as CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const heroCarouselImages = [
  "/classroom-students.jpeg",
  "/Festive_Duo.jpeg",
  "/martial-arts-performance.jpeg",
  "/school-trip-jeep.jpeg",
  "/yoga-performance.jpeg",
]

// Animated counter hook


function useCounters(targets: number[], duration = 2000, start = false) {
  const [counts, setCounts] = useState<number[]>(() => targets.map(() => 0))

  const targetsString = targets.join(",")
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(targets.map((target) => Math.floor(eased * target)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, duration, targetsString, targets])

  return counts
}

const stats = [
  { icon: Users, label: "Enrollments", value: 1000, suffix: "+", color: "var(--school-green)" },
  { icon: BookOpen, label: "Staff Members", value: 35, suffix: "+", color: "var(--school-gold-dark)" },
  { icon: Star, label: "Activities", value: 50, suffix: "+", color: "var(--school-green)" },
  { icon: Trophy, label: "Awards", value: 100, suffix: "+", color: "var(--school-gold-dark)" },
]

const galleryImages = [
  { src: "/annual-function-dance-1.jpeg", alt: "Students performing cultural dance" },
  { src: "/annual-function-dance-2.jpeg", alt: "Group dance performance" },
  { src: "/award-ceremony-1.jpeg", alt: "Student receiving award" },
  { src: "/stage-performance-1.jpeg", alt: "Stage performance by students" },
  { src: "/principal-speech.jpeg", alt: "Principal giving speech" },
  { src: "/school-event-group.jpeg", alt: "Guests and staff on stage" },
  { src: "/annual-function-audience.jpeg", alt: "Audience at school event" },
  { src: "/cultural-performance-2.jpeg", alt: "Students performing on stage" },
  { src: "/dance-performance-white-theme.jpeg", alt: "Dance performance in white costume" },
  { src: "/group-dance-green.jpeg", alt: "Group dance in green costume" },
  { src: "/School_Band.jpeg", alt: "School marching band performance" },
  { src: "/martial-arts-performance.jpeg", alt: "Martial arts activity" },
  { src: "/nature-visit.jpeg", alt: "Students in nature visit" },
  { src: "/Festive_Duo.jpeg", alt: "Students in festive school attire" },
  { src: "/traditional-dress-group.jpeg", alt: "Cultural traditional dress" },
  { src: "/kids-play-area.jpeg", alt: "Kids in play area" },
];

const highlights = [
  "CBSE Affiliated Curriculum",
  "Experienced & Dedicated Faculty",
  "Modern Infrastructure",
  "Holistic Development Focus",
  "Safe & Nurturing Environment",
  "Extra-Curricular Excellence",
]

export function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroCarouselImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const counters = useCounters(stats.map((s) => s.value), 2000, statsVisible)

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-school-green-dark">
        {/* Background Image with optimized overlay */}
        <div className="absolute inset-0">
          <Image
            src="/school-hero.jpeg"
            alt="Daffodils Convent School"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            width={1920}
            height={1080}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.23 0.08 152 / 0.95) 0%, oklch(0.23 0.08 152 / 0.8) 40%, oklch(0.23 0.08 152 / 0.4) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 -right-20 h-96 w-96 rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ backgroundColor: "var(--school-gold)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full blur-[100px] opacity-10 animate-float"
          style={{ backgroundColor: "var(--school-gold)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-left-8 duration-700">
                <Badge
                  className="px-4 py-2 text-xs font-bold tracking-widest uppercase border-2 shadow-lg backdrop-blur-md"
                  style={{
                    backgroundColor: "oklch(0.8 0.15 82 / 0.15)",
                    borderColor: "var(--school-gold)",
                    color: "var(--school-gold)",
                  }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-school-gold animate-ping mr-2" style={{ backgroundColor: "var(--school-gold)" }}></span>
                  Admissions Open 2026–27
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl  font-bold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-left-12 duration-700 delay-100">
                Empowering <span className="text-school-gold" style={{ color: "var(--school-gold)" }}>Young Minds</span> <br className="hidden sm:block" />
                to Lead Tomorrow
              </h1>

              {/* Subtitle / Quote */}
              <div className="flex items-start gap-4 mb-8 animate-in fade-in slide-in-from-left-16 duration-700 delay-200">
                <div className="h-12 w-1 bg-school-gold rounded-full" style={{ backgroundColor: "var(--school-gold)" }}></div>
                <div>
                  <p className="text-xl md:text-2xl text-school-gold/90 font-beware italic mb-2" style={{ color: "var(--school-gold)" }}>
                    &quot;Nurturing Minds, Shaping Futures&quot;
                  </p>
                  <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                    A premier educational institution in New Delhi committed to academic excellence,
                    character building, and holistic development since inception.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 gap-3 font-bold text-base shadow-[0_10px_20px_rgba(204,163,0,0.3)] hover:shadow-[0_15px_30px_rgba(204,163,0,0.4)] hover:scale-105 transition-all duration-300 rounded-2xl"
                  style={{
                    backgroundColor: "var(--school-gold)",
                    color: "var(--school-green-dark)",
                  }}
                >
                  <Link href="/admissions">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 gap-3 font-bold text-base backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300 rounded-2xl"
                >
                  <Link href="/about">
                    <Play className="h-4 w-4 fill-current" />
                    Explore Campus
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-6 animate-in fade-in duration-1000 delay-500">

                <div className="text-sm text-white/60">
                  <span className="text-white font-bold block">5500+ Students</span>
                  Till date enrolled
                </div>
              </div>
            </div>

            {/* Right Side Visual (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative">
                {/* Decorative frames */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-school-gold/30 rounded-3xl -z-10 animate-float"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-school-green/30 rounded-3xl -z-10 animate-float [animation-delay:1.5s]"></div>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHeroImage}
                      initial={{ x: "20%", opacity: 0, scale: 1.1 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ x: "-20%", opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroCarouselImages[currentHeroImage]}
                        alt="Education at Daffodils"
                        className="w-full h-full object-cover"
                        width={800}
                        height={1000}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/60 to-transparent pointer-events-none"></div>

                  {/* Floating Stats Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-school-gold flex items-center justify-center">
                        <Star className="h-5 w-5 text-school-green-dark fill-current" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Top Rated School</p>
                        <p className="text-white/60 text-xs">Excellence in North Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0] z-10">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] md:h-[100px]"
          >
            <path
              d="M0 80L80 72C160 64 320 48 480 42.7C640 37.3 800 42.7 960 48C1120 53.3 1280 58.7 1360 61.3L1440 64V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── NOTICE BOARD (NEW) ─────────────────────────── */}
      <section className="bg-white py-6 md:py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Label */}
            <div className="flex items-center gap-3 shrink-0 bg-school-green-dark text-white px-6 py-3 rounded-2xl shadow-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-school-gold rounded-full animate-ping opacity-40" />
                <Star className="h-5 w-5 text-school-gold relative z-10 fill-current" />
              </div>
              <span className="font-black text-sm uppercase tracking-widest">Notice Board</span>
            </div>

            {/* Ticker Content */}
            <div className="flex-1 w-full overflow-hidden relative h-10 flex items-center bg-slate-50 rounded-2xl px-6 border border-slate-100">
              <motion.div
                className="whitespace-nowrap flex gap-12"
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[
                  "Admissions Open for Session 2026-27 (Nursery to Class VIII)",
                  "Summer Break starts from 1st June 2026",
                  "Upcoming: Mother's Day Special Assembly on 10th May",
                  "Holiday Homework for all classes to be uploaded soon",
                  "Student Council Elections for session 2026-27 scheduled for next week",
                  "New Yoga & Meditation sessions introduced for Middle Wing",
                ].map((notice, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-school-gold" />
                    <span className="text-school-green-dark font-bold text-sm tracking-tight">{notice}</span>
                  </div>
                ))}
              </motion.div>

              {/* Fade gradients */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />
            </div>

            {/* Quick Link */}
            <Button asChild variant="ghost" size="sm" className="shrink-0 text-school-green-dark font-black hover:bg-school-green/5 gap-2 rounded-xl">
              <Link href="/information-hub#holidays">
                View Calendar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-school-green-light/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative group animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/classroom-students.jpeg"
                  alt="Students at Daffodils Convent School"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={1200}
                  height={900}
                />
                <div className="absolute inset-0 bg-school-green-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-school-gold/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-school-green/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />

              {/* Floating Award Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-20 flex items-center gap-4 animate-float">
                <div className="h-14 w-14 rounded-xl bg-school-green-dark flex items-center justify-center text-school-gold">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-school-green-dark font-black text-2xl leading-none">100+</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Awards Won</p>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="animate-in fade-in slide-in-from-right-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase border-none"
                style={{
                  backgroundColor: "var(--school-green-light)",
                  color: "var(--school-green-dark)",
                }}
              >
                OUR LEGACY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.15] text-school-green-dark">
                Nurturing Excellence <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Since Foundation</span>
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  <span className="font-beware font-black">Daffodils Convent School</span>, located at 114, Street No. 12, Chetan Basti, Block J, Nehru Nagar, Anand Parbat, New Delhi, Delhi, 110008, is more than just an institution—it&apos;s a nurturing space where education blends with
                  values, creativity, and discipline.
                </p>
                <p>
                  We believe every child is unique. Our inclusive environment
                  encourages curiosity, critical thinking, and character-building
                  through a balanced blend of academics and life skills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-school-green/30 transition-colors group">
                    <div className="h-8 w-8 rounded-lg bg-school-green/10 flex items-center justify-center group-hover:bg-school-green group-hover:text-white transition-all">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{h}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="h-14 px-10 rounded-xl gap-3 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-white"
                style={{
                  backgroundColor: "var(--school-green)",
                }}
              >
                <Link href="/about">
                  Discover Our Mission
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="py-12 md:py-14 relative overflow-hidden"
        style={{ backgroundColor: "var(--school-green-dark)" }}
      >
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm26 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm16 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM9 56c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm73 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM27 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm14 48c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM28 6c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm60 44c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <p
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--school-gold)" }}
            >
              OUR IMPACT IN NUMBERS
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Growing Excellence Together
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="text-center p-3 md:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-school-gold/30 transition-all duration-500 group relative animate-in fade-in zoom-in duration-700"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 text-white/5 font-black text-4xl md:text-6xl select-none group-hover:text-school-gold/10 transition-colors">
                    {i + 1}
                  </div>
                  <div
                    className="h-8 w-8 md:h-16 md:w-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl"
                    style={{ backgroundColor: "var(--school-gold)" }}
                  >
                    <Icon
                      className="md:h-8 md:w-8 h-4 w-4 text-school-green-dark"
                    />
                  </div>
                  <div
                    className="md:text-5xl text-2xl font-black mb-3 tracking-tight"
                    style={{ color: "var(--school-gold)" }}
                  >
                    {counters[i]}
                    {stat.suffix}
                  </div>
                  <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-2xl">
              <Badge
                className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--school-green-light)",
                  color: "var(--school-green-dark)",
                }}
              >
                WHY WE STAND OUT
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-school-green-dark leading-tight">
                Crafting a Brighter <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Future for Students</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg italic">
              &quot;Education is the most powerful weapon which you can use to change the world.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                desc: "Structured curriculum with experienced teachers dedicated to bringing out the best in every student.",
                icon: BookOpen,
                color: "bg-blue-500",
              },
              {
                title: "Sports & Fitness",
                desc: "Cricket, football, athletics, and yoga programs to keep students physically active and mentally sharp.",
                icon: Trophy,
                color: "bg-orange-500",
              },
              {
                title: "Arts & Culture",
                desc: "Music, dance, drama, and visual arts programs that nurture creativity and self-expression.",
                icon: Star,
                color: "bg-purple-500",
              },
              {
                title: "Safe Environment",
                desc: "A secure, inclusive campus where every child feels valued, protected, and encouraged to grow.",
                icon: CheckCircle,
                color: "bg-green-500",
              },
              {
                title: "Modern Infrastructure",
                desc: "Well-equipped classrooms, computer labs, library, and science labs to support modern learning.",
                icon: Users,
                color: "bg-indigo-500",
              },
              {
                title: "Holistic Development",
                desc: "Equal focus on character, values, leadership, and social skills alongside academics.",
                icon: Star,
                color: "bg-rose-500",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="border-none shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="p-4 relative">
                    <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", item.color + "/10")}>
                      <Icon className={cn("h-8 w-8", "text-school-green-dark")} />
                    </div>
                    <h3
                      className="font-black text-xl mb-2 group-hover:text-school-green transition-colors"
                      style={{ color: "var(--school-green-dark)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-school-gold group-hover:w-full transition-all duration-700" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── ADMISSIONS CTA ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-school-green-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm26 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm16 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM9 56c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm73 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM27 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm14 48c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM28 6c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm60 44c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 text-center backdrop-blur-xl">
            <Badge className="mb-6 px-4 py-1.5 bg-school-gold text-school-green-dark font-black tracking-widest uppercase border-none">
              Now Enrolling
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Admissions Open for <br />
              <span className="text-school-gold">Session 2026–27</span>
            </h2>
            <p className="text-white/70 text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Give your child the opportunity to learn, grow, and succeed in a caring environment
              focused on academic excellence and character building.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-12 rounded-2xl font-black text-lg bg-school-gold text-school-green-dark hover:scale-105 transition-all shadow-2xl">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-12 rounded-2xl font-black text-lg border-2 border-white/20 text-white bg-transparent hover:bg-white hover:text-school-green-dark transition-all">
                <Link href="/admissions#inquiry">Admission Inquiry</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/10 pt-12">
              <div className="text-center">
                <p className="text-school-gold font-black text-2xl">Nursery - VIII</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Available Classes</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="text-center">
                <p className="text-school-gold font-black text-2xl">Delhi Campus</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                backgroundColor: "var(--school-gold-light)",
                color: "var(--school-gold-dark)",
              }}
            >
              VISUAL JOURNEY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-6">
              Vibrant Life at <span className="text-school-green font-beware" style={{ color: "var(--school-green)" }}>Daffodils</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
              Experience the joy, creativity, and energy that defines our school community through these captured moments.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer shadow-lg animate-in fade-in zoom-in duration-1000"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  width={800}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/80 via-school-green-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                  <span className="text-school-gold font-bold text-xs uppercase tracking-widest mb-1 font-beware">Daffodils Life</span>
                  <span className="text-white text-lg font-black">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-xl gap-3 font-bold border-2 border-school-green text-school-green hover:bg-school-green hover:text-white transition-all duration-300"
            >
              <Link href="/beyond-academics">
                View Full Experience
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden" style={{ backgroundColor: "#1a3a32" }}>
        {/* Background Accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-school-gold/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-school-green/20 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--school-gold)" }}
            >
              VOICES OF TRUST
            </p>
            <h2 className="text-4xl  font-black text-white">
              What Our Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Priya Sharma",
                role: "Parent of Class V Student",
                quote:
                  "\"<span className=\"font-beware font-black\">Daffodils</span> has transformed my child's approach to learning. The teachers are caring, and the curriculum is excellent. My son looks forward to school every day!\"",
              },
              {
                name: "Mr. Rajesh Kumar",
                role: "Parent of Class VIII Student",
                quote:
                  "The school provides the perfect balance of academics and extra-curricular activities. My daughter has grown so much in confidence and academic ability.",
              },
              {
                name: "Mrs. Sunita Verma",
                role: "Parent of Class III Student",
                quote:
                  "A wonderful environment for children. The staff is professional, the infrastructure is great, and the values they instill are truly commendable.",
              },
            ].map((t, i) => (
              <Card
                key={t.name}
                className="border-none shadow-2xl bg-white/10 backdrop-blur-xl group hover:bg-white/20 transition-all duration-500 rounded-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-white text-base leading-relaxed mb-10 font-medium italic relative">
                    <span className="absolute -top-4 -left-4 text-4xl text-white/10 font-serif leading-none">&quot;</span>
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4">

                    <div>
                      <p className="text-white font-bold text-base">{t.name}</p>
                      <p className="text-school-gold/90 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / NEWSLETTER ─────────────────────────────── */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="rounded-2xl p-6 md:p-10 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(35,77,65,0.2)] animate-in fade-in zoom-in duration-1000"
            style={{
              background: `linear-gradient(135deg, #1a3a32 0%, #2a5a4a 100%)`,
            }}
          >
            {/* Animated Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--school-gold),transparent_40%)] opacity-10" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,var(--school-gold),transparent_40%)] opacity-10" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <Badge
                className="mb-4 px-5 py-2 text-xs font-black tracking-[0.3em] uppercase border-2 shadow-2xl backdrop-blur-md"
                style={{
                  backgroundColor: "oklch(0.8 0.15 82 / 0.15)",
                  borderColor: "var(--school-gold)",
                  color: "var(--school-gold)",
                }}
              >
                JOIN OUR COMMUNITY
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Ready to Shape Your <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold)" }}>Child&apos;s Future?</span>
              </h2>
              <p className="text-white text-base leading-relaxed max-w-xl mx-auto mb-8">
                Connect with us for admissions enquiries, school tours,
                and information about our holistic educational approach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 rounded-lg gap-3 font-black text-md shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--school-gold)",
                    color: "#1a3a32",
                  }}
                >
                  <Link href="/contact">
                    Apply for Admission
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-6 rounded-lg gap-3 font-black text-md backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <a href="tel:+917532817306">
                    <Phone className="h-5 w-5" />
                    Talk to Admissions
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-school-gold animate-ping" />
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Limited Slots Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-school-gold animate-ping [animation-delay:0.5s]" />
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
