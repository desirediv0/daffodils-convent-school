"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"

interface CareersDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function CareersDialog({ isOpen, onClose }: CareersDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("phone", formData.phone)
      data.append("position", formData.position)
      data.append("experience", formData.experience)
      data.append("message", formData.message)

      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      })

      const result = await response.json()
      if (result.success) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          message: "",
        })
      } else {
        setStatus("error")
        setErrorMessage(result.error || "Failed to submit your application. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 z-10 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Upper banner color pattern */}
            <div className="h-3 bg-gradient-to-r from-school-gold via-[#0d2d23] to-school-gold" style={{ background: "linear-gradient(90deg, var(--school-gold) 0%, #0d2d23 50%, var(--school-gold) 100%)" }} />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 transition-colors duration-200"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-lg"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0d2d23] dark:text-white mb-3">
                  Application Submitted!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-md mb-8 leading-relaxed">
                  Thank you for applying to join Daffodils Convent School. We have received your application and sent a confirmation email. Our recruitment team will review it shortly.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#0d2d23] hover:bg-[#0a231b] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-2xl text-school-gold">
                    <Sparkles className="w-6 h-6" style={{ color: "var(--school-gold)" }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0d2d23] dark:text-white leading-tight">
                      Join Our Team
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                      Shape the future of education. Apply for career opportunities.
                    </p>
                  </div>
                </div>

                {status === "error" && (
                  <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-2xl flex items-center gap-3 text-rose-700 dark:text-rose-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-semibold">{errorMessage}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10 digit number"
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Position Applied For *
                      </label>
                      <select
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white text-sm font-medium appearance-none"
                      >
                        <option value="">Select a position...</option>
                        <option value="Pre-Primary Teacher (NTT)">Pre-Primary Teacher (NTT)</option>
                        <option value="Primary Teacher (PRT)">Primary Teacher (PRT)</option>
                        <option value="Trained Graduate Teacher (TGT)">Trained Graduate Teacher (TGT)</option>
                        <option value="Post Graduate Teacher (PGT)">Post Graduate Teacher (PGT)</option>
                        <option value="Coordinator / HOD">Coordinator / HOD</option>
                        <option value="Special Educator">Special Educator</option>
                        <option value="Administrative Staff">Administrative Staff</option>
                        <option value="Other">Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                      Teaching / Work Experience (Years) *
                    </label>
                    <input
                      type="number"
                      name="experience"
                      required
                      min="0"
                      max="50"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 3"
                      className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself and why you'd like to join Daffodils Convent School..."
                      className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#0d2d23] dark:focus:ring-school-gold outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm font-medium resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={status === "submitting"}
                      className="px-5 py-3 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-bold rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 text-sm disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="px-6 py-3 bg-[#0d2d23] hover:bg-[#0a231b] text-white font-bold rounded-xl transition-all duration-350 shadow-md hover:shadow-lg flex items-center gap-2 text-sm disabled:opacity-50"
                      style={{ backgroundColor: "var(--school-green-dark, #0d2d23)" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
