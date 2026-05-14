"use client"

import { BookOpen, FlaskConical, Globe, Calculator, Palette, Music, CheckCircle2, Laptop, UserCheck, BarChart3, Microscope, Baby, BookOpenCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PageHero } from "@/components/ui/PageHero"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const prePrimarySubjects = [
  { icon: Baby, name: "Phonics & Language" },
  { icon: BookOpenCheck, name: "Foundational Math" },
  { icon: Palette, name: "Creative Arts" },
  { icon: Music, name: "Rhymes & Rhythm" },
  { icon: Globe, name: "World Around Us" },
  { icon: UserCheck, name: "Social Skills" },
]


const teachingApproach = [
  {
    title: "Child-Centred Learning",
    desc: "Every lesson is designed around the learner's pace, interests, and unique learning style.",
    icon: UserCheck,
  },
  {
    title: "Technology Integration",
    desc: "Smart boards, computer labs, and digital resources enhance every classroom interaction.",
    icon: Laptop,
  },
  {
    title: "Experiential Learning",
    desc: "Hands-on experiments and real-world applications make abstract concepts tangible.",
    icon: Microscope,
  },
  {
    title: "Regular Assessments",
    desc: "Continuous evaluation ensures no student is left behind and progress is monitored.",
    icon: BarChart3,
  },
]

const primarySubjects = [
  { icon: BookOpen, name: "English Lit" },
  { icon: Calculator, name: "Mathematics" },
  { icon: Globe, name: "Env. Science" },
  { icon: BookOpen, name: "Hindi Core" },
  { icon: Palette, name: "Art & Craft" },
  { icon: Music, name: "Music/Dance" },
]

const middleSubjects = [
  { icon: BookOpen, name: "English/Hindi" },
  { icon: Calculator, name: "Mathematics" },
  { icon: FlaskConical, name: "Gen. Science" },
  { icon: Globe, name: "Social Science" },
  { icon: Laptop, name: "Computer Sci." },
  { icon: BookOpen, name: "Third Lang." },
]

