'use client'

import { useEffect, useRef } from 'react'
import { heroAbout } from '@/lib/data/about'

export default function HeroAboutSection() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const elements = [badgeRef.current, headingRef.current, paraRef.current]
    elements.forEach((el, i) => {
      if (!el) return
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(24px)'
      element.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`
      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 100)
    })
  }, [])

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #CFA1A8 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #5A2A5D 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ background: '#F3DADF', color: '#4A2E2A' }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#5A2A5D' }} />
          {heroAbout.badge}
        </div>

        <h1 ref={headingRef} className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-8" style={{ color: '#2E2E2E' }}>
          {heroAbout.heading}
        </h1>

        <p ref={paraRef} className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6B6570' }}>
          {heroAbout.subheading}
        </p>

      </div>
    </section>
  )
}