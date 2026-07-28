export type Practice = {
  id: string
  label: string
  tagline: string
  description: string
  capabilities: string[]
  proof: string
  cta: string
  href: string
}

export const practices: Practice[] = [
  {
    id: "commerce",
    label: "Commerce",
    tagline:
      "Commerce built for how people and AI discover, evaluate, and buy.",
    description:
      "We help organizations improve complex commerce ecosystems across strategy, platforms, catalogs, integrations, customer experience, and AI discoverability. From enterprise roadmaps to hands-on implementation, the goal is simpler operations, stronger experiences, and commerce that is ready for what comes next.",
    capabilities: [
      "Commerce Strategy",
      "Adobe Commerce",
      "Platform Modernization",
      "Catalog Optimization",
      "Systems Integration",
      "AI Discoverability",
    ],
    proof:
      "Enterprise commerce leadership across global brands and complex B2B and D2C ecosystems.",
    cta: "Explore Commerce",
    href: "/commerce",
  },
  {
    id: "content",
    label: "Cinematic Content",
    tagline: "Cinematic storytelling for products, brands, and ideas.",
    description:
      "We create premium visual content for commerce and marketing using AI-native production workflows. From product catalogs and email campaigns to social content, advertising, and brand films, every piece is designed to make the subject clearer, more compelling, and more memorable.",
    capabilities: [
      "Product Films",
      "Catalog Content",
      "Advertising",
      "Social Content",
      "Email Creative",
      "Brand Storytelling",
    ],
    proof:
      "Creative direction and AI-native production from concept through final edit.",
    cta: "Explore Cinematic Content",
    href: "/cinematic-content",
  },
  {
    id: "education",
    label: "Education",
    tagline: "Helping leaders and teams work confidently with AI.",
    description:
      "We turn AI from a collection of tools into a practical organizational capability. Through executive sessions, workshops, keynotes, and the 4D Framework, we help people understand what to delegate, how to describe the work, how to evaluate the output, and how to use AI responsibly.",
    capabilities: [
      "Executive Workshops",
      "AI Fluency",
      "4D Framework",
      "Keynotes",
      "Team Enablement",
      "Leadership Sessions",
    ],
    proof:
      "Practical education grounded in enterprise transformation and real-world experimentation.",
    cta: "Explore Education",
    href: "/education",
  },
]
