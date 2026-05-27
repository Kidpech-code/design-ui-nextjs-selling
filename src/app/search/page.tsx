import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Sidebar from '@/components/layout/Sidebar'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FilterChipBar } from '@/components/ui/FilterChip'
import ProductCard, { Car } from '@/components/listing/ProductCard'
import DarkProductCard from '@/components/listing/DarkProductCard'
import { LayoutGrid, List, ChevronDown, SlidersHorizontal } from 'lucide-react'

/* ── Mock data ─────────────────────────────────── */
const MOCK_CARS: Car[] = [
  {
    id: 's001',
    title: 'Toyota Corolla Altis 2021',
    brand: 'Toyota',
    model: 'Corolla Altis 1.8 V CVT',
    year: 2021,
    price: 649000,
    mileage: 38500,
    fuel: 'เบนซิน',
    province: 'กรุงเทพฯ',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    isFeatured: true,
    monthlyPayment: 9200,
    hasWarranty: true,
  },
  {
    id: 's002',
    title: 'Honda Civic 2022',
    brand: 'Honda',
    model: 'Civic 1.5 Turbo RS CVT',
    year: 2022,
    price: 879000,
    mileage: 15200,
    fuel: 'เบนซิน',
    province: 'นนทบุรี',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
    monthlyPayment: 12500,
  },
  {
    id: 's003',
    title: 'Mazda CX-5 2020',
    brand: 'Mazda',
    model: 'CX-5 2.0 SP Skyactiv-G 6AT',
    year: 2020,
    price: 779000,
    mileage: 52800,
    fuel: 'เบนซิน',
    province: 'เชียงใหม่',
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
    hasWarranty: true,
    monthlyPayment: 11000,
  },
  {
    id: 's004',
    title: 'Isuzu D-Max 2021',
    brand: 'Isuzu',
    model: 'D-Max Hi-Lander 3.0 Z 4WD AT',
    year: 2021,
    price: 549000,
    mileage: 62000,
    fuel: 'ดีเซล',
    province: 'ขอนแก่น',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    monthlyPayment: 7800,
  },
  {
    id: 's005',
    title: 'Toyota Fortuner 2019',
    brand: 'Toyota',
    model: 'Fortuner 2.4 V 4WD AT',
    year: 2019,
    price: 1150000,
    mileage: 88200,
    fuel: 'ดีเซล',
    province: 'กรุงเทพฯ',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
    isFeatured: true,
    monthlyPayment: 16300,
  },
  {
    id: 's006',
    title: 'Honda Jazz 2020',
    brand: 'Honda',
    model: 'Jazz 1.5 RS i-VTEC CVT',
    year: 2020,
    price: 389000,
    mileage: 42100,
    fuel: 'เบนซิน',
    province: 'สมุทรปราการ',
    imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    monthlyPayment: 5500,
  },
  {
    id: 's007',
    title: 'BMW 3 Series 2020',
    brand: 'BMW',
    model: '320d M Sport',
    year: 2020,
    price: 2290000,
    mileage: 28000,
    fuel: 'ดีเซล',
    province: 'กรุงเทพฯ',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    isFeatured: true,
    hasWarranty: true,
    monthlyPayment: 32500,
  },
  {
    id: 's008',
    title: 'Mitsubishi Xpander 2022',
    brand: 'Mitsubishi',
    model: 'Xpander 1.5 GT A/T',
    year: 2022,
    price: 689000,
    mileage: 18500,
    fuel: 'เบนซิน',
    province: 'ภูเก็ต',
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80',
    isNew: true,
    monthlyPayment: 9800,
  },
  {
    id: 's009',
    title: 'Nissan Navara 2021',
    brand: 'Nissan',
    model: 'Navara King Cab Calibre EL 6MT',
    year: 2021,
    price: 519000,
    mileage: 55000,
    fuel: 'ดีเซล',
    province: 'นครราชสีมา',
    imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&q=80',
    monthlyPayment: 7300,
  },
]

const SORT_OPTIONS = [
  { value: 'recommended', label: 'แนะนำโดยระบบ' },
  { value: 'price_asc', label: 'ราคา น้อย → มาก' },
  { value: 'price_desc', label: 'ราคา มาก → น้อย' },
  { value: 'newest', label: 'ใหม่ล่าสุด' },
  { value: 'mileage_asc', label: 'ไมล์ น้อยที่สุด' },
]

const FILTER_CHIPS = [
  { value: 'ช่วงราคา 0 - 2,000,000' },
  { value: 'กรุงเทพฯ' },
]

/* ── Page Component ─────────────────────────────── */
export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'ผลการค้นหารถยนต์', href: '/search' }]}
      />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:block w-[280px] flex-shrink-0 bg-white border-r border-gray-100">
          <div className="sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 md:px-6 py-4">
          {/* Toolbar row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <div className="flex-1">
              {/* Filter chips */}
              <FilterChipBarWrapper chips={FILTER_CHIPS} />
              <p className="text-sm text-gray-500 mt-1">
                พบ{' '}
                <span className="font-semibold text-navy-800">
                  {MOCK_CARS.length.toLocaleString('th-TH')}
                </span>{' '}
                คัน
              </p>
            </div>

            {/* Sort + view toggle */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <SortDropdown />
              <ViewToggle />
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOCK_CARS.map((car, index) => {
              // Alternate between light and dark cards for visual variety
              const useDark = index % 3 === 2
              return useDark ? (
                <DarkProductCard key={car.id} car={car} />
              ) : (
                <ProductCard key={car.id} car={car} />
              )
            })}
          </div>

          {/* Load more */}
          <div className="text-center mt-10 pb-6">
            <button
              type="button"
              className="px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-semibold text-sm hover:bg-primary-500 hover:text-white transition-all"
            >
              โหลดเพิ่มเติม
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

/* ── Sub components (server-safe, no interactivity) ── */
function FilterChipBarWrapper({
  chips,
}: {
  chips: { value: string }[]
}) {
  if (chips.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-2 py-1">
      {chips.map((chip, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700"
        >
          <span className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[10px]">
            ×
          </span>
          {chip.value}
        </span>
      ))}
      <span className="text-xs text-primary-500 underline cursor-pointer ml-1">
        ลบทั้งหมด
      </span>
    </div>
  )
}

function SortDropdown() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 cursor-pointer hover:border-primary-500 transition-colors">
      <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
      <span className="hidden sm:inline text-xs text-gray-500">เรียงตาม</span>
      <span className="text-xs font-medium text-navy-800">แนะนำโดยระบบ</span>
      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
    </div>
  )
}

function ViewToggle() {
  return (
    <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white">
      <button
        type="button"
        aria-label="มุมมองกริด"
        className="p-2 text-primary-500 bg-primary-50"
      >
        <LayoutGrid className="w-4 h-4" />
      </button>
      <button
        type="button"
        aria-label="มุมมองรายการ"
        className="p-2 text-gray-400 hover:text-gray-600"
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  )
}
