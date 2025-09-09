import Image from "next/image";

import Divide from "@/components/divide";
import SectionLabel from "@/components/section-label";
import { getBlurDataURL } from "@/lib/utils/image";

export default async function CultureHero() {
  const { base64: cultureBase64 } =
    (await getBlurDataURL("/assets/images/culture.png")) ?? {};

  return (
    <div className="w-full">
      <div className="container !pt-10 sm:!pb-[6.25rem] sm:!pt-14">
        <div className="flex w-full flex-col gap-10 sm:gap-14">
          <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:gap-8">
            <SectionLabel className="font-inter font-bold [&>p]:font-inter">
              Our Culture
            </SectionLabel>
            <div className="max-w-[1000px]">
              <h1 className="text-4xl font-normal leading-[1.19] sm:text-[2.04325625rem]">
                We don&apos;t just fill roles—we find the right misfits. Every
                person on our team helps shape who we are, not just what we do.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-12">
            <Divide />
            <div className="relative aspect-[1536/781] w-full overflow-hidden rounded-6xl bg-muted">
              <Image
                src="/assets/images/culture.png"
                alt="Misfit Culture"
                sizes="100vw"
                fill
                placeholder={cultureBase64 ? "blur" : undefined}
                blurDataURL={cultureBase64 ?? undefined}
                className="h-full w-full rounded-6xl object-cover object-top"
              />
            </div>
            <Divide />
          </div>
        </div>
      </div>
    </div>
  );
}
