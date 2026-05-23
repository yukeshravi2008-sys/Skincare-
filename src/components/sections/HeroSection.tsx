"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { treatments } from "@/lib/data/treatments";
import { Reveal } from "../ui/RevealAnimation";

export default function Hero() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const lastScrollY = useRef(0);
  const rafRef = useRef<number | null>(null);
  const autoSpinRef = useRef(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);

    // Auto-spin loop
    const spinLoop = () => {
      if (autoSpinRef.current && wheelRef.current) {
        angleRef.current += 0.12; // degrees per frame (slow crawl)
        wheelRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(spinLoop);
    };
    rafRef.current = requestAnimationFrame(spinLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Pills span the full 360° evenly
  const pillCount = treatments.length;
  const orbitRadius = isMobile ? 200 : 310; // px — distance from center to pill midpoint

  return (
    <section className="relative bg-[#F5F0E8] overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* ─── NAV SPACER ─── */}
      <div className="pt-24" />

      {/* ─── CENTERED HEADLINE ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Floating badge: Board Certified */}
        <Reveal delay={0.1}>
          <div className="relative md:absolute md:-left-16 md:top-0 mb-6 md:mb-0 bg-white/80 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 border border-[#E8DCCC] shadow-sm animate-float z-20">
            <div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center text-base">🏆</div>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#4A2E2A]">Board Certified</p>
              <p className="text-[10px] text-[#8B7355]">Dermatologist team</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1
            className="text-[clamp(3.2rem,10vw,6.5rem)] leading-[1.05] mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              background: "linear-gradient(90deg, #5A2A5D, #CFA1A8)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Healthy,<br />
            <em>confident skin</em><br />
            starts here
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-[#6B6570] text-sm md:text-lg max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
            Advanced dermatology and modern aesthetic treatments are designed to improve your skin health and confidence.
          </p>
        </Reveal>

        {/* Floating badge: review */}
        <Reveal delay={0.4}>
          <div className="relative md:absolute md:-right-12 md:top-0 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#E8DCCC] shadow-sm max-w-[260px] md:max-w-[190px] animate-float-delay z-20 mx-auto mb-10 md:mb-0">
            <div className="flex gap-0.5 mb-2 md:mb-1.5">
              {[1,2,3,4,5].map(i=>(
                <svg key={i} className="w-3 h-3 text-[#C4924A] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-[12px] md:text-[11px] text-[#4A2E2A] leading-relaxed italic text-left">&ldquo;My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective.&rdquo;</p>
            
            <div className="flex justify-between items-end mt-3 md:mt-1.5">
              <div className="text-left">
                <p className="text-[11px] md:text-[10px] text-[#8B5E3C] font-semibold">Sofia Hale</p>
                <p className="text-[10px] text-[#8B7355]">Actress</p>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4C4B0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="Sofia Hale" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ─── SPINNING WHEEL SECTION ─── */}
      <div className="relative w-full overflow-hidden mt-10" style={{ height: 680 }}>
        {/* Full-bleed skin-toned background image */}
        <div
          className="absolute inset-0 rounded-[48px] mx-4 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/realistic-skin.png" 
            alt="Skin treatment"
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ─── THE SPINNING WHEEL ─── */}
        {/* 
          The wheel is a div centered in the section.
          transform-origin is its own center.
          Each pill is positioned absolutely using polar coords,
          then counter-rotated so the TEXT stays upright (partially — original keeps pills tilted).
        */}
        <div
          className="absolute"
          style={{
            // Place wheel center at bottom-center of the image section
            left: "50%",
            bottom: 0,
            width: 0,
            height: 0,
            transformOrigin: "center center",
          }}
        >
          {/* Outer rotating ring */}
          <div
            ref={wheelRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 0,
              height: 0,
              willChange: "transform",
            }}
          >
            {treatments.map((t, i) => {
              // Angle for each pill (distribute evenly around the wheel)
              // Start from 180° (pointing straight down) so pills "come up" from the bottom
              const angleStep = 360 / pillCount;
              const pillAngle = i * angleStep; // degrees

              // Convert to radians for positioning
              const rad = (pillAngle * Math.PI) / 180;
              const x = Math.sin(rad) * orbitRadius; // horizontal from center
              const y = -Math.cos(rad) * orbitRadius; // vertical from center (negative = up)

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: "max-content",
                    height: 38,
                    // Center the pill on its orbit point, and rotate so it points outward radially
                    transform: `translate(-50%, -50%) rotate(${pillAngle + 90}deg)`,
                    transformOrigin: "center center",
                  }}
                >
                  {/* The pill capsule */}
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 4,
                      paddingRight: 14,
                      gap: 8,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Small circular avatar at outer tip */}
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        flexShrink: 0,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.8)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.img} alt="" className="w-full h-full object-cover" />
                    </div>
                    {/* Treatment name */}
                    <span
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: isMobile ? 10 : 11,
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CENTER BADGE: "Explore our treatments" Dome Cutout ─── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end"
          style={{
            width: isMobile ? "240px" : "360px",
            height: isMobile ? "100px" : "140px",
            background: "#F5F0E8",
            borderTopLeftRadius: isMobile ? "120px 100px" : "180px 140px",
            borderTopRightRadius: isMobile ? "120px 100px" : "180px 140px",
          }}
        >
          <Link
            href="#services"
            className="flex flex-col items-center gap-1 mb-4 md:mb-6 group transition-all duration-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="h-6 w-auto group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs font-semibold text-[#2E2E2E] text-center max-w-[120px] md:max-w-none">
              Explore our treatments
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
