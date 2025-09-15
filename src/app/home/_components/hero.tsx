import Image from "next/image";
import Link from "next/link";

import Divide from "@/components/divide";
import ArrowRight from "@/components/icons/arrow-right";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/data/home";

export default function HomeHero() {
  return (
    <div className="w-full bg-primary">
      <div className="container w-full !pt-10 sm:!pt-14">
        <div className="flex w-full flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-7xl font-medium">
              We&apos;re not here to fit in. We&apos;re here to make brands that
              stand out, with strategy, guts, and killer creative.
            </h1>
            <div className="max-w-[593px]">
              <p className="font-sans-alt text-xl">
                Let us help you bring your brand to life with strategy and
                design. This is our bread and butter.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch gap-4 lg:gap-6 xl:!grid-cols-4 xs:grid-cols-2">
            {features.map(
              (
                { label, description, image: { path, width, height }, href },
                index
              ) => {
                const count = index + 1;

                return (
                  <div
                    key={index}
                    className="flex h-auto flex-col gap-4 rounded-6xl px-4 pb-4 pt-14 sm:px-6 sm:pt-20"
                    style={{
                      background: `var(--gradient-${count})`,
                    }}
                  >
                    <div className="flex h-full w-full flex-col items-center overflow-hidden">
                      <div className="w-fullsm:w-[125%] flex h-[240px] items-center justify-center sm:h-[280px]">
                        <Image
                          src={path}
                          alt={label}
                          width={width}
                          height={height}
                          className="max-h-[360px] w-3/4 object-contain sm:w-full"
                        />
                      </div>
                      <div className="flex w-full flex-1 flex-col px-4">
                        <div className="flex flex-col gap-2 pb-4 pt-2 sm:pb-6">
                          <p className="font-inter text-sm">
                            {count.toString().padStart(2, "0")}
                          </p>
                          <h3 className="text-4xl font-medium leading-[1.22]">
                            {label}
                          </h3>
                        </div>
                        <div className="pb-3 pt-2">
                          <p className="font-sans-alt text-base">
                            {description}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-col items-end justify-end gap-6 pb-6 pt-3">
                          <Divide />
                          <Button
                            aria-label={label}
                            asChild
                            size="icon-sm"
                            variant="secondary"
                            className="text-background"
                          >
                            <Link aria-label={label} href={href}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
