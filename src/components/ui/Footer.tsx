import { MapPin, Phone, Mail, Heart, ArrowUpRight } from "lucide-react"
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Beyond Academics", href: "/beyond-academics" },
  { label: "Information Hub", href: "/information-hub" },
  { label: "Contact Us", href: "/contact" },
]

const infoLinks = [
  { label: "Admissions", href: "/information-hub" },
  { label: "Fee Structure", href: "/information-hub" },
  { label: "Rules & Regulations", href: "/information-hub" },
  { label: "Student Council", href: "/information-hub" },
]

export function Footer() {
  return (
    <footer className="relative bg-[var(--school-green-dark)] text-white overflow-hidden pt-20">
      {/* Decorative Wave/Curve at top */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none -translate-y-[95%]">
        <svg className="w-full h-auto rotate-180" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 40C1440 40 1100 120 720 120C340 120 0 40 0 40L0 120Z" fill="var(--school-green-dark)" />
          <path opacity="0.1" d="M0 120L1440 120L1440 20C1440 20 1100 100 720 100C340 100 0 20 0 20L0 120Z" fill="var(--school-gold)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col gap-4 mb-8 group">
              <div className="bg-white p-2 rounded-2xl w-fit  transition-all duration-500 ">
                <Image
                  src="/logo.png"
                  alt="Daffodils Convent School"
                  className="h-14 w-auto object-contain transition-transform duration-500"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="font-black text-xl tracking-tight leading-tight uppercase">
                  Daffodils <span className="text-[var(--school-gold)]">Convent School</span>
                </h2>
                <p className="text-[var(--school-gold)] text-[10px] font-bold uppercase tracking-[0.4em] mt-1 opacity-70">
                  Est. Anand Parbat, New Delhi
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs font-light">
              Nurturing Excellence, Inspiring Growth. We provide a holistic educational environment
              that blends traditional values with modern innovation.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/daffodilsconventschool" },
                { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1E2jA5NuJG/" },
                { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@daffodilsschool8512?si=g2qjQM6aYJB35Q8r" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[var(--school-gold)] hover:text-[var(--school-green-dark)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[var(--school-gold)] flex items-center gap-2">
              <span className="h-px w-4 bg-[var(--school-gold)] opacity-50" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[var(--school-gold)] flex items-center gap-2">
              <span className="h-px w-4 bg-[var(--school-gold)] opacity-50" />
              Information Hub
            </h3>
            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[var(--school-gold)] flex items-center gap-2">
              <span className="h-px w-4 bg-[var(--school-gold)] opacity-50" />
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group hover:border-[var(--school-gold)] transition-colors">
                  <MapPin className="h-4 w-4 text-[var(--school-gold)]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Location</p>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    114, Street No. 12, Chetan Basti,<br />
                    Block J, Nehru Nagar, Anand Parbat,<br />
                    New Delhi, Delhi, 110008
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="h-4 w-4 text-[var(--school-gold)]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Call Us</p>
                  <a href="tel:+917532817306" className="text-xs text-white/70 hover:text-white transition-colors font-light">
                    +91 7532817306 (Main Office)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="h-4 w-4 text-[var(--school-gold)]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Email</p>
                  <a href="mailto:daffodilsconventinformation@gmail.com" className="text-xs text-white/70 hover:text-white transition-colors font-light break-all">
                    daffodilsconventinformation@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()} <span className="text-white/60 font-black">DAFFODILS CONVENT SCHOOL</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] uppercase font-black tracking-widest text-white/30 hover:text-[var(--school-gold)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] uppercase font-black tracking-widest text-white/30 hover:text-[var(--school-gold)] transition-colors">Terms of Service</Link>
            <p className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/30 ml-4">
              MADE WITH <Heart className="h-3 w-3 fill-[var(--school-gold)] text-[var(--school-gold)] animate-pulse" /> FOR FUTURE LEADERS
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  )
}
