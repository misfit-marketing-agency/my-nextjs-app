"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import NavMobile from "./nav-mobile";
import PlanProjectButton from "./plan-project-button";
import { navLinks } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [isNavMobileOpen, setNavMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative flex h-[var(--nav-height)] w-full items-stretch">
      <div className="container !pb-0 !pt-8">
        <div className="flex w-full items-center justify-between border-b border-b-secondary pb-5 md:pb-6">
          <div className="flex items-center justify-between gap-14">
            <Logo />
            <div className="hidden items-center justify-between gap-4 lg:flex">
              {navLinks.map(({ label, href }, index) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className={cn(
                      "hover:bg-secondary/5",
                      isActive && "bg-secondary/5"
                    )}
                  >
                    <Link aria-label={label} key={index} href={href}>
                      {label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
          <PlanProjectButton className="hidden lg:inline-flex" />
          <div className="flex items-center lg:hidden">
            {/* <PlanProjectButton /> */}
            <Button
              aria-label="Menu"
              variant="ghost"
              size="lg"
              className={cn("bg-transparent", "hover:bg-transparent")}
              onClick={() => setNavMobileOpen(true)}
            >
              <span className="text-sm underline">Menu</span>
            </Button>
          </div>
        </div>

        <NavMobile isOpen={isNavMobileOpen} setOpen={setNavMobileOpen} />
      </div>
    </nav>
  );
}
