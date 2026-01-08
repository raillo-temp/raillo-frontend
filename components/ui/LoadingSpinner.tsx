import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

const borderWidth = {
  sm: 2,
  md: 2,
  lg: 3,
};

export function LoadingSpinner({
  className,
  size = "md",
  color,
}: LoadingSpinnerProps) {
  const spinnerColor = color || "currentColor";
  const borderSize = borderWidth[size];
  
  // 30% 뚫린 원을 만들기 위해 conic-gradient 사용
  // 360도의 30% = 108도, 따라서 252도(70%)는 색상, 108도(30%)는 투명
  return (
    <div
      className={cn(
        "animate-spin rounded-full",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      style={{
        background: `conic-gradient(from 0deg, ${spinnerColor} 0deg, ${spinnerColor} 252deg, transparent 252deg, transparent 360deg)`,
        mask: `radial-gradient(farthest-side, transparent calc(100% - ${borderSize}px), #000 calc(100% - ${borderSize}px))`,
        WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${borderSize}px), #000 calc(100% - ${borderSize}px))`,
      } as React.CSSProperties}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
