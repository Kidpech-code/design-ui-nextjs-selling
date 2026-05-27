import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      pill = false,
      loading,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.98]",
      secondary: "bg-primary-100 text-primary-700 hover:bg-primary-200",
      outline:
        "border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      navy: "bg-navy-800 text-white hover:bg-navy-700",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3 gap-2",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          pill ? "rounded-full" : "rounded-xl",
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
