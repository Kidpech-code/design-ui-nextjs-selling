import { cn } from "@/lib/utils";

type BadgeVariant =
  | "primary"
  | "navy"
  | "indigo"
  | "success"
  | "warning"
  | "error"
  | "gray"
  | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary-100 text-primary-600 border border-primary-200",
  navy: "bg-navy-800 text-white",
  indigo: "bg-indigo-500 text-white",
  success: "bg-green-100 text-green-700 border border-green-200",
  warning: "bg-amber-100 text-amber-700 border border-amber-200",
  error: "bg-red-100 text-red-700 border border-red-200",
  gray: "bg-gray-100 text-gray-600 border border-gray-200",
  outline: "bg-transparent border border-gray-300 text-gray-600",
};

export default function Badge({
  variant = "gray",
  size = "sm",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
