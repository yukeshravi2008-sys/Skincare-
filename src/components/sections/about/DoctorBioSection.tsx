'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { doctorData, credentials } from '@/lib/data/about'
import { Credential } from '@/types'

export default function DoctorBioSection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateX(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (leftRef.current) {
      const el = leftRef.current as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateX(-40px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      observer.observe(leftRef.current)
    }

    if (rightRef.current) {
      const el = rightRef.current as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateX(40px)'
      el.style.transition = 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'
      observer.observe(rightRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32" style={{ background: '#FBF8F5' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div ref={leftRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: '580px' }}>
              <Image src={doctorData.image} alt={doctorData.name} fill className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                <span className="text-sm font-medium" style={{ color: '#2E2E2E' }}>{doctorData.role}</span>
                <span className="text-xl">✦</span>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal mb-2" style={{ color: '#2E2E2E' }}>
                {doctorData.name}
              </h2>
              <p className="font-serif text-lg" style={{ color: '#6B6570' }}>
                {doctorData.title}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium w-fit" style={{ background: '#F2EAF3', color: '#5A2A5D' }}>
              {doctorData.qualifications}
            </div>

            <div className="flex flex-col gap-4">
              {doctorData.bio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: '#6B6570' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t" style={{ borderColor: '#E4DFE8' }}>
              {credentials.map((credential: Credential, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F2EAF3', border: '1px solid #E4DFE8' }}>
                    <span style={{ color: '#5A2A5D' }}>✦</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#2E2E2E' }}>{credential.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}