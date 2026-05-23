export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
  beforeImage: string
  afterImage: string
  treatment: string
  duration: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Emma R.",
    role: "Patient",
    text: "My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective.",
    rating: 5,
    beforeImage: "/images/results/acne-before.jpg",
    afterImage: "/images/results/acne-after.jpg",
    treatment: "Acne Treatment",
    duration: "12 Weeks",
  },
  {
    name: "James L.",
    role: "Patient",
    text: "The personalized approach made all the difference. They didn't rush anything and created a plan that really worked.",
    rating: 5,
    beforeImage: "/images/results/pigment-before.jpg",
    afterImage: "/images/results/pigment-after.jpg",
    treatment: "Chemical Peel",
    duration: "8 Weeks",
  },
  {
    name: "Sofia H.",
    role: "Actress",
    text: "From consultation to follow-up, the care was exceptional. My skin texture and tone have improved noticeably.",
    rating: 5,
    beforeImage: "/images/results/acne-before.jpg",
    afterImage: "/images/results/acne-after.jpg",
    treatment: "Laser Toning",
    duration: "6 Weeks",
  },
]