"use client";
import { useState } from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Reveal } from "../ui/RevealAnimation";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-28 bg-[#EFE7DF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="flex flex-col gap-8 w-full">
            <Reveal delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-4 md:mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Patient Stories</span>
                </div>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl text-[#2E2E2E] leading-[1.1]"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  What our<br />patients say
                </h2>
              </div>
            </Reveal>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setSliderPosition(50); // reset slider to middle on transition
                }}
                className="w-11 h-11 rounded-full border border-[#E4DFE8] flex items-center justify-center text-[#2E2E2E] hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={() => {
                  setActive((prev) => (prev + 1) % testimonials.length);
                  setSliderPosition(50); // reset slider to middle on transition
                }}
                className="w-11 h-11 rounded-full border border-[#E4DFE8] flex items-center justify-center text-[#2E2E2E] hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
              >
                →
              </button>
            </div>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-[28px] md:rounded-[32px] p-6 md:p-8 border border-[#E4DFE8] shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#5A2A5D] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2E2E2E] leading-relaxed text-sm md:text-base italic mb-6">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F2EAF3] flex items-center justify-center text-[#5A2A5D] font-semibold text-sm flex-shrink-0">
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-[#2E2E2E]">{testimonials[active].name}</p>
                    <p className="text-[10px] md:text-xs text-[#6B6570]">{testimonials[active].role}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActive(i);
                      setSliderPosition(50); // reset slider to middle on transition
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-[#5A2A5D]" : "w-3 bg-[#E4DFE8]"}`}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div
              className="rounded-[36px] md:rounded-[48px] overflow-hidden h-[360px] sm:h-[400px] md:h-[580px] w-full relative group shadow-lg border border-[#E4DFE8]/50"
            >
              {/* Bottom Image (After state) */}
              <img 
                src={testimonials[active].afterImage} 
                alt="After treatment clear skin" 
                className="w-full h-full object-cover absolute inset-0 select-none pointer-events-none" 
              />
              
              {/* Top Image (Before state, clipped based on slider position) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10"
                style={{ 
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
                }}
              >
                <img 
                  src={testimonials[active].beforeImage} 
                  alt="Before treatment skin concern" 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Glassmorphic Labels */}
              <div className="absolute top-4 left-4 z-20 bg-white/45 backdrop-blur-md border border-white/20 text-[#2E2E2E] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm pointer-events-none">
                Before
              </div>
              <div className="absolute top-4 right-4 z-20 bg-white/45 backdrop-blur-md border border-white/20 text-[#2E2E2E] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm pointer-events-none">
                After
              </div>

              {/* Vertical Divider & Drag Handle */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-[#E4DFE8]/50 flex items-center justify-center text-[#5A2A5D] font-bold text-sm pointer-events-none group-hover:scale-105 transition-transform duration-300">
                  ↔
                </div>
              </div>

              {/* Drag/Swipe overlay input range */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after comparison slider"
              />

              {/* Results Text Badge (remains at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 w-full shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8E5C8F] mb-1">
                    Real Results · Real Patients
                  </p>
                  <p className="text-sm font-semibold text-[#2E2E2E]">
                    {testimonials[active].duration} · {testimonials[active].treatment}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}