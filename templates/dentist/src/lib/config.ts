import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Haraz Dental Group",
    tagline: "Smile Brighter, Live Healthier",
    phone: "(559) 554-9791",
    phoneHref: "tel:+15595549791",
    email: "info@harazdentalgroup.com",
    address: "7035 N West Ave, Fresno, CA 93711",
    city: "Fresno",
    serviceAreas: ["Fresno, CA"],
    license: "CA Dental License #XXXXX",
    since: "2005",
    google_rating: "4.8",
    review_count: "2400+",
    emergency: true,
    theme: "ember",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Cosmetic Dentistry", desc: "Enhance your smile with veneers, bonding, and gum recontouring for a confident new you.", urgent: false },
    { icon: "shield-check", title: "Restorative Dentistry", desc: "Restore function and aesthetics with crowns, fillings, implants, and root canal therapy.", urgent: false },
    { icon: "thermometer", title: "Gum Disease Treatments", desc: "Combat gum disease with advanced treatments like gingivoplasty and periodontal maintenance.", urgent: false },
    { icon: "heart", title: "Pediatric Dentistry", desc: "Gentle dental care for children, including sealants, fluoride, and pulp therapy.", urgent: false },
    { icon: "zap", title: "Emergency Dental Care", desc: "Immediate relief for toothaches, extractions, and other urgent dental needs.", urgent: true },
    { icon: "wrench", title: "Wisdom Teeth Removal", desc: "Expert and comfortable removal of problematic wisdom teeth.", urgent: false }
  ],

  testimonials: [
    { name: "Yvette Aguilar", location: "Fresno, CA", stars: 5, text: "Britney, the assistant, did a good job answering my questions. The doctor made sure to give me more numbing injections when I felt pain during the extraction. I truly appreciate the care and attention during my visit for a tooth extraction." },
    { name: "Monique Garcia", location: "Fresno, CA", stars: 5, text: "My experience was Awesome!! I am terrified of the dentist. Arriving receptionist and assistants where kind, compassionate, and caring. Lani did the exam very kind. Highly recommend Haraz Dental Group for their amazing team." },
    { name: "Viviana Salmeron", location: "Fresno, CA", stars: 5, text: "I came to get my two top wisdom teeth removed. I had a really good experience. The procedure itself was really fast. Brittany was very sweet and talked me through the whole thing, making me feel comfortable and informed." }
  ],

  trustBadges: [
    "Painless Treatments", "Swift Same-Day Solutions", "Flexible Payment Options", "Emergency Dental Care", "Top-Rated Fresno Clinic", "Commitment to Excellence"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2400, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 18, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your dental needs with quick scheduling and efficient service." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, transparent costs with no hidden fees, ensuring you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our dentists are highly trained and certified, delivering expert care." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your comfort and satisfaction are our top priorities for every treatment." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI assistant is always ready to help with appointments and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "State-of-the-art technology for precise diagnostics and effective treatments." }
  ],

  formServiceOptions: ["Gum Disease Treatments", "Lip Repositioning Surgery", "Gingivoplasty", "Alloderm dental", "Periodontal Maintenance", "Osseous Surgery", "Tori removal", "Pediatric Dentistry", "Sealants", "Fluoride Treatments", "Athletic Mouthguards", "Pulp Therapy", "Restorative Dentistry", "Crowns", "Inlays and Onlays", "Implants", "Filling", "Root Canal Therapy", "Bone Grafting", "Missing Teeth Replacement", "Full Arch Restoration", "TeethXpress", "Cosmetic Dentistry", "Veneers", "Bonding", "Impacted Canines", "Gum Recontouring", "Laser Periodontal Therapy", "Emergency Dental Care", "Tooth Extractions", "TMJ/TMD Therapy", "Dental X-rays and Imaging", "CBCT Scan", "3D Image", "CEPH X-Ray", "Oral Cancer Screening", "Sedation Dentistry", "Wisdom Teeth Removal"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!