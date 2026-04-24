import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
  className?: string
}

export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section
      className={cn("relative pt-40 pb-24 overflow-hidden", className)}
      style={{ 
        backgroundColor: "var(--school-green-dark)",
        backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.34 0.11 152 / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.8 0.15 82 / 0.1) 0%, transparent 50%)"
      }}
    >
      {/* Animated Decorative Shapes */}
      <div
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-10 animate-pulse"
        style={{ backgroundColor: "var(--school-gold)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-10 -left-20 h-64 w-64 rounded-full opacity-10 animate-float"
        style={{ backgroundColor: "var(--school-gold)", filter: "blur(30px)" }}
      />
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {breadcrumb && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gold-shimmer" style={{ background: "var(--school-gold)" }}></div>
              <p
                className="text-sm font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--school-gold)" }}
              >
                {breadcrumb}
              </p>
              <div className="h-[1px] w-8 bg-gold-shimmer" style={{ background: "var(--school-gold)" }}></div>
            </div>
          )}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {subtitle}
          </p>
        )}
      </div>

      {/* Modern Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 80" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full h-[50px]"
        >
          <path
            d="M0 80L80 72C160 64 320 48 480 42.7C640 37.3 800 42.7 960 48C1120 53.3 1280 58.7 1360 61.3L1440 64V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
