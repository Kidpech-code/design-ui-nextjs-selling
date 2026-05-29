// Blueprint Feed — roddonjai /service/news-campaign pattern:
// Breadcrumb → full-width hero banner (image + text overlay) →
// Section heading + "See All" link → 3-col campaign card grid →
// Second section with guides/articles grid
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// ── Campaign cards data ─────────────────────────────────
const PROMO_CARDS = [
  {
    id: 1,
    title: "Year-End Clearance — Up to 30% Off Selected Items",
    excerpt: "Limited time offers on top-rated listings across all major categories. Don't miss out.",
    tag: "Promotion",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  },
  {
    id: 2,
    title: "New Arrivals: Spring 2025 Collection Now Listed",
    excerpt: "Fresh listings added daily. Browse the newest items from verified sellers nationwide.",
    tag: "New Arrivals",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    id: 3,
    title: "Special Financing: 0% Interest for 12 Months",
    excerpt: "Qualified buyers can now enjoy zero-interest payment plans through our partner network.",
    tag: "Finance Deal",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
];

const GUIDE_CARDS = [
  {
    id: 4,
    title: "How to Evaluate an Item Before Buying",
    excerpt: "A step-by-step checklist to ensure you make the right purchase decision every time.",
    tag: "Guide",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    id: 5,
    title: "Top 10 Questions to Ask a Seller",
    excerpt: "Know exactly what to ask before committing to any listing. Protect your investment.",
    tag: "Tips",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: 6,
    title: "Understanding Market Pricing in 2025",
    excerpt: "Key trends and data-backed insights that affect listing prices across all categories.",
    tag: "Analysis",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

// ── Reusable campaign card ──────────────────────────────
function CampaignCard({
  title,
  excerpt,
  tag,
  date,
  image,
}: {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  image: string;
}) {
  return (
    <Link href="/blueprint-detail" className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Tag badge */}
        <span className="absolute top-3 left-3 bg-[#008fa6] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#0a1820] text-sm leading-snug mb-2 group-hover:text-[#008fa6] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-2 mb-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar size={11} />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}

// ── Section heading row ─────────────────────────────────
function SectionRow({ heading, href }: { heading: string; href: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-extrabold text-[#0a1820]">
        <span className="border-l-4 border-[#008fa6] pl-3">{heading}</span>
      </h2>
      <Link href={href} className="flex items-center gap-1 text-sm text-[#008fa6] font-semibold hover:gap-2 transition-all">
        See All <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function BlueprintFeedPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]" style={{ paddingTop: "var(--navbar-height, 60px)" }}>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 space-y-8">

        {/* ── Breadcrumb ──────────────────────────────── */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link href="/blueprint-grid" className="flex items-center gap-1 hover:text-[#008fa6] transition-colors">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-[#008fa6] font-medium">Promotions & News</span>
        </nav>

        {/* ── Full-width hero banner ───────────────────── */}
        <div className="relative w-full aspect-[16/6] min-h-[200px] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80"
            alt="Promotions hero banner"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Text overlay (left-aligned) */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
            <span className="inline-block bg-[#008fa6] text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-3">
              Latest Campaigns
            </span>
            <h1 className="text-white font-extrabold text-2xl md:text-4xl leading-tight max-w-lg drop-shadow-md mb-3">
              Exclusive Promotions
              <br />
              <span className="text-[#ffa04d]">for Buyers & Sellers</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xs leading-relaxed mb-5">
              Stay updated with the latest deals, campaigns, and market insights.
            </p>
            <Link
              href="#promotions"
              className="inline-flex self-start items-center gap-2 bg-[#008fa6] hover:bg-[#007a8f] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Browse Promotions <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Section 1: Promotions ────────────────────── */}
        <section id="promotions" className="space-y-4">
          <SectionRow heading="Promotions for Buyers" href="/blueprint-feed" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROMO_CARDS.map((card) => (
              <CampaignCard key={card.id} {...card} />
            ))}
          </div>
        </section>

        {/* ── Section 2: Guides & Articles ─────────────── */}
        <section className="space-y-4">
          <SectionRow heading="Guides & Articles" href="/blueprint-feed" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GUIDE_CARDS.map((card) => (
              <CampaignCard key={card.id} {...card} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
