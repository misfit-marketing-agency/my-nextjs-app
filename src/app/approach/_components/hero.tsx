import Image from "next/image";

import Divide from "@/components/divide";
import Inter from "@/components/inter";
import SectionLabel from "@/components/section-label";
import { getBlurDataURL } from "@/lib/utils/image";

export default async function ApproachHero() {
  const { base64: approachBase64 } =
    (await getBlurDataURL("/assets/images/approach.jpg")) ?? {};

  return (
    <div className="w-full">
      <div className="container !pt-10 sm:!pt-14">
        <div className="flex w-full flex-col gap-10 sm:gap-14">
          <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:gap-8">
            <SectionLabel className="font-bold">Our Approach</SectionLabel>
            <div className="mx-auto w-full max-w-[916px]">
              <h1 className="text-5xl leading-[1.19]">
                Everything we dream up - design, write, or build is made to look
                damn good and make people move. We don&apos;t just create to
                impress. We create to provoke, convert, and spark real action.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <Divide />
            <div className="relative mx-auto flex aspect-[1536/780] w-full items-center justify-center rounded-6xl bg-muted">
              <Image
                src="/assets/images/approach.jpg"
                alt="Approach"
                sizes="100%"
                fill
                placeholder={approachBase64 ? "blur" : undefined}
                blurDataURL={approachBase64 ?? undefined}
                className="rounded-6xl object-cover"
              />
            </div>
            <Divide />
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-12 lg:gap-16 xl:gap-20">
            <p className="font-konstanz text-2xl font-normal">
              We kick things off by getting to know you, your brand, your goals,
              your weird little quirks. Then we build a plan, offer real
              <Inter>-</Inter>deal advice, and do the work to move the needle.
            </p>
            <p className="font-konstanz text-2xl font-normal">
              But we<Inter>&apos;</Inter>re not yes people. If something
              <Inter>&apos;</Inter>s off, we<Inter>&apos;</Inter>ll speak up.
              Because doing great work means asking better questions, not just
              doing what we<Inter>&apos;</Inter>re told.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
