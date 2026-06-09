"use client"

import { useEffect, useState } from "react"
import { Music, Trophy, Globe, Heart, ArrowRight, Star, BookOpen, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/PageHero"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const activityCategories = [
  {
    id: "performing-arts",
    title: "Performing Arts (Music/Dance)",
    icon: Music,
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
    images: ["/traditional-dress-group.jpeg", "/annual-function-dance-1.jpeg", "/annual-function-dance-2.jpeg", "/dance-performance-white-theme.jpeg", "/cultural-dance-performance.jpeg"],
    description: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent.",
    activities: ["Classical Dance", "Western Dance", "Instrumental Music", "Vocal Training", "Drama & Theatre", "Painting & Sketching", "Musical Concerts", "Art Exhibitions"],
  },
  {
    id: "sports",
    title: "Sports",
    icon: Trophy,
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)",
    images: ["/martial-arts-performance.jpeg", "/school-trip-jeep.jpeg", "/yoga-performance.jpeg"],
    description: "Sports activities foster physical fitness, teamwork, and leadership. Through structured training and healthy competition, learners develop endurance and a strong spirit of sportsmanship.",
    activities: ["Cricket", "Football", "Badminton", "Table Tennis", "Athletics", "Basketball", "Leadership Training", "Team Building"],
  },
  {
    id: "yoga",
    title: "Yoga",
    icon: Heart,
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
    images: ["/yoga-performance.jpeg", "/yoga (1).jpeg", "/yoga (2).jpeg", "/yoga (3).jpeg", "/yoga (4).jpeg"],
    description: "Yoga is integral to our commitment to holistic education. Students develop flexibility, strength, and emotional resilience while learning mindfulness and self-discipline.",
    activities: ["Inter-school Competition", "Asanas", "Pranayama", "Meditation", "Flexibility Training", "Mental Focus", "Breathing Exercises"],
  },
  {
    id: "mothers-day",
    title: "Mother's Day Activity",
    icon: Star,
    color: "var(--school-gold-dark)",
    bgColor: "var(--school-gold-light)",
    images: ["/mothers-day-activity.png", "/mothers-day-activity-2.png"],
    description: "A special day dedicated to honoring mothers. Through creative card-making, storytelling, and performances, we celebrate the bond of love and gratitude.",
    activities: ["Creative Card Making", "Poetry Recitation", "Storytelling Sessions", "Gift Crafting", "Family Bonding Workshops"],
  },
  {
    id: "experiential",
    title: "Experiential Learning",
    icon: BookOpen,
    color: "var(--school-green)",
    bgColor: "var(--school-green-light)",
    images: ["/nature-visit.jpeg", "/Green_Beginnings.jpeg", "/Festive_Duo.jpeg", "/school-hero.jpeg"],
    description: "Learning by doing is at the heart of our educational philosophy. We engage students in hands-on projects and field trips to make learning meaningful and memorable.",
    activities: ["Nature Visits", "Science Projects", "Field Trips", "Hands-on Workshops", "Community Service", "Role-Playing"],
  },
]

const galleryImages = [
  { src: "/nature-visit.jpeg", alt: "Students picnic" },
  { src: "/Festive_Duo.jpeg", alt: "Students in festive school attire", position: "object-top" },
  { src: "/mothers-day-activity-2.png", alt: "Students during Mother's Day activity", position: "object-top" },
  { src: "/mothers-day-activity.png", alt: "Mother's Day Celebration", position: "object-top" },
  { src: "/traditional-dress-group.jpeg", alt: "Cultural traditional dress", position: "object-top" },
  { src: "/yoga-performance.jpeg", alt: "Yoga performance" },
  { src: "/school-trip-jeep.jpeg", alt: "School trip excursion" },
  { src: "/kids-play-area.jpeg", alt: "A day out at amusement park" },
  { src: "/Green_Beginnings.jpeg", alt: "Gardening activity" },
  { src: "/martial-arts-performance.jpeg", alt: "Students in martial arts" },
  { src: "/classroom-students.jpeg", alt: "Students in class" },
  { src: "/yoga-performance.jpeg", alt: "Students doing yoga" },
]

function CategoryCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={800}
            height={600}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-school-green-dark/10 group-hover:bg-transparent transition-colors duration-500" />
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === currentIndex ? "w-6 bg-school-gold" : "w-1.5 bg-white/50"
            )} 
          />
        ))}
      </div>
    </div>
  )
}

export function BeyondAcademics() {
  useEffect(() => {
    // Handle hash navigation on initial load or hash change
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Life Beyond Academics"
        subtitle="Exploring talents, building character, and celebrating creativity through a wide spectrum of extra-curricular programs."
        breadcrumb="Beyond Academics"
      />

      {/* ─── INTRO SECTION ────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden">
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
              At <span className="font-beware font-black">Daffodils Convent School</span>, we believe education extends far beyond the classroom. Our diverse extra-curricular programs are designed to discover and develop each student&apos;s unique talents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-5">
            {[
              { label: "Sports", icon: Trophy, count: "15+" },
              { label: "Arts", icon: Sparkles, count: "10+" },
              { label: "Music & Dance", icon: Music, count: "12+" },
              { label: "Council Clubs", icon: Globe, count: "08+" },
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
          <div className="space-y-24">
            {activityCategories.map((cat, i) => {
              const Icon = cat.icon
              const isEven = i % 2 === 0
              return (
                <div key={cat.id} id={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-32">
                  {/* Image side */}
                  <div className={cn(
                    "lg:col-span-6 relative group animate-in fade-in duration-1000",
                    isEven ? "lg:order-1 slide-in-from-left-12" : "lg:order-2 slide-in-from-right-12"
                  )}>
                    <CategoryCarousel images={cat.images} title={cat.title} />
                    
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
                      BEYOND ACADEMICS
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-school-green-dark mb-6 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                      {cat.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
                          Enquire about programs
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

      {/* ─── GALLERY ──────────────────────────────────────── */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group cursor-pointer shadow-lg animate-in fade-in zoom-in duration-1000"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    img.position || "object-center"
                  )}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 z-10">
                  <span className="text-school-gold font-bold text-xs uppercase tracking-widest mb-1">Activity Snapshot</span>
                  <span className="text-white text-lg font-black leading-tight">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
