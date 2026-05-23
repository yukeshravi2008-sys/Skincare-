'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { galleryBadge, galleryHeading } from '@/lib/data/about'

const galleryImages = [
  { src: '/images/clinic/gallery-1.jpg', alt: 'Amethyst Clinic Interior' },
  { src: '/images/clinic/gallery-2.jpg', alt: 'Treatment Room' },
  { src: '/images/clinic/gallery-3.jpg', alt: 'Consultation Area' },
  { src: '/images/clinic/gallery-4.jpg', alt: 'Clinic Entrance' },
  { src: '/images/clinic/gallery-5.jpg', alt: 'Aesthetic Equipment' },
  { src: '/images/clinic/gallery-6.jpg', alt: 'Waiting Area' },
]

export default function GalleryGridSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = gridRef.current?.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>
          items?.forEach((item: HTMLElement, i: number) => {
            setTimeout(() => {
              item.style.opacity = '1'
              item.style.transform = 'scale(1)'
            }, i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32" style={{ background: '#F7F3EF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ background: '#F3DADF', color: '#4A2E2A' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#5A2A5D' }} />
            {galleryBadge}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal max-w-2xl mx-auto" style={{ color: '#2E2E2E' }}>
            {galleryHeading}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: '260px', opacity: 0, transform: 'scale(0.95)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}