import * as React from "react";

import { cn } from "@/lib/utils/index";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content flex min-h-40 w-full border-b-2 border-input border-b-foreground bg-transparent py-1 font-inter text-sm font-medium outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger placeholder:font-inter placeholder:text-muted-foreground dark:bg-input/30",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
