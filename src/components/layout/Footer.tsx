import Link from "next/link";
import { Share2, MessageCircle, CirclePlay, Phone, MapPin } from "lucide-react";

const NAV_COLUMNS = [
  {
    title: "ซื้อ-ขายรถ",
    links: [
      { label: "ค้นหารถมือสอง", href: "/search" },
      { label: "ลงขายรถ", href: "/seller/sellercenter" },
      { label: "รถทุกประเภท", href: "/search" },
      { label: "รถใหม่ป้ายแดง", href: "/search?type=new" },
    ],
  },
  {
    title: "บริการของเรา",
    links: [
      { label: "สินเชื่อรถมือสอง", href: "/service/loan" },
      { label: "ราคารถ / บลูบุ๊ค", href: "/service/bluebook" },
      { label: "ตรวจสภาพรถ", href: "/service/faq-landing" },
      { label: "ประกันภัยรถยนต์", href: "/service/faq-landing" },
    ],
  },
  {
    title: "เพิ่มเติม",
    links: [
      { label: "เกี่ยวกับเรา", href: "/service/about" },
      { label: "ข่าวสาร", href: "/service/news-campaign" },
      { label: "ศูนย์ช่วยเหลือ", href: "/service/faq-landing" },
      { label: "ติดต่อเรา", href: "/service/about" },
    ],
  },
];

const SOCIAL = [
  { label: "Facebook", icon: Share2, href: "#" },
  { label: "LINE", icon: MessageCircle, href: "#" },
  { label: "YouTube", icon: CirclePlay, href: "#" },
];

export default function Footer() {
  return (
    <footer>
      {/* ─── Orange main footer ──────────────────────── */}
      <div className="bg-primary-500 text-white">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand column */}
            <div>
              <p className="text-2xl font-extrabold tracking-tight mb-2">Cario</p>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                แพลตฟอร์มซื้อ-ขายรถมือสองที่น่าเชื่อถือ
                <br />
                คัดสรรคุณภาพ ราคาโปร่งใส
              </p>
              <div className="flex gap-3 mt-4">
                {SOCIAL.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {NAV_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-base mb-3">{col.title}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── White bottom strip ──────────────────────── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Cario. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/consent/privacy-policy" className="hover:text-gray-800 transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/consent/terms" className="hover:text-gray-800 transition-colors">
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
