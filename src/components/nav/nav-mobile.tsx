"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import PlanProjectButton from "./plan-project-button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data/nav";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export default function NavMobile({ isOpen, setOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const onMenuClickOut = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Node;
      const menu = menuRef.current;

      if (menu && !menu.contains(target)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onMenuClickOut);

    return () => {
      document.removeEventListener("mousedown", onMenuClickOut);
    };
  }, [onMenuClickOut]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-20 flex h-screen w-full items-stretch transition-all xl:hidden",
        {
          "backdrop-blur-xs pointer-events-auto bg-secondary/20 opacity-100 duration-300":
            isOpen,
          "pointer-events-none bg-secondary/0 opacity-0 duration-700": !isOpen,
        }
      )}
    >
      <div
        ref={menuRef}
        className={cn(
          "custom-scroll w-[50vw] min-w-[275px] max-w-[400px] overflow-auto bg-primary",
          {
            "translate-x-0 duration-700": isOpen,
            "-translate-x-[75vw] duration-300": !isOpen,
          }
        )}
      >
        <div className="flex h-fit w-full flex-col transition-transform">
          <div className="flex items-start justify-end gap-x-6 p-4">
            <Button
              aria-label="Close menu"
              variant="ghost"
              size="icon"
              className={cn("nav__close", "hover:bg-transparent")}
              onClick={() => setOpen(false)}
            >
              <X className="h-auto w-4" />
            </Button>
          </div>
          <ul className="flex h-full w-full flex-col items-center gap-y-6 py-8">
            {navLinks.map(({ href, label }, index) => {
              const isActive = pathname.startsWith(href);
              return (
                <li key={index} className="w-full">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "group inline-flex w-full cursor-pointer justify-start rounded-none text-left text-base text-foreground hover:underline",
                      "hover:bg-transparent",
                      isActive && "underline"
                    )}
                  >
                    <Link
                      aria-label={label}
                      href={href}
                      onClick={() =>
                        (
                          document.querySelector(
                            ".nav__close"
                          ) as HTMLButtonElement
                        )?.click()
                      }
                    >
                      {label}
                    </Link>
                  </Button>
                </li>
              );
            })}
            <li className="w-full px-6">
              <PlanProjectButton className="w-full" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
