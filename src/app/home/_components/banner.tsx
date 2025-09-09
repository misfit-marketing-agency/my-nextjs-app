import Image from "next/image";

import { getBlurDataURL } from "@/lib/utils/image";

export default async function HomeBanner() {
  const { base64: bannerBase64, metadata: bannerMetadata } =
    (await getBlurDataURL("/assets/images/banner.png")) ?? {};

  return (
    <div className="bg-primary w-full">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center gap-12 sm:gap-16 md:flex-row">
          <div className="flex max-w-[378px] items-center justify-center">
            <Image
              src="/assets/images/banner.png"
              alt="Misfit"
              width={0.7 * (bannerMetadata?.width ?? 403)}
              height={0.7 * (bannerMetadata?.height ?? 403)}
              placeholder={bannerBase64 ? "blur" : undefined}
              blurDataURL={bannerBase64 ?? undefined}
            />
          </div>
          <div className="max-w-[533.4px]">
            <p className="text-5xl leading-[1.2] font-medium">
              We&apos;re not here to blend in. We&apos;re here to make noise,
              turn heads, and drive real reactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
