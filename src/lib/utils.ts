import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("th-TH").format(price);
}

export function formatMileage(km: number): string {
  return new Intl.NumberFormat("th-TH").format(km) + " กม.";
}
