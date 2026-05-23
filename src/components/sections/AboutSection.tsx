import Link from "next/link";
import { Reveal } from "../ui/RevealAnimation";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#FBF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top centered tagline */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Expert Care for Every Skin Journey</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl text-[#2E2E2E] leading-[1.15] max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              We combine medical dermatology with advanced aesthetic{" "}
              <em>treatments</em> to help you achieve clear, healthy, and naturally{" "}
              <em>radiant skin.</em>
            </h2>
          </Reveal>

          {/* Stars badge */}
          <Reveal delay={0.3}>
            <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-3 mt-8 md:mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5A2A5D] flex items-center justify-center text-white text-sm font-bold">5.0</div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-[#5A2A5D] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-[#6B6570] mt-1 md:mt-0">86+ Reviews from clients</span>
            </div>
          </Reveal>
        </div>

        {/* 4-image mosaic floating over centered text */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-16 md:mb-20 max-w-4xl mx-auto">
            {[
              { src: "/images/clinic/mosaic-1.jpg", cls: "" },
              { src: "/images/clinic/mosaic-2.jpg", cls: "mt-4 md:mt-8" },
              { src: "/images/clinic/mosaic-3.jpg", cls: "-mt-4 md:-mt-8" },
              { src: "/images/clinic/mosaic-4.jpg", cls: "" },
            ].map((m, i) => (
              <div
                key={i}
                className={`rounded-[24px] md:rounded-[40px] overflow-hidden h-32 sm:h-48 md:h-64 group ${m.cls}`}
              >
                <img
                  src={m.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* A clinic committed — inside a large rounded container */}
        <Reveal delay={0.2}>
          <div className="bg-[#EFE7DF] rounded-[32px] md:rounded-[48px] p-2 sm:p-4 md:p-6">
            <div className="grid md:grid-cols-2 gap-0 items-stretch flex-col">
              {/* Left: big rounded image */}
              <div className="rounded-[28px] md:rounded-[36px] overflow-hidden min-h-[300px] md:min-h-[400px] relative">
                <img src="/images/clinic/about-main.svg" alt="" className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3">
                    <p className="text-[10px] md:text-xs text-[#6B6570]">Lead Dermatologist</p>
                    <p className="text-sm md:text-base font-semibold text-[#2E2E2E]">Dr. Shruthi Pavana Janardhanan</p>
                    <p className="text-[10px] md:text-xs text-[#8E5C8F]">MBBS, MD.DVL, DNB.DVL, MNAMS, MRCP SCE DERM(UK)</p>
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="p-6 md:p-10 flex flex-col justify-center gap-5 md:gap-6">
                <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Excellence in Skin Care</span>
                </div>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl text-[#2E2E2E]"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  A clinic committed
                </h3>
                <p className="text-sm text-[#6B6570] leading-relaxed">
                  We believe good skin starts with understanding. Every treatment begins with a detailed consultation, a long-term plan, and science-backed care.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced Science-Backed Treatment Methods",
                    "A highly skilled and certified expert team",
                    "Tailored plans for every skin type and concern",
                    "Hair and scalp disorders",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#E4DFE8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs md:text-sm text-[#2E2E2E]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 md:mt-0">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#5A2A5D] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#4A1F4D] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {[
            { value: "10+", label: "Years of medical excellence" },
            { value: "86+", label: "5-star patient reviews" },
            { value: "4", label: "Core treatment specialties" },
            { value: "100%", label: "Personalized treatment plans" },
          ].map((stat, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div className="bg-white border border-[#E4DFE8] rounded-[24px] md:rounded-3xl p-4 md:p-6 text-center h-full flex flex-col justify-center shadow-sm">
                <p
                  className="text-3xl md:text-4xl text-[#5A2A5D] mb-1"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs text-[#6B6570] leading-snug">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
