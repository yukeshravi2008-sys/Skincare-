export interface BlogSection {
  title: string
  body: string
}

export interface BlogPost {
  id: string
  category: string
  date: string
  title: string
  featured: boolean
  introduction: string
  sections: BlogSection[]
  conclusion: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "skincare-types",
    category: "Skin Health",
    date: "January 28, 2026",
    title: "How to choose the right skincare products for your skin type",
    featured: true,
    image: "/images/blog/featured.jpg",
    introduction: "Navigating the skincare aisle can feel overwhelming. With thousands of products claiming to transform your skin, the secret to success starts with one fundamental step: understanding your specific skin type. Using products incompatible with your skin can disrupt its natural barrier, leading to breakouts, irritation, or dryness.",
    sections: [
      {
        title: "1. Oily Skin: Lightweight Hydration",
        body: "Oily skin is characterized by overactive sebaceous glands that produce excess sebum, leading to shine, enlarged pores, and a higher propensity for breakouts. The biggest misconception is that oily skin doesn't need hydration. In fact, dehydration can trigger even more oil production. Look for lightweight, oil-free, non-comedogenic gel formulas. Key active ingredients to seek include Salicylic Acid (BHA) to clear pores, and Niacinamide to regulate oil levels."
      },
      {
        title: "2. Dry Skin: Nourishing Barriers",
        body: "Dry skin feels tight, flaky, and may appear dull or rough due to a lack of natural lipids. Your goal is to repair the moisture barrier and lock in hydration. Choose thick, creamy moisturizers and gentle, non-foaming cleansers. Look for rich humectants and emollients like Hyaluronic Acid, Glycerin, Ceramides, and Squalane to restore and protect your skin."
      },
      {
        title: "3. Combination Skin: Zone-Specific Care",
        body: "Combination skin typically features an oily T-zone (forehead, nose, and chin) alongside dry or normal cheeks. Managing this skin type requires a balanced approach. You can use zone-specific treatments—such as a lightweight gel on your T-zone and a richer cream on your cheeks—or choose intelligent, balancing formulas designed to hydrate without adding shine."
      },
      {
        title: "4. Sensitive Skin: Calm and Protect",
        body: "Sensitive skin is easily irritated, prone to redness, stinging, or burning, and reacts quickly to external factors. When choosing products, less is more. Avoid artificial fragrances, drying alcohols, and harsh physical scrubs. Seek out soothing, anti-inflammatory ingredients like Centella Asiatica (Cica), Colloidal Oatmeal, Aloe Vera, and Ceramides to rebuild skin tolerance."
      }
    ],
    conclusion: "Before buying a new product, do a patch test on your jawline for 24 hours to check for sensitivity. If you are struggling to balance your skin barrier, consulting a dermatologist like Dr. Shruthi will provide you with a customized prescription regimen.",
  },
  {
    id: "anti-aging-guide",
    category: "Acne Care",
    date: "January 28, 2026",
    title: "When to start using anti-aging products",
    featured: false,
    image: "/images/blog/blog-1.jpg",
    introduction: "In dermatology, prevention is infinitely easier than correction. One of the most frequent questions patients ask is: 'At what age should I start using anti-aging products?' While there is no single magical birthday, the optimal window to initiate a preventative skincare routine begins in your mid-20s.",
    sections: [
      {
        title: "The Collagen Clock: Mid-20s",
        body: "Starting around age 25, our body's natural collagen production begins to decrease by approximately 1% each year. Additionally, cellular turnover slows down, and natural antioxidant defense mechanisms become less efficient. This is the stage where microscopic changes begin, eventually showing up as fine lines, loss of elasticity, and subtle dullness years later."
      },
      {
        title: "Phase 1: Preventative Shielding (Ages 20-25)",
        body: "The absolute best anti-aging product in existence is a broad-spectrum sunscreen (SPF 50+). Up to 90% of visible skin aging is caused by UV exposure (photoaging). During your early 20s, focus on three daily steps: a gentle cleanser, a high-protection sunscreen, and a stable antioxidant serum like Vitamin C to neutralize environmental free radicals."
      },
      {
        title: "Phase 2: Active Stimulation (Ages 25-30)",
        body: "Your late 20s is the ideal time to introduce Retinoids or Retinol into your night routine. Retinoids are the gold standard of anti-aging, proven to stimulate collagen synthesis, increase epidermal thickness, and accelerate cell renewal. Start with a low concentration twice a week to allow your skin to acclimate without irritation."
      },
      {
        title: "Phase 3: Deep Support (Ages 40+)",
        body: "In your 40s and beyond, hormone levels shift, leading to thinner, drier skin. Elevate your regimen with Peptide complexes to signal collagen production, Growth Factors to support cellular repair, and rich Ceramides to maintain skin density and combat dryness."
      }
    ],
    conclusion: "Anti-aging is a long game built on consistency and sun protection. Start simple, build skin tolerance, and prioritize protective care before jumping into highly aggressive chemical treatments.",
  },
  {
    id: "stress-skin",
    category: "Skin Health",
    date: "January 28, 2026",
    title: "How stress affects your skin health",
    featured: false,
    image: "/images/blog/blog-2.jpg",
    introduction: "Have you ever noticed a stubborn breakout appearing right before a major presentation or exam? It's not a coincidence. Your skin and brain are intricately connected through a complex network of nerves, hormones, and chemical messengers. In dermatology, this relationship is studied under the field of psychodermatology.",
    sections: [
      {
        title: "The Cortisol Spike and Acne Breakouts",
        body: "When you experience stress, your body goes into a 'fight or flight' response, releasing a surge of stress hormones, primarily Cortisol. Cortisol signals your sebaceous glands to produce significantly more sebum (oil). This excess oil, combined with stress-induced inflammation, creates the perfect breeding ground for clogged pores and severe acne flare-ups."
      },
      {
        title: "An Impaired Skin Barrier",
        body: "Stress compromises the integrity of your skin barrier. It slows down the production of crucial lipids (like ceramides and fatty acids) that keep moisture in and irritants out. A weakened skin barrier leads to transepidermal water loss, resulting in dry, flaky, highly reactive skin that stings or burns easily."
      },
      {
        title: "Acceleration of Premature Aging",
        body: "Chronic stress promotes systemic inflammation. This process, often referred to as 'inflammaging', releases free radicals that actively break down collagen and elastin—the structural proteins that keep skin firm and youthful. Over time, high stress leads to the premature formation of fine lines and a loss of facial volume."
      },
      {
        title: "Flaring of Inflammatory Skin Conditions",
        body: "For individuals with underlying skin conditions like Eczema, Psoriasis, or Rosacea, stress is a notorious trigger. The neurological response to stress increases the body's inflammatory markers, causing these chronic skin conditions to flare up unexpectedly."
      }
    ],
    conclusion: "During stressful periods, scale back your skincare to the bare, gentle basics (cleanser, moisturizer, SPF) to avoid irritating a compromised barrier. Incorporating mindfulness, adequate sleep, and gentle treatments can help restore balance.",
  },
  {
    id: "chemical-peels-expectations",
    category: "Acne Care",
    date: "January 26, 2026",
    title: "Chemical peels: what to expect before and after",
    featured: false,
    image: "/images/blog/blog-3.jpg",
    introduction: "Chemical peels are highly effective clinical skin-resurfacing treatments that use controlled dermatological acids (such as glycolic, lactic, or salicylic acids) to deeply exfoliate the skin. By removing damaged outer layers, peels stimulate cellular regeneration to address acne, hyperpigmentation, uneven texture, and fine lines.",
    sections: [
      {
        title: "Pre-Peel Preparation (Before)",
        body: "To ensure an optimal response and avoid hyperpigmentation, prep your skin 3 to 5 days before your appointment. You MUST discontinue all strong active exfoliating acids, scrubs, and topical retinoids (such as Retinol or Tretinoin). Focus on heavy hydration and strict sun protection leading up to your session."
      },
      {
        title: "During the Peel Session",
        body: "During the application, it is completely normal to experience a warm, tingling, or moderate stinging sensation on the skin. Dr. Shruthi and our clinical staff use specialized cooling systems to keep you comfortable. The peeling solution is carefully timed and neutralized once the target depth is reached."
      },
      {
        title: "The Peeling Phase (After: Day 1 to 5)",
        body: "Immediately post-treatment, your skin may feel tight, dry, and appear slightly red (similar to a mild sunburn). Active flaking or peeling typically begins on Day 3 and peak by Day 5. The absolute golden rule of peels is: **NEVER pick, peel, scratch, or pull the shedding skin.** Doing so can cause permanent scarring or dark spots. Let the skin shed naturally."
      },
      {
        title: "The Reveal (Day 7+)",
        body: "By Day 7, the peeling process is generally complete. The old, damaged layers have shed to reveal fresh, incredibly smooth, bright, and even-toned skin with refined pores and a healthy glow."
      }
    ],
    conclusion: "After your peel, strict broad-spectrum SPF 50 application is mandatory, as your new skin will be temporary sensitive to sun exposure. Chemical peels are most effective in a curated series tailored to your concerns.",
  },
]