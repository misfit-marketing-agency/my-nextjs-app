import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export default function Inter({ children, className, ...props }: Props) {
  return (
    <span className={cn("font-inter", className)} {...props}>
      {children}
    </span>
  );
}
