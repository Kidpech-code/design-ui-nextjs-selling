// Minimal navbar — hamburger | logo | right: outlined CTA pill + search icon
// Navigation lives in the page sidebar, NOT in the navbar header (roddonjai structural pattern)
"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ─── Slim top bar ─────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-200"
        style={{ height: "var(--navbar-height, 60px)" }}
      >
        <div className="h-full flex items-center justify-between px-4 md:px-6">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Open navigation"
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} className="text-gray-700" />
            </button>
            <Link
              href="/"
              className="font-extrabold text-[20px] text-[#0d1b2a] tracking-tight select-none"
            >
              Marka
            </Link>
          </div>

          {/* Right: CTA pill + search circle */}
          <div className="flex items-center gap-2">
            <Link
              href="/blueprint-hero"
              className="border border-[#e85d04] text-[#e85d04] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#e85d04] hover:text-white transition-colors"
            >
              List Item
            </Link>
            <Link
              href="/blueprint-search"
              aria-label="Search"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Search size={15} className="text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Side drawer (navigation) ──────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/40"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-72 bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-extrabold text-[#0d1b2a] text-lg tracking-tight">
                Marka
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer nav links */}
            <nav className="flex-1 px-3 py-3 space-y-0.5 text-sm text-gray-700">
              {[
                { label: "Browse Items", href: "/blueprint-grid" },
                { label: "Search Results", href: "/blueprint-search" },
                { label: "Item Detail", href: "/blueprint-detail" },
                { label: "Service Tool", href: "/blueprint-hero" },
                { label: "News & Campaigns", href: "/blueprint-feed" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-lg hover:bg-gray-50 hover:text-[#e85d04] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Drawer bottom CTA */}
            <div className="px-5 pb-6 pt-3 border-t border-gray-100">
              <Link
                href="/blueprint-hero"
                onClick={() => setDrawerOpen(false)}
                className="block text-center bg-[#e85d04] hover:bg-[#cf4f02] text-white font-semibold py-3 rounded-full transition-colors text-sm"
              >
                List Your Item — Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
