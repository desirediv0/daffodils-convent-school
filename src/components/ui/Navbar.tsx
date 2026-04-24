"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Beyond Activities", href: "/beyond-activities" },
  { label: "Academics", href: "/academics" },
  { label: "Information Hub", href: "/information-hub" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Top bar - only desktop and when NOT scrolled for a cleaner look */}
      <div
        className={cn(
          "hidden lg:block overflow-hidden transition-all duration-500",
          scrolled ? "max-h-0 opacity-0 mb-0" : "max-h-10 opacity-100 mb-4"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between text-[11px] font-medium tracking-wider uppercase text-white/80">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[var(--school-gold)]" />
              114 Line Number 12, Neharu Nagar, New Delhi 110008
            </span>
            <span className="flex items-center gap-1.5 border-l border-white/20 pl-6 ml-2">
              <Phone className="h-3 w-3 text-[var(--school-gold)]" />
              8:00 AM – 3:00 PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917532817306" className="flex items-center gap-1.5 hover:text-[var(--school-gold)] transition-colors">
              <Phone className="h-3 w-3 text-[var(--school-gold)]" />
              +91 7532817306
            </a>
            <a href="mailto:daffodilsconventinformation@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--school-gold)] transition-colors">
              <Mail className="h-3 w-3 text-[var(--school-gold)]" />
              daffodilsconventinformation@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-[110]">
          <div className="relative h-10 w-10 md:h-12 md:w-12 bg-white rounded-xl p-1.5 shadow-md transition-transform duration-500 group-hover:rotate-[5deg]">
            <Image
              src="/logo.png"
              alt="Daffodils Convent School"
              className="h-full w-full object-contain"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-bold text-base md:text-lg leading-tight transition-colors duration-300",
                scrolled ? "text-[var(--school-green-dark)]" : "text-white"
              )}
            >
              Daffodils <span className="hidden xs:inline">Convent School</span>
            </span>
            <span
              className={cn(
                "text-[10px] md:text-xs font-medium tracking-wide transition-colors duration-300",
                scrolled
                  ? "text-[var(--school-gold-dark)]"
                  : "text-[var(--school-gold)]"
              )}
            >
              Nurturing Minds, Shaping Futures
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-black/5 rounded-full p-1 backdrop-blur-sm border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group",
                  isActive
                    ? "text-white bg-[var(--school-green)] shadow-md"
                    : scrolled
                      ? "text-[var(--school-green-dark)] hover:text-[var(--school-green)] hover:bg-white/50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-[var(--school-green)] -z-10 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="rounded-full px-6 font-bold shadow-lg hover:shadow-[var(--school-gold)/30] hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "var(--school-gold)",
              color: "var(--school-green-dark)",
            }}
          >
            <Link href="/contact" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Apply Now
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2.5 rounded-xl transition-all duration-300 relative z-[110]",
            isOpen
              ? "bg-[var(--school-green-dark)] text-white"
              : scrolled
                ? "bg-[var(--school-green)]/10 text-[var(--school-green-dark)]"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20"
          )}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] lg:hidden flex flex-col"
            style={{ backgroundColor: "#0d2d23" }} // Explicit school-green-dark
          >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[40%] bg-[var(--school-gold)]/10 blur-[120px] rounded-full" />
              <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[40%] bg-[var(--school-green)]/20 blur-[120px] rounded-full" />
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-10 relative z-10">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6 px-4">Main Navigation</p>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-6 py-5 rounded-2xl text-xl font-black transition-all duration-300",
                          isActive
                            ? "bg-[var(--school-gold)] text-[#0d2d23] shadow-2xl shadow-[var(--school-gold)]/20"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className={cn(
                          "h-5 w-5 transition-all duration-500",
                          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        )} />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button asChild className="w-full h-16 rounded-2xl text-lg font-black shadow-2xl shadow-black/20" style={{ backgroundColor: "white", color: "#0d2d23" }}>
                      <Link href="/contact" className="flex items-center gap-3">
                        <GraduationCap className="h-6 w-6" />
                        Apply for Admission
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <div className="mt-12 space-y-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 px-4">Quick Contact</p>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="tel:+917532817306" className="flex items-center gap-5 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                      <div className="h-10 w-10 rounded-xl bg-[var(--school-gold)]/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[var(--school-gold)]" />
                      </div>
                      +91 7532817306
                    </a>
                    <a href="mailto:daffodilsconventinformation@gmail.com" className="flex items-center gap-5 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                      <div className="h-10 w-10 rounded-xl bg-[var(--school-gold)]/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[var(--school-gold)]" />
                      </div>
                      Email Us
                    </a>
                    <div className="flex items-center gap-5 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-medium italic text-sm">
                      <MapPin className="h-5 w-5 text-[var(--school-gold)] shrink-0" />
                      Line Number 12, Neharu Nagar, Anand Parbat, New Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}