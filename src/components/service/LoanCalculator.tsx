'use client'

import { useState, useCallback } from 'react'
import { Calculator, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoanCalculatorProps {
  carPrice?: number
  className?: string
}

const DOWN_PAYMENT_OPTIONS = [10, 15, 20, 25, 30]
const LOAN_TERM_OPTIONS = [12, 24, 36, 48, 60, 72, 84]

export function LoanCalculator({ carPrice = 500000, className }: LoanCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'monthly' | 'price'>('monthly')
  const [price, setPrice] = useState(carPrice)
  const [downPaymentPct, setDownPaymentPct] = useState(20)
  const [loanTermMonths, setLoanTermMonths] = useState(60)
  const [interestRate, setInterestRate] = useState(2.49)

  const downPaymentAmount = Math.round(price * (downPaymentPct / 100))
  const loanAmount = price - downPaymentAmount
  const monthlyRate = interestRate / 100 / 12
  const monthlyPayment =
    monthlyRate === 0
      ? Math.round(loanAmount / loanTermMonths)
      : Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
            (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
        )
  const totalPayment = monthlyPayment * loanTermMonths
  const totalInterest = totalPayment - loanAmount

  const formatBaht = useCallback(
    (val: number) => `฿${val.toLocaleString('th-TH')}`,
    []
  )

  return (
    <div className={cn('bg-white rounded-2xl shadow-md overflow-hidden', className)}>
      {/* Header */}
      <div className="bg-navy-800 px-6 py-5">
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold">คำนวณสินเชื่อรถยนต์</h2>
            <p className="text-xs text-white/60">ประมาณการเท่านั้น ไม่ใช่ราคาจริง</p>
          </div>
        </div>
      </div>

      {/* Tab toggle */}
      <div className="flex bg-gray-100 mx-5 mt-5 rounded-full p-1">
        <button
          type="button"
          onClick={() => setActiveTab('monthly')}
          className={cn(
            'flex-1 py-2 rounded-full text-sm font-medium transition-all',
            activeTab === 'monthly'
              ? 'bg-primary-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          )}
        >
          ผ่อนต่อเดือน
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('price')}
          className={cn(
            'flex-1 py-2 rounded-full text-sm font-medium transition-all',
            activeTab === 'price'
              ? 'bg-primary-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          )}
        >
          มูลค่ารถ
        </button>
      </div>

      <div className="px-5 pb-5 pt-4 space-y-4">
        {/* Car price input */}
        <div>
          <label className="text-sm font-semibold text-navy-800 mb-1.5 block">
            ราคารถยนต์ (บาท)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
              ฿
            </span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-11 border border-gray-200 rounded-xl pl-7 pr-4 text-sm text-navy-800 font-medium focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>

        {/* Down payment */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-navy-800">
              เงินดาวน์
            </label>
            <span className="text-sm font-bold text-primary-500">
              {downPaymentPct}% — {formatBaht(downPaymentAmount)}
            </span>
          </div>
          {/* Down payment pills */}
          <div className="flex gap-2 flex-wrap">
            {DOWN_PAYMENT_OPTIONS.map((pct) => (
              <button
                key={pct}
                type="button"
                onClick={() => setDownPaymentPct(pct)}
                className={cn(
                  'px-3 py-1.5 rounded-full border text-sm font-medium transition-all',
                  downPaymentPct === pct
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : 'border-gray-200 text-gray-600 hover:border-primary-500 hover:text-primary-500'
                )}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        {/* Loan term */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-navy-800">
              จำนวนงวด
            </label>
            <span className="text-sm font-bold text-primary-500">
              {loanTermMonths} เดือน
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {LOAN_TERM_OPTIONS.map((months) => (
              <button
                key={months}
                type="button"
                onClick={() => setLoanTermMonths(months)}
                className={cn(
                  'px-3 py-1.5 rounded-full border text-sm font-medium transition-all',
                  loanTermMonths === months
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : 'border-gray-200 text-gray-600 hover:border-primary-500 hover:text-primary-500'
                )}
              >
                {months}
              </button>
            ))}
          </div>
        </div>

        {/* Interest rate */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-semibold text-navy-800">
              อัตราดอกเบี้ย (ต่อปี)
            </label>
            <span className="text-sm font-bold text-primary-500">
              {interestRate}%
            </span>
          </div>
          <div className="relative">
            <select
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-11 border border-gray-200 rounded-xl px-4 pr-10 text-sm text-navy-800 font-medium focus:outline-none focus:border-primary-500 appearance-none bg-white"
            >
              {[1.49, 1.99, 2.49, 2.99, 3.49, 3.99, 4.49, 4.99].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}% ต่อปี
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Result panel */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3 mt-2">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">ผ่อนต่อเดือนประมาณ</p>
            <p className="text-3xl font-bold text-primary-500">
              {formatBaht(monthlyPayment)}
            </p>
            <p className="text-xs text-gray-500">ต่อเดือน</p>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500 text-xs">ยอดกู้สินเชื่อ</p>
              <p className="font-bold text-navy-800">{formatBaht(loanAmount)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">ดอกเบี้ยรวม</p>
              <p className="font-bold text-navy-800">{formatBaht(totalInterest)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">เงินดาวน์</p>
              <p className="font-bold text-navy-800">{formatBaht(downPaymentAmount)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">ชำระรวมทั้งหมด</p>
              <p className="font-bold text-navy-800">{formatBaht(totalPayment)}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-2xs text-gray-400 text-center leading-relaxed">
          *ผลการคำนวณเป็นเพียงการประมาณการเบื้องต้น
          <br />
          อัตราดอกเบี้ยและเงื่อนไขขึ้นอยู่กับสถาบันการเงิน
        </p>
      </div>
    </div>
  )
}
