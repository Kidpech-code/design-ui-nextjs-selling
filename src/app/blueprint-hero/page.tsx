// Blueprint Service (blueprint-hero route) — roddonjai /service/bluebook pattern:
// Breadcrumb → Page header (title left + trust badges right) →
// Full-width rounded hero image → Overlapping white search/lookup form card →
// Content sections below (How It Works steps, features)
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Shield, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// ── Trust/Certification badges ─────────────────────────
const BADGES = [
  { icon: Shield,      label: "Verified",    sub: "by Authority X" },
  { icon: Award,       label: "Certified",   sub: "Standard Y"     },
  { icon: CheckCircle2,label: "Accredited",  sub: "Agency Z"       },
];

// ── How it works steps ─────────────────────────────────
const STEPS = [
  { num: "01", title: "Select Category",    desc: "Choose the item type you want to look up from the available categories." },
  { num: "02", title: "Enter Details",      desc: "Fill in the sub-category and specific type to narrow your lookup." },
  { num: "03", title: "Get Instant Result", desc: "View the official reference value instantly, updated from trusted sources." },
];

// ── Features ───────────────────────────────────────────
const FEATURES = [
  { title: "Real-Time Data",      desc: "Values updated daily from official reference databases." },
  { title: "100,000+ Records",    desc: "Comprehensive coverage across all major categories." },
  { title: "Trusted & Certified", desc: "Endorsed by leading industry authorities." },
  { title: "Free to Use",         desc: "No registration required for standard lookups." },
];

export default function BlueprintServicePage() {
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
          <span className="text-[#008fa6] font-medium">Reference Lookup Tool</span>
        </nav>

        {/* ── Page header: title + trust badges ────────── */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1820] leading-tight">
              Official Reference
              <br />
              <span className="text-[#008fa6]">Lookup Tool</span>
            </h1>
            <p className="mt-2 text-gray-500 text-sm max-w-md">
              Check official reference values for any item category instantly. Trusted data from certified sources.
            </p>
          </div>

          {/* Trust badge row */}
          <div className="flex items-center gap-3 flex-wrap">
            {BADGES.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                <Icon size={24} className="text-[#008fa6] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#0a1820] leading-none">{label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hero image + overlapping form card ──────── */}
        <div className="flex flex-col items-stretch">
          {/* Hero image */}
          <div className="relative w-full aspect-[16/6] rounded-3xl overflow-hidden bg-gray-300">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80"
              alt="Service hero"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAHAAoBAREA/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBBESBSExUf/aAAgBAQAAPwCR07lbMbjivVnHlFcbAEUn3R7kn0a6k5WUktGOPT1oPuekAXGP/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 md:left-12">
              <p className="text-white/70 text-sm mb-1">Trusted by 200,000+ users</p>
              <p className="text-white font-extrabold text-xl md:text-2xl">
                Get accurate reference values in seconds
              </p>
            </div>
          </div>

          {/* ── Overlapping search form card ─────────── */}
          <div className="md:w-[640px] mx-4 md:mx-auto mt-4 md:-mt-14 md:z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6">
            <p className="text-sm font-bold text-[#0a1820] mb-4 text-center">
              Enter details to look up reference value
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#008fa6]/30 focus:border-[#008fa6] appearance-none cursor-pointer">
                <option>Category A</option>
                <option>Category B</option>
                <option>Category C</option>
              </select>
              <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#008fa6]/30 focus:border-[#008fa6] appearance-none cursor-pointer">
                <option>Sub-category</option>
                <option>Sub-cat A1</option>
                <option>Sub-cat B1</option>
              </select>
              <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#008fa6]/30 focus:border-[#008fa6] appearance-none cursor-pointer">
                <option>Type / Variant</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
            <button className="w-full bg-[#008fa6] hover:bg-[#007a8f] text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
              <span>Look Up Reference Value</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Gap below overlapping card ─── */}
        <div className="h-4" />

        {/* ── How it works ────────────────────────────── */}
        <section className="pt-4">
          <h2 className="text-xl font-extrabold text-[#0a1820] mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <span className="inline-block text-3xl font-extrabold text-[#008fa6]/20 mb-3 leading-none">
                  {num}
                </span>
                <h3 className="font-bold text-[#0a1820] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Feature highlights ────────────────────────── */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-[#0a1820] mb-6">Why Use This Tool?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map(({ title, desc }) => (
              <div key={title} className="space-y-2">
                <CheckCircle2 size={22} className="text-[#008fa6]" />
                <p className="font-bold text-sm text-[#0a1820]">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
