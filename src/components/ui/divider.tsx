import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "border-t border-gray-200 dark:border-gray-800",
        className
      )}
    />
  );
}