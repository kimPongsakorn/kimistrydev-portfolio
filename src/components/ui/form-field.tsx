import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  isFirst?: boolean;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  className,
  inputClassName,
  isFirst = false,
}: FormFieldProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 border-b border-gray-200 pb-2 px-4",
        isFirst ? "pt-4" : "",
        className
      )}
    >
      <Label
        htmlFor={id}
        className={cn(typography.label, "min-w-[60px]")}
      >
        {label}:
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          "border-0 shadow-none focus-visible:ring-0 px-0",
          typography.placeholder,
          inputClassName
        )}
        required={required}
      />
    </div>
  );
}

