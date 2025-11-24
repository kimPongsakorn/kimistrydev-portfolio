interface LogoProps {
  showText?: boolean;
  text?: string;
  className?: string;
}

export default function Logo({ 
  showText = true, 
  text = "<KimisryDev>",
  className = "" 
}: LogoProps) {
  return (
    <div className={`flex flex-row items-center gap-2 ${className}`}>
      {showText && <span className="font-semibold text-gray-900 dark:text-white">{text}</span>}
    </div>
  );
}