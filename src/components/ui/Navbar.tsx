"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap, Phone, Mail, MapPin, ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Beyond Academics",
    href: "/beyond-academics",
    subLinks: [
      { label: "Performing Arts (Music/Dance)", href: "/beyond-academics#performing-arts" },
      { label: "Sports", href: "/beyond-academics#sports" },
      { label: "Yoga", href: "/beyond-academics#yoga" },
      { label: "Mother's Day Activity", href: "/beyond-academics#mothers-day" },
      { label: "Experiential Learning", href: "/beyond-academics#experiential" },
    ]
  },
  {
    label: "Academics",
    href: "/academics",
    subLinks: [
      { label: "Pre-Primary (Nur-KG)", href: "/academics#pre-primary" },
      { label: "Primary Section (I-V)", href: "/academics#primary" },
      { label: "Middle Section (VI-VIII)", href: "/academics#middle" },
      { label: "Infrastructure", href: "/academics#infrastructure" },
    ]
  },
  {
    label: "Information Hub",
    href: "/information-hub",
    subLinks: [
      { label: "Rules & Regulations", href: "/information-hub#rules" },
      { label: "Admissions", href: "/information-hub#admissions" },
      { label: "Parents / Guardians", href: "/information-hub#parents" },
      { label: "ASR Fellowship Award", href: "/information-hub#asr" },
      { label: "SLFRC Committee", href: "/information-hub#slfrc" },
      { label: "Student Council", href: "/information-hub#council" },
      { label: "Holiday List", href: "/holidays" },
    ]
  },
  {
    label: "Admissions",
    href: "/admissions",
    subLinks: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Eligibility Criteria", href: "/admissions#eligibility" },
      { label: "Required Documents", href: "/admissions#documents" },
      { label: "Online Inquiry", href: "/admissions#inquiry" },
      { label: "FAQ", href: "/admissions#faq" },
    ]
  },
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
              114, Street No. 12, Chetan Basti, Block J, Nehru Nagar, Anand Parbat, New Delhi, Delhi, 110008
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
                "font-bold text-sm md:text-base leading-tight transition-colors duration-300 font-beware",
                scrolled ? "text-[var(--school-green-dark)]" : "text-white"
              )}
            >
              Daffodils <span className="hidden xs:inline">Convent School</span>
            </span>
            <span
              className={cn(
                "text-[10px] md:text-[12px] font-medium tracking-wide transition-colors duration-300",
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
            const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href))

            if (link.subLinks) {
              return (
                <div key={link.href} className="relative group/dropdown">
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 group/btn",
                      isActive
                        ? "text-white bg-[var(--school-green)] shadow-md"
                        : scrolled
                          ? "text-[var(--school-green-dark)] hover:text-[var(--school-green)] hover:bg-white/50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/dropdown:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-[120]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 min-w-[220px]">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold text-slate-600 hover:bg-slate-50 hover:text-school-green-dark transition-all"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-school-gold" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

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
            <Link href="/admissions" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Apply Now
            </Link>
          </Button>
        </div>        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-3 rounded-xl transition-all duration-300 relative z-[110]",
            isOpen
              ? "opacity-0 pointer-events-none" // Hide original toggle when menu is open
              : scrolled
                ? "bg-[var(--school-green)]/10 text-[var(--school-green-dark)]"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20"
          )}
          onClick={toggleMenu}
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
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
            className="fixed inset-0 z-[120] lg:hidden flex flex-col h-[100dvh] w-full"
            style={{ backgroundColor: "#0d2d23" }}
          >
            {/* Close Button Inside Menu */}
            <div className="absolute top-6 right-6 z-[130]">
              <button
                onClick={toggleMenu}
                className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--school-gold)] hover:text-[#0d2d23] transition-all duration-300 active:scale-90 shadow-xl"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--school-gold)]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-28 pb-10 relative z-20">
              <div className="flex flex-col gap-2">
                <p className="text-[10px]  uppercase tracking-[0.4em] text-white/30 mb-4 px-4">Menu</p>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href))

                  if (link.subLinks) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                        className="flex flex-col"
                      >
                        <div className="flex flex-col gap-1">
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-6 py-4 rounded-xl text-lg transition-all duration-300",
                              isActive
                                ? "bg-[var(--school-gold)] text-[#0d2d23] shadow-lg"
                                : "text-white/90 hover:bg-white/5"
                            )}
                          >
                            {link.label}
                            <ChevronDown className={cn("h-5 w-5 transition-transform", isActive ? "rotate-180" : "")} />
                          </Link>

                          <div className="grid grid-cols-1 gap-1 ml-4 border-l border-white/10 pl-4 mt-2 mb-4">
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )
                  }

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-6 py-4 rounded-xl text-lg  transition-all duration-300",
                          isActive
                            ? "bg-[var(--school-gold)] text-[#0d2d23] shadow-lg"
                            : "text-white/90 hover:bg-white/5"
                        )}
                      >
                        {link.label}
                        {isActive ? (
                          <ArrowUpRight className="h-5 w-5" />
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Button asChild className="w-full h-12 rounded-md text-md f bg-white text-[#0d2d23] hover:bg-white/90 shadow-xl">
                  <Link href="/admissions" className="flex items-center justify-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Apply for Admission
                  </Link>
                </Button>

                <div className="mt-10 space-y-6">
                  <div className="space-y-4">
                    <a href="tel:+917532817306" className="flex items-center gap-4 text-white hover:text-[var(--school-gold)] transition-colors px-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[var(--school-gold)]" />
                      </div>
                      <span className="font-bold text-sm">+91 7532817306</span>
                    </a>
                    <a href="mailto:daffodilsconventinformation@gmail.com" className="flex items-center gap-4 text-white hover:text-[var(--school-gold)] transition-colors px-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-[var(--school-gold)]" />
                      </div>
                      <span className="font-bold text-sm">Email Us</span>
                    </a>
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