
import { Target, Eye, Heart, Award, ArrowRight, Quote, CheckCircle2, Trophy, Users, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/PageHero"
import Link from "next/link"
import Image from "next/image"


export function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Our Story & Vision"
        subtitle="Discover the legacy of excellence and the nurturing environment that defines Daffodils Convent School."
        breadcrumb="About Us"
      />

      {/* ─── OUR LEGACY ──────────────────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-school-green-light/20 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative group animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image
                  src="/School_Band.jpeg"
                  alt="Daffodils Convent School Legacy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-school-green-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-school-gold/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-school-green/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 z-20 flex items-center gap-4 animate-float">
                <div className="h-14 w-14 rounded-xl bg-school-green-dark flex items-center justify-center text-school-gold">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-school-green-dark font-black text-2xl leading-none">Since 2013</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Nurturing Minds</p>
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
                ABOUT OUR SCHOOL
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.15] text-school-green-dark">
                Nurturing Minds, <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Shaping Futures</span>
              </h2>

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>
                  <span className="font-beware font-black">Daffodils Convent School</span>, located at 114, Street No. 12, Chetan Basti, Block J, Nehru Nagar, Anand Parbat, New Delhi, Delhi, 110008, is a nurturing space where education blends with values, creativity, and discipline. Established with the vision of empowering young minds, the school provides holistic learning opportunities for students from Preschool to Class VIII.
                </p>
                <p>
                  We believe that every child is unique and deserves an environment that fosters curiosity, confidence, and character. Our classrooms are vibrant centers of learning, guided by dedicated teachers who inspire students to discover their potential and grow into responsible citizens.
                </p>
                <p className="italic font-medium text-school-green-dark border-l-4 border-school-gold pl-6 py-2">
                  &quot;Everyday at the <span className="font-beware font-black">Daffodils Convent School</span> is like a blessing with the active students and talented staff members around.&quot;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  "CBSE Affiliated Curriculum",
                  "Expert & Dedicated Faculty",
                  "Modern Infrastructure",
                  "Values-Based Learning",
                ].map((h) => (
                  <div key={h} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-school-green/30 transition-colors group">
                    <div className="h-8 w-8 rounded-lg bg-school-green/10 flex items-center justify-center group-hover:bg-school-green group-hover:text-white transition-all">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION, MISSION & VALUES ─────────────────────── */}
      <section className="py-12 md:py-14 relative overflow-hidden" style={{ backgroundColor: "#1a3a32" }}>
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm26 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm16 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM9 56c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm73 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM27 28c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm14 48c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM28 6c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm60 44c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <p
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--school-gold)" }}
            >
              OUR CORE IDENTITY
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Vision, Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be a leading institution that nurtures well-rounded individuals — academically excellent, morally strong, culturally rich, and socially responsible.",
                color: "var(--school-gold)",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide quality education in a safe, inclusive, and stimulating environment, developing each student's intellectual curiosity and creative potential.",
                color: "var(--school-gold)",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Integrity, Respect, Excellence, Compassion, and Innovation form the cornerstone of our institution, preparing students to be ethical leaders.",
                color: "var(--school-gold)",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-school-gold/30 transition-all duration-500 group relative animate-in fade-in zoom-in duration-700"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl"
                    style={{ backgroundColor: "var(--school-gold)" }}
                  >
                    <Icon className="h-8 w-8 text-school-green-dark" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-school-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg italic">
                    &quot;{item.desc}&quot;
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP (DIRECTOR & PRINCIPAL) ─────────────── */}
      <section className="py-12 md:py-14 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              className="mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{
                backgroundColor: "var(--school-green-light)",
                color: "var(--school-green-dark)",
              }}
            >
              SCHOOL LEADERSHIP
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-school-green-dark">
              From the Desk of <br />
              <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Our Leaders</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Founder Chairman Section */}
            <div className="max-w-5xl mx-auto p-10 md:p-12 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="absolute top-0 right-0 w-32 h-32 bg-school-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-school-gold/10 transition-colors" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-xl bg-school-green-dark flex items-center justify-center text-school-gold">
                      <Quote className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-school-green-dark">Founder Chairman Message</h4>
                      <p className="text-school-gold-dark font-bold text-xs uppercase tracking-widest">Legacy & Vision</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-school-green-dark mb-6 leading-tight">
                    Legacy of Our H&apos;ble Founder Chairman Sir — Mr. Surinder Routela
                  </h3>

                  <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                    <p>
                      Mr. Surinder Routela dedicated his life to education, shaping it as his enduring legacy. He lived this journey with a passion for nurturing young minds. To him, learning was far more than the pursuit of knowledge; it was a continuous process that shaped character and guided every learner to act with honesty and intent.
                    </p>
                    <p>
                      He firmly believed that education should help each child uncover the richness of their potential and use it to build a better world. Guided by timeless values, his philosophy of learning nurtured individuals who think wisely, feel deeply and lead with compassion.
                    </p>
                    <p>
                      Mr. Routela dreamt of learners who would grow into exemplary embodiments of humanity—radiating confidence and grace. His vision will live on in the minds he shaped and the lives he touched.
                    </p>
                    <p className="text-school-green-dark font-bold italic">
                      May the flame of education he ignited continue to kindle minds and inspire the path for generations to come!
                    </p>
                  </div>
                </div>

                <div className="md:col-span-4 w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50">
                  <Image
                    src="/principal-speech.jpeg"
                    alt="Founder Chairman Mr. Surinder Routela"
                    className="w-full h-full object-cover object-top"
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Principal Section */}
            <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-school-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:bg-school-green/10 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 rounded-xl bg-school-gold flex items-center justify-center text-school-green-dark">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-school-green-dark">Principal&apos;s Message</h4>
                    <p className="text-school-gold-dark font-bold text-xs uppercase tracking-widest">Academic Excellence</p>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-school-green-dark mb-8 leading-tight italic">
                  &quot;Education is the movement from darkness to light&quot; <br />
                  <span className="text-school-gold text-lg not-italic" style={{ color: "var(--school-gold-dark)" }}>– Allen Bloom</span>
                </h3>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
                  <p>
                    India’s rapid progress in the 21st century places us at a unique crossroads—where tradition and innovation must coexist in meaningful balance. As we move forward, we are shaping a future that values both collective engagement and individual growth. This evolving world calls for learners who are imaginative, creative, versatile in their skills, globally aware, quick to respond, and capable of anticipating change.
                  </p>
                  <p>
                    We prepare our students for a rapidly changing world, our focus remains on balancing strong values with progressive learning. At our school, we believe education must go beyond textbooks to nurture curiosity, creativity, critical thinking, and global awareness. By blending tradition with innovation and integrating meaningful, experiential learning into our curriculum, we strive to equip our learners with the skills, confidence, and adaptability needed to succeed in the 21st century and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Current Enrollments", value: "1,000+", icon: Users },
              { label: "Qualified Staff", value: "35+", icon: BookOpen },
              { label: "Clubs & Activities", value: "50+", icon: Trophy },
              { label: "Awards Won", value: "100+", icon: Award },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="h-12 w-12 rounded-xl bg-school-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-school-green-dark" />
                </div>
                <h4 className="text-3xl font-black text-school-green-dark mb-1">{stat.value}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMING VISION ─────────────────────────── */}
      <section className="py-12 md:py-14 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
              <Badge
                className="mb-6 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase border-none"
                style={{
                  backgroundColor: "var(--school-gold-light)",
                  color: "var(--school-gold-dark)",
                }}
              >
                OUR PHILOSOPHY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-school-green-dark mb-8 leading-tight">
                Transforming <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold-dark)" }}>Vision Into Reality</span>
              </h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
                <p>
                  Today education is being seen as a serious exertion since it deals with and shapes human beings. Quality in education is not an end but a means of achieving the aims of education. The quality of education is determined by the kind of humans it produces.
                </p>
                <p>
                  Today education envisages to produce knowledge based society and not a literary society as in the past. This can be reached about only through quality planning, expertise, training personnel, quality process, analyzing and inspections.
                </p>
                <p>
                  Hence schooling has to come out of the normal set of boundaries and has to become multi-dimensional, thus meeting our need for quality education. Providing such educational environment to our children has become imperative as India has evolved to be a worthy leader on the world platform.
                </p>
                <p>
                  <span className="font-beware font-black">Daffodils Convent School</span>, with the motto <span className="text-school-green-dark font-black">“Dream-Believe-Achieve”</span>, has been serving the Society in the field of education since 2013 with an open minded functional approach.
                </p>
                <p>
                  As the years have gone by, the school has evolved with the dynamics of world education system ensuring that its students dare to ask questions and not fear from them, always encouraging them to first discover themselves before exploring the world.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-12 duration-1000">
              <p className="text-slate-600 leading-relaxed mb-8">
                Today education envisages to produce knowledge based society and not a literary society as in the past. This can be reached about only through quality planning, expertise, training personnel, quality process, analyzing and inspections.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Hence schooling has to come out of the normal set of boundaries and has to become multi-dimensional, thus meeting our need for quality education. Providing such educational environment to our children has become imperative as India has evolved to be a worthy leader on the world platform.
              </p>
              <div className="p-6 bg-school-green-dark rounded-2xl text-white">
                <p className="italic text-sm leading-relaxed opacity-90">
                  &quot;It is only through a strong partnership between the School, its students and Parents that consequential results can be redeemed. In pursuance of our efforts, we strive to promote morals and values that our Indian culture exemplifies.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(35,77,65,0.2)] animate-in fade-in zoom-in duration-1000"
            style={{
              background: `linear-gradient(135deg, #1a3a32 0%, #2a5a4a 100%)`,
            }}
          >
            {/* Animated Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--school-gold),transparent_40%)] opacity-10" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,var(--school-gold),transparent_40%)] opacity-10" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <Badge
                className="mb-8 px-5 py-2 text-xs font-black tracking-[0.3em] uppercase border-2 shadow-2xl backdrop-blur-md"
                style={{
                  backgroundColor: "oklch(0.8 0.15 82 / 0.15)",
                  borderColor: "var(--school-gold)",
                  color: "var(--school-gold)",
                }}
              >
                JOIN OUR LEGACY
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Shape Your Child&apos;s <br />
                <span className="text-school-gold" style={{ color: "var(--school-gold)" }}>Bright Future Today</span>
              </h2>
              <p className="text-white text-lg leading-relaxed max-w-xl mx-auto mb-12">
                Connect with our admissions team to learn more about how <span className="font-beware font-black">Daffodils Convent School</span> can nurture your child&apos;s unique potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-12 rounded-xl gap-3 font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--school-gold)",
                    color: "#1a3a32",
                  }}
                >
                  <Link href="/contact">
                    Start Admission Process
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 rounded-xl gap-3 font-black text-lg backdrop-blur-md bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Link href="/contact">
                    Visit Our Campus
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
