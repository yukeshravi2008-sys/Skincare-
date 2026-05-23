'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { aboutCTA } from '@/lib/data/about'

export default function AboutCTASection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = [
      { ref: leftRef, transform: 'translateX(-40px)', delay: '0s' },
      { ref: rightRef, transform: 'translateX(40px)', delay: '0.2s' },
    ]
    items.forEach(({ ref, transform, delay }) => {
      if (!ref.current) return
      const el = ref.current as HTMLElement
      el.style.opacity = '0'
      el.style.transform = transform
      el.style.transition = `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach(({ ref }) => {
            if (!ref.current) return
            const el = ref.current as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translate(0)'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (leftRef.current) observer.observe(leftRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="flex flex-col gap-8">
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight" style={{ color: '#2E2E2E' }}>
              {aboutCTA.heading}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B6570' }}>
              {aboutCTA.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={aboutCTA.primaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{ background: '#5A2A5D', color: '#FFFFFF' }}
              >
                <span>✦</span>
                {aboutCTA.primaryButton}
              </Link>
              <Link
                href={aboutCTA.secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{ background: 'transparent', color: '#2E2E2E', border: '1px solid #E4DFE8' }}
              >
                <span>✦</span>
                {aboutCTA.secondaryButton}
              </Link>
            </div>
          </div>

          <div ref={rightRef} className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>
            <img src="/images/clinic/cta-interior.svg" alt="" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  )
}