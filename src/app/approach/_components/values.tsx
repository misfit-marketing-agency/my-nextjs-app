import Image from "next/image";

import Divide from "@/components/divide";
import Inter from "@/components/inter";
import { values } from "@/lib/data/approach";
import { getBlurDataURL } from "@/lib/utils/image";

export default async function ApproachValues() {
  const { base64: valuesBase64, metadata: valuesMetadata } =
    (await getBlurDataURL("/assets/images/values.png")) ?? {};

  return (
    <div className="bg-primary">
      <div className="container !pb-8 sm:!pb-10">
        <div className="flex w-full justify-center gap-20 lg:gap-32">
          <div className="hidden max-w-[320px] items-center justify-center md:flex lg:max-w-[450px]">
            <Image
              src="/assets/images/values.png"
              alt="Values"
              width={valuesMetadata?.width ?? 1128}
              height={valuesMetadata?.height ?? 1139}
              placeholder={valuesBase64 ? "blur" : undefined}
              blurDataURL={valuesBase64 ?? undefined}
              className="object-contain"
            />
          </div>

          <div className="flex max-w-[540px] flex-col gap-8 md:gap-12 lg:gap-16">
            <h2 className="text-7xl font-medium">Our Values</h2>
            <p className="font-sans-alt text-xl">
              We don<Inter>&apos;</Inter>t just have values, we live by them.
              They shape what we do, how we do it, and who we do it for.
            </p>
            <ul className="flex flex-col gap-8">
              {values.map(({ label, description }, index) => (
                <li key={index} className="flex w-full flex-col gap-8">
                  <p className="font-konstanz text-lg font-bold">{label}</p>
                  <p className="font-konstanz w-full max-w-[500px] text-lg font-medium">
                    {description}
                  </p>
                  <Divide />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
