// Blueprint Index — lists all 5 layout patterns based on roddonjai.com structural references
import Link from "next/link";

const PATTERNS = [
  {
    id: "blueprint-grid",
    name: "Blueprint Grid",
    source: "Homepage",
    concept: "Minimal navbar · Sidebar category icon grid + accordion filters · Pill filter tabs · Static promo banner · Card grid",
    tags: ["Marketplace", "Homepage", "Listing"],
    color: "from-orange-500 to-red-500",
    href: "/blueprint-grid",
    letter: "G",
  },
  {
    id: "blueprint-search",
    name: "Blueprint Search",
    source: "Search Results",
    concept: "Breadcrumb · Sidebar accordion filters · Active filter chips · Sort dropdown · Result card grid",
    tags: ["Search", "Filter", "Results"],
    color: "from-blue-500 to-indigo-600",
    href: "/blueprint-search",
    letter: "S",
  },
  {
    id: "blueprint-detail",
    name: "Blueprint Detail",
    source: "Item Detail",
    concept: "Breadcrumb · Image gallery (counter / prev-next / photo tabs) · Info panel (price · specs · rating · CTA)",
    tags: ["Detail", "Product", "Gallery"],
    color: "from-teal-500 to-cyan-600",
    href: "/blueprint-detail",
    letter: "D",
  },
  {
    id: "blueprint-hero",
    name: "Blueprint Service",
    source: "Service Tool",
    concept: "Breadcrumb · Page header + trust badges · Full-width hero image · Overlapping lookup form card · How-it-works steps",
    tags: ["Service", "Tool", "Lookup"],
    color: "from-violet-500 to-purple-600",
    href: "/blueprint-hero",
    letter: "T",
  },
  {
    id: "blueprint-feed",
    name: "Blueprint Feed",
    source: "News & Campaigns",
    concept: "Breadcrumb · Full-width hero banner · Section heading + See All link · Campaign card grid · Guides grid",
    tags: ["Content", "News", "Campaign"],
    color: "from-emerald-500 to-green-600",
    href: "/blueprint-feed",
    letter: "F",
  },
];

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col">
      {/* ── Header ─────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <span className="inline-block bg-[#fff5f0] text-[#e85d04] text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            UI Design Blueprint Library
          </span>
          <h1 className="text-3xl font-extrabold text-[#0d1b2a]">Blueprint Design Patterns</h1>
          <p className="text-gray-500 mt-2 text-sm">
            5 structural layout patterns — based on real marketplace page structures
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Generic placeholder content · No project-specific data
          </p>
        </div>
      </header>

      {/* ── Pattern cards ───────────────────────────── */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PATTERNS.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {/* Gradient visual */}
              <div
                className={`h-28 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Large muted letter */}
                <span className="text-white/20 text-8xl font-black select-none leading-none">
                  {p.letter}
                </span>
                {/* Source badge */}
                <span className="absolute top-3 right-3 bg-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {p.source}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h2 className="font-extrabold text-[#0d1b2a] text-base">{p.name}</h2>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-3">
                  {p.concept}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-semibold text-[#e85d04] mt-4 group-hover:underline underline-offset-2">
                  View blueprint →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
          Design Blueprint Library · 5 structural layout patterns · Generic content only
        </div>
      </footer>
    </div>
  );
}
