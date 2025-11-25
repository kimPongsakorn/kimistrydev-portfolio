import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  description: string;
  className?: string;
}

export function Title({ title, description, className }: TitleProps) {
  return (
    <div className={cn("flex justify-start items-start w-full", className)}>
      <div className="text-left mb-12">
        <h1 className={typography.h1}>
          {title}
        </h1>
        <p className={typography.bodyLarge}>
          {description}
        </p>
      </div>
    </div>
  );
}
