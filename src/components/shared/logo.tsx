interface LogoProps {
  showText?: boolean;
  text?: string;
  className?: string;
  textClassName?: string;
}

export default function Logo({
  showText = true,
  text = "<KimisryDev>",
  className = "",
  textClassName = "text-gray-900 dark:text-white",
}: LogoProps) {
  return (
    <div className={`flex flex-row items-center gap-2 ${className}`}>
      {showText && (
        <span className={`font-semibold ${textClassName}`}>
          {text}
        </span>
      )}
    </div>
  );
}