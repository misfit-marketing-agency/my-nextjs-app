import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className }: Props) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="font-inter text-sm">•</span>
      <p className="font-sans-alt text-sm">{children}</p>
    </div>
  );
}
