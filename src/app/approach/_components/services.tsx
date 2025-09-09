import { Fragment } from "react";
import Image from "next/image";

import Divide from "@/components/divide";
import Inter from "@/components/inter";
import { getBlurDataURL } from "@/lib/utils/image";
import { services } from "@/lib/data/approach";

export default async function ApproachServices() {
  const { base64: servicesBase64, metadata: servicesMetadata } =
    (await getBlurDataURL("/assets/images/services.jpg")) ?? {};

  return (
    <div className="w-full bg-primary">
      <div className="container !pt-8 sm:!pt-10">
        <div className="flex w-full flex-col gap-16 sm:gap-20">
          <div className="flex w-full flex-col items-center gap-16 overflow-hidden rounded-6xl sm:gap-20">
            <Image
              src="/assets/images/services.jpg"
              alt="Services"
              width={servicesMetadata?.width ?? 1536}
              height={servicesMetadata?.height ?? 780}
              placeholder={servicesBase64 ? "blur" : undefined}
              blurDataURL={servicesBase64 ?? undefined}
              className="rounded-6xl object-contain"
            />
            <p className="mx-auto max-w-[1000px] text-center font-sans-alt text-4xl leading-[1.17]">
              We do most everything you might imagine of a creative agency, but
              let us know if you have something in mind that we didn
              <Inter>&apos;</Inter>t include in our lists.
            </p>
          </div>
          <div className="flex w-full flex-col">
            {services.map(({ label, features, description }, index) => {
              const count = index + 1;

              return (
                <Fragment key={index}>
                  <Divide />
                  <div
                    id={label.toLowerCase()}
                    className="grid w-full grid-cols-[0.5fr_0.8fr_1fr] justify-between gap-6 pb-16 pt-8 last:pb-0 sm:grid-cols-3 sm:pb-20 sm:pt-12"
                  >
                    <div className="flex flex-col gap-4">
                      <p className="font-inter text-sm sm:text-[18px]">
                        {count.toString().padStart(2, "0")}
                      </p>
                      <p className="text-base sm:text-3xl">{label}</p>
                    </div>
                    <ol className="list list-inside list-disc space-y-2">
                      {features.map((feature, index) => (
                        <li key={index}>
                          <span className="font-inter text-sm sm:text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <div className="max-w-[400px]">
                      <p className="font-konstanz text-sm sm:text-lg">
                        {description}
                      </p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
