import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PlanProject from "./plan-project";
import Plus from "./icons/plus";
import { contactInfo, socialLinks } from "@/lib/data/footer";
import { navLinks } from "@/lib/data/nav";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="container !pb-24 !pt-[6.25rem] sm:!pt-32">
        <div className="flex w-full flex-col">
          {/* 1 */}
          <div className="flex flex-col gap-12 border-b border-b-primary pb-16 sm:gap-16 sm:pb-20">
            <p className="text-base font-bold text-primary">
              • Connect with us
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
              <p className="text-7xl font-medium text-primary">
                Ready to make
                <br /> some noise?
              </p>
              <div>
                <PlanProject>
                  <Button
                    asChild
                    size="lg"
                    className="w-fit gap-6 text-base font-bold focus-visible:outline-primary sm:h-[4.2rem] sm:gap-8 md:gap-12"
                  >
                    <span>
                      Plan a project
                      <span className="inline-flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-foreground text-primary sm:h-[2.625rem] sm:w-[2.625rem]">
                        <Plus className="!h-3.5 !w-3.5 lg:!h-4 lg:!w-4" />
                      </span>
                    </span>
                  </Button>
                </PlanProject>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center gap-12 border-b border-b-primary pb-12 sm:gap-16 sm:pb-16">
            <div>
              <Image
                className="object-contain"
                src="/assets/images/misfit-label.png"
                alt="Misfit"
                width={1063}
                height={281}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex w-full max-w-fit flex-col items-center gap-8 text-center md:items-start md:text-left">
                <p className="text-3xl font-semibold text-primary">
                  Misfit Marketing
                </p>
                <ul className="flex flex-col gap-2">
                  {contactInfo.map(({ label, href }, index) => (
                    <li key={index}>
                      {href ? (
                        <Link
                          href={href}
                          target="_blank"
                          className="font-inter text-base text-primary underline"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="font-inter text-base text-primary">
                          {label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col gap-4">
                {navLinks.map(({ label, href }, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="ml-auto w-full max-w-[736px] border-primary text-primary focus-visible:outline-primary"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="justify-betweeen flex flex-wrap items-center justify-between gap-6 pt-12 sm:pt-16">
            <Link
              href="/privacy-policy"
              className="font-sans-alt text-base text-primary underline"
            >
              Privacy Policy
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map(({ label, href }, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="h-9 border-primary px-6 text-primary focus-visible:outline-primary sm:px-12"
                >
                  <Link href={href} target="_blank">
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-base text-primary">
              Misfit Marketing{" "}
              <span className="font-inter">
                <span className="text-opacity-60">©</span> 2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
