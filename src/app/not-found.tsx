import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Illustration */}
        <div className="relative w-full max-w-sm mb-8">
          {/* SVG road illustration */}
          <svg
            viewBox="0 0 400 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden="true"
          >
            {/* Sky background */}
            <rect width="400" height="260" fill="#F5F5F5" rx="16" />

            {/* Clouds */}
            <ellipse cx="60" cy="50" rx="40" ry="20" fill="white" />
            <ellipse cx="85" cy="42" rx="30" ry="22" fill="white" />
            <ellipse cx="310" cy="65" rx="35" ry="18" fill="white" />
            <ellipse cx="340" cy="55" rx="28" ry="20" fill="white" />
            <ellipse cx="140" cy="30" rx="25" ry="15" fill="white" />

            {/* Road */}
            <path
              d="M 20 240 Q 100 180 180 160 Q 260 140 310 100 L 380 60"
              stroke="#E0E0E0"
              strokeWidth="32"
              fill="none"
              strokeLinecap="round"
            />
            {/* Road center dashes */}
            <path
              d="M 20 240 Q 100 180 180 160 Q 260 140 310 100 L 380 60"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="16 12"
              fill="none"
              strokeLinecap="round"
            />

            {/* Car body (navy) */}
            <g transform="translate(80, 185) rotate(-15)">
              {/* Car silhouette */}
              <rect x="0" y="14" width="64" height="26" rx="4" fill="#0a1820" />
              <path d="M 10 14 L 16 2 L 48 2 L 54 14 Z" fill="#1A2E45" />
              {/* Windows */}
              <rect x="17" y="4" width="12" height="9" rx="2" fill="#7BAFD4" opacity="0.7" />
              <rect x="32" y="4" width="14" height="9" rx="2" fill="#7BAFD4" opacity="0.7" />
              {/* Wheels */}
              <circle cx="14" cy="40" r="8" fill="#333" />
              <circle cx="14" cy="40" r="4" fill="#666" />
              <circle cx="50" cy="40" r="8" fill="#333" />
              <circle cx="50" cy="40" r="4" fill="#666" />
              {/* Headlights */}
              <rect x="58" y="20" width="6" height="4" rx="2" fill="#FFD700" opacity="0.8" />
            </g>

            {/* 404 map pin */}
            <g transform="translate(210, 90)">
              {/* Pin body */}
              <path
                d="M 20 0 C 9 0 0 9 0 20 C 0 35 20 56 20 56 C 20 56 40 35 40 20 C 40 9 31 0 20 0 Z"
                fill="#008fa6"
              />
              {/* Pin hole */}
              <circle cx="20" cy="20" r="10" fill="white" />
              {/* 404 text */}
              <text
                x="20"
                y="25"
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="#008fa6"
                fontFamily="system-ui, sans-serif"
              >
                404
              </text>
            </g>

            {/* Destination flag */}
            <g transform="translate(335, 45)">
              <line x1="4" y1="0" x2="4" y2="28" stroke="#0a1820" strokeWidth="2" />
              <path d="M 4 0 L 22 6 L 4 12 Z" fill="#008fa6" />
            </g>
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-navy-800 text-center mb-3">
          ไม่พบหน้าเว็บไซต์ที่ต้องการ
        </h1>
        <p className="text-gray-500 text-center text-sm max-w-xs leading-relaxed mb-8">
          ให้เราช่วยแนะนำรถที่คุณอาจสนใจเพิ่มเติมให้คุณด้านล่างนี้
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-primary-500 text-white font-semibold text-sm hover:bg-primary-400 transition-colors text-center"
          >
            กลับหน้าหลัก
          </Link>
          <Link
            href="/search"
            className="px-6 py-3 rounded-full border-2 border-navy-800 text-navy-800 font-semibold text-sm hover:bg-navy-800 hover:text-white transition-all text-center"
          >
            ค้นหารถยนต์
          </Link>
        </div>
      </main>
    </div>
  )
}
