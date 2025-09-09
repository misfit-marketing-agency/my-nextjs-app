import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  background?: string;
  dir?: "h" | "v";
};

export default function Divide({
  className,
  dir = "h",
  background = "bg-secondary",
}: Props) {
  return (
    <div
      className={cn(
        `${dir === "h" ? "h-[1px] min-h-[1px] w-full" : "h-full w-[1px] min-w-[1px]"}`,
        background,
        className
      )}
    />
  );
}
