'use client'

import { useEffect, useRef } from 'react'
import { careFeatures } from '@/lib/data/about'
import { CareFeature } from '@/types'

function CareCard({ feature, className, initialTransform }: { feature: CareFeature; className: string; initialTransform: string }) {
  return (
    <div
      className={`care-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
      style={{ opacity: 0, transform: initialTransform, transition: 'opacity 0.6s ease, transform 0.6s ease', background: '#FFFFFF', border: '1px solid #E4DFE8' }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: '#F2EAF3' }}>
        <span style={{ color: '#5A2A5D' }}>✦</span>
      </div>
      <h3 className="font-serif text-xl font-medium mb-3" style={{ color: '#2E2E2E' }}>{feature.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#6B6570' }}>{feature.description}</p>
    </div>
  )
}

export default function HowWeCareSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (circleRef.current) {
            const el = circleRef.current as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translate(-50%, -50%) scale(1)'
          }
          const cards = sectionRef.current?.querySelectorAll('.care-card') as NodeListOf<HTMLElement>
          cards?.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translate(0,0)'
            }, i * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32" style={{ background: '#FBF8F5' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6" style={{ color: '#2E2E2E' }}>
            How we care for you
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B6570' }}>
            Our approach combines medical precision with genuine compassion — because great skin care is both a science and an art.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-10 md:gap-16 items-center">

          <CareCard feature={careFeatures[0]} className="text-left" initialTransform="translate(-30px, -30px)" />
          <CareCard feature={careFeatures[1]} className="text-left" initialTransform="translate(30px, -30px)" />

          <div ref={circleRef} className="absolute left-1/2 top-1/2 hidden md:block" style={{ width: '220px', height: '220px', opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 hover:scale-105" style={{ border: '4px solid #E4DFE8', background: '#F2EAF3' }}>
              <span className="text-4xl">✦</span>
            </div>
          </div>

          <CareCard feature={careFeatures[2]} className="text-left" initialTransform="translate(-30px, 30px)" />
          <CareCard feature={careFeatures[3]} className="text-left" initialTransform="translate(30px, 30px)" />

        </div>
      </div>
    </section>
  )
}