
import { Music, Palette, Trophy, Globe, Heart, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/PageHero"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

const activityCategories = [
  {
    title: "Performing Arts & Music",
    icon: Music,
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
    image: "/cultural-event.webp",
    description: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.",
    activities: ["Classical Dance", "Western Dance", "Instrumental Music", "Vocal Training", "Drama & Theatre", "Painting & Sketching", "Musical Concerts", "Art Exhibitions"],
  },
  {
    title: "Yoga",
    icon: Heart,
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)",
    image: "/yoga-activity.webp",
    description: "Yoga is an integral part of our school’s commitment to holistic education, nurturing both physical well-being and mental balance. Through regular practice, students develop flexibility, strength, concentration, and emotional resilience, while learning the importance of mindfulness and self-discipline. Rooted in our rich heritage yet deeply relevant in today’s fast-paced world, yoga empowers our learners to lead healthy, focused, and harmonious lives.",
    activities: ["Asanas", "Pranayama", "Meditation", "Flexibility Training", "Mental Focus", "Breathing Exercises", "Self-Discipline", "Emotional Balance"],
  },
  {
    title: "Sports",
    icon: Trophy,
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
    image: "/sports-activity.webp",
    description: "Sports activities play a vital role in our school curriculum, fostering physical fitness, teamwork, discipline, and leadership among students. Through structured training and healthy competition, learners develop endurance, coordination, and a strong spirit of sportsmanship. Participation in sports not only promotes a healthy lifestyle but also instills confidence, resilience, and the ability to face challenges with determination—skills that extend far beyond the playing field.",
    activities: ["Cricket", "Football", "Badminton", "Table Tennis", "Athletics", "Basketball", "Leadership Training", "Team Building"],
  },
]



export function BeyondActivities() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Life Beyond Books"
        subtitle="Exploring talents, building character, and celebrating creativity through a wide spectrum of extra-curricular programs."
        breadcrumb="Beyond Activities"
      />

      {/* ─── INTRO SECTION ────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-school-green-light/20 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Badge
              className="mb-6 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase border-none"
              style={{
                backgroundColor: "var(--school-green-light)",
                color: "var(--school-green-dark)",
              }}
            >
              50+ UNIQUE ACTIVITIES
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4 leading-[1.1] text-school-green-dark">
              Nurturing <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Holistic Development</span> <br className="hidden md:block" />
              Through Diverse Programs
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              At Daffodils Convent School, we believe education extends far beyond the classroom. Our diverse extra-curricular programs are designed to discover and develop each student&apos;s unique talents and build confidence.
            </p>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-5">
            {[
              { label: "Sports", icon: Trophy, count: "15+" },
              { label: "Arts", icon: Palette, count: "10+" },
              { label: "Music", icon: Music, count: "12+" },
              { label: "Clubs", icon: Globe, count: "08+" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 animate-in fade-in zoom-in duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-school-green mb-3" />
                <p className="text-lg md:text-2xl font-black text-school-green-dark">{stat.count}</p>
                <p className="text-xs md:text-base font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTIVITY CATEGORIES ──────────────────────────── */}
      <section className="py-12 md:py-14 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {activityCategories.map((cat, i) => {
              const Icon = cat.icon
              const isEven = i % 2 === 0
              return (
                <div key={cat.title} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  {/* Image side */}
                  <div className={cn(
                    "lg:col-span-6 relative group animate-in fade-in duration-1000",
                    isEven ? "lg:order-1 slide-in-from-left-12" : "lg:order-2 slide-in-from-right-12"
                  )}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-school-green-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    {/* Decorative bits */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-school-gold/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-school-green/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                  </div>

                  {/* Text side */}
                  <div className={cn(
                    "lg:col-span-6 animate-in fade-in duration-1000 delay-200",
                    isEven ? "lg:order-2 slide-in-from-right-12" : "lg:order-1 slide-in-from-left-12"
                  )}>
                    <div className="h-16 w-16 rounded-2xl bg-school-green/10 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                      <Icon className="h-8 w-8 text-school-green-dark" />
                    </div>
                    <Badge
                      className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                      style={{ backgroundColor: cat.bgColor, color: "var(--school-green-dark)" }}
                    >
                      {cat.title}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-school-green-dark mb-6 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium italic">
                      &quot;{cat.description}&quot;
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {cat.activities.map((activity) => (
                        <div key={activity} className="flex items-center gap-3 group/item">
                          <div className="h-2 w-2 rounded-full bg-school-gold transition-all group-hover/item:scale-150" />
                          <span className="text-slate-800 font-bold text-sm tracking-tight">{activity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-10 border-t border-slate-200">
                      <Button asChild variant="link" className="p-0 text-school-green-dark font-black text-lg gap-3 hover:gap-5 transition-all">
                        <Link href="/contact">
                          Learn about enrolment
                          <ArrowRight className="h-5 w-5 text-school-gold" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ─── GALLERY (ASYMMETRIC) ─────────────────────────── */}
      <section className="py-12 md:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
              style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
            >
              VISUAL HIGHLIGHTS
            </Badge>
            <h2 className="text-4xl font-black text-school-green-dark">Moments that Define Us</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[250px]">
            {[
              { src: "/sports-activity.webp", alt: "Sports Day", span: "md:col-span-2 md:row-span-2" },
              { src: "/art-activity.webp", alt: "Art Workshop", span: "md:col-span-2" },
              { src: "/cultural-event.webp", alt: "Cultural Fest", span: "md:row-span-2" },
              { src: "/science-lab.webp", alt: "Lab Innovations", span: "" },
              { src: "/classroom-students.webp", alt: "Group Learning", span: "md:col-span-2" },
            ].map((img, i) => (
              <div
                key={img.alt}
                className={cn(
                  "relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg animate-in fade-in zoom-in duration-1000",
                  img.span
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-school-gold font-bold text-xs uppercase tracking-widest mb-1">Activity Snapshot</span>
                  <span className="text-white text-lg font-black">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
