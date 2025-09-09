import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/index";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full cursor-pointer text-sm font-sans-alt font-medium transition-all disabled:pointer-events-none disabled:opacity-80 focus-visible:outline-secondary focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-dashed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none  aria-invalid:ring-danger/20 aria-invalid:border-danger",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-foreground shadow-xs hover:bg-primary-alt focus-visible:outline-primary",
        destructive: "bg-danger text-white shadow-xs hover:bg-danger/90",
        outline:
          "border border-foreground bg-transparent shadow-xs hover:bg-accent/10",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary-alt",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2 has-[>svg]:px-6",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-14 rounded-full px-6 has-[>svg]:px-6",
        icon: "size-10 sm:size-12",
        "icon-sm": "size-8",
        "icon-lg": "size-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