function FloatingCarousel({ images, title, aspectClassName = "aspect-[4/5]" }: { images: string[], title: string, aspectClassName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={cn("relative rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white group", aspectClassName)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={600}
            height={800}
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

export function Academics() {
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
        title="Academic Excellence"
        subtitle="Our CBSE-affiliated curriculum is designed to ignite curiosity and build a robust foundation for future success."
        breadcrumb="Academics"
      />

      {/* ─── INTRO SECTION ────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-school-green-light/20 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Badge
              className="mb-6 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase border-none"
              style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
            >
              CBSE AFFILIATED CURRICULUM
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-school-green-dark">
              Fostering Intellectual <br />
              <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Growth & Discovery</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Our academic program is thoughtfully structured to meet the cognitive and developmental needs of students at every stage. We combine rigorous academics with creative exploration to develop confident learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingApproach.map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all  group animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-school-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-school-green-dark" />
                </div>
                <h3 className="text-lg font-black text-school-green-dark mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── PRE-PRIMARY SECTION (NUR & K.G.) ────────────── */}
      <section id="pre-primary" className="py-12 md:py-14 bg-slate-50 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-5 relative group animate-in fade-in slide-in-from-left-12 duration-1000">
              <FloatingCarousel 
                images={["/card1 (1).jpeg", "/card1 (2).jpeg", "/kids-play-area.jpeg"]} 
                title="Pre-Primary Section Students" 
                aspectClassName="aspect-[3/2]"
              />
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-school-gold/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-school-gold p-6 rounded-2xl shadow-2xl z-20 animate-float">
                <p className="text-school-green-dark font-black text-3xl">Nur. – K.G.</p>
                <p className="text-school-green-dark/60 text-[10px] font-bold uppercase tracking-widest">Early Years (Incl. LKG)</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
              >
                THE EARLY YEARS (NURSERY, LKG & K.G.)
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Pre-Primary: <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>A Joyful Beginning</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  Our Pre-Primary section provides a warm, nurturing environment where children take their first steps into the world of learning. We focus on play-based education that stimulates curiosity and builds confidence.
                </p>
                <p>
                  The curriculum is designed to develop linguistic, motor, and social skills through interactive sessions, storytelling, and creative play. We ensure each child feels secure and valued while exploring their potential.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {prePrimarySubjects.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-school-gold/30 transition-colors shadow-sm">
                    <Icon className="h-6 w-6 text-school-gold-dark" />
                    <span className="text-sm font-bold text-slate-800">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── PRIMARY SECTION (CLASSES I-V) ────────────────── */}
      <section id="primary" className="py-12 md:py-14 bg-white relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content side */}
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
              >
                THE FOUNDATION YEARS (I – V)
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Primary Section: <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Tailored Learning</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  Here teaching is tailored to suit the needs of the students by involving them in the learning process and maintaining their interest. The formal education system is introduced using prescribed guidelines.
                </p>
                <p>
                  The home assignments given are not a carryover of class work but are oriented towards bringing perfection in individual talents. Special stress is given on projects and group activities.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {primarySubjects.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-school-green/30 transition-colors">
                    <Icon className="h-6 w-6 text-school-green" />
                    <span className="text-sm font-bold text-slate-800">{name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  "Play-based and activity-driven learning modules",
                  "Storytelling and creative expression workshops",
                  "Foundational literacy and numeracy focus",
                  "Weekly sports, yoga, and meditation sessions",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-school-green shrink-0 transition-transform group-hover:scale-125" />
                    <span className="text-slate-700 font-bold tracking-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="lg:col-span-5 relative group animate-in fade-in slide-in-from-right-12 duration-1000">
              <FloatingCarousel 
                images={["/card1 (1).jpeg", "/card1 (2).jpeg", "/Green_Beginnings.jpeg"]} 
                title="Primary Section Students" 
                aspectClassName="aspect-[3/2]"
              />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-school-green/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-school-green-dark p-6 rounded-2xl shadow-2xl z-20 animate-float">
                <p className="text-school-gold font-black text-3xl">I – V</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Primary Block</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MIDDLE SECTION (CLASSES VI-VIII) ────────────── */}
      <section id="middle" className="py-12 md:py-14 bg-slate-50 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-5 lg:order-1 relative group animate-in fade-in slide-in-from-left-12 duration-1000">
              <FloatingCarousel 
                images={["/card1 (3).jpeg", "/card1 (4).jpeg", "/classroom-students.jpeg"]} 
                title="Middle Section Students" 
                aspectClassName="aspect-[16/9]"
              />
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-school-gold/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-school-gold p-6 rounded-2xl shadow-2xl z-20 animate-float [animation-delay:1s]">
                <p className="text-school-green-dark font-black text-3xl">VI – VIII</p>
                <p className="text-school-green-dark/60 text-[10px] font-bold uppercase tracking-widest">Middle Block</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 lg:order-2 animate-in fade-in slide-in-from-right-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                style={{ backgroundColor: "var(--school-gold-light)", color: "var(--school-green-dark)" }}
              >
                THE GROWTH YEARS (VI – VIII)
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Middle Section: <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Academic Perfection</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  Perfection in academics along with preparing the young minds to face the daunting challenges ahead is always reflected in the efforts of the staff and students of the Institution. Class room teaching is accompanied with the use of audio visual computer aided capsules, group activity, regular work-sheets, question banks and enough resource material. Stress is laid on giving individual attention.
                </p>
                <p>
                  The focus is on enabling the child to develop self-learning skills during class room teaching, rather than depending on private tuitions. A continuous comprehensive evaluation system is used which gives due weight age to class tests, term exams, unit tests, project work and class room participation.
                </p>
                <p>
                  Results are computer generated giving detailed analysis of students’ performance. This ensures higher quality, fairer education and regularity in completing syllabi. For classes VI onwards, a continuous and comprehensive evaluation system of weekly tests is followed to assess the performance of the children.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white shadow-xl border border-school-gold/20 italic text-school-green-dark font-medium leading-relaxed">
                &quot;Between the School, its students and Parents that consequential results can be redeemed. In pursuance of our efforts, we strive to promote morals and values that our Indian culture exemplifies.&quot;
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {middleSubjects.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-school-gold/30 transition-colors shadow-sm">
                    <Icon className="h-6 w-6 text-school-gold-dark" />
                    <span className="text-sm font-bold text-slate-800">{name}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE (ASYMMETRIC GRID) ─────────────── */}
      <section id="infrastructure" className="py-12 md:py-14 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase border-none"
              style={{ backgroundColor: "var(--school-green-light)", color: "var(--school-green-dark)" }}
            >
              LEARNING SPACES
            </Badge>
            <h2 className="text-4xl font-black text-school-green-dark">World-Class Infrastructure</h2>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              { src: "/School_Band.jpeg", label: "Music & Band" },
              { src: "/martial-arts-performance.jpeg", label: "Self Defense" },
              { src: "/yoga-performance.jpeg", label: "Sports Complex" },
              { src: "/Green_Beginnings.jpeg", label: "Science Garden" },
              { src: "/kids-play-area.jpeg", label: "Indoor Play Area" },
              { src: "/cultural-dance-performance.jpeg", label: "Cultural Hall" },
              { src: "/dance-performance-white-theme.jpeg", label: "Performing Arts" },
              { src: "/group-dance-green.jpeg", label: "Activity Zone" },
            ].map((f, i) => (
              <div
                key={f.label}
                className="relative break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer shadow-lg animate-in fade-in zoom-in duration-1000"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={f.src}
                  alt={f.label}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-green-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-school-gold font-bold text-xs uppercase tracking-widest mb-1">Modern Facility</span>
                  <span className="text-white text-lg font-black">{f.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
