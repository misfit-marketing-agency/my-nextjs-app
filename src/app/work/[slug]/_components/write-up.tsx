import React from "react";
import Image from "next/image";

import Divide from "@/components/divide";
import SectionLabel from "@/components/section-label";
import { getBlurDataURL } from "@/lib/utils/image";
import { Image as ImageType, Content } from "@/types";

type Props = {
  label: string;
  main: string | ImageType;
  sub: Content;
  gradient?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default async function WorkWriteUp({
  label,
  main,
  sub,
  gradient = false,
  ...props
}: Props) {
  const { base64: mainBase64, metadata: mainMetadata } =
    typeof main === "string" ? {} : ((await getBlurDataURL(main.path)) ?? {});

  return (
    <div
      className="w-full"
      {...props}
      style={
        gradient
          ? {
              background: "linear-gradient(113deg, #EAE1BB 0%, #D6B9BA 100%)",
            }
          : {}
      }
    >
      <div className="container">
        <div className="flex w-full flex-col gap-8 sm:gap-16 md:gap-24">
          <div className="flex flex-col gap-6">
            <Divide />
            <SectionLabel className="font-bold">{label}</SectionLabel>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-between gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-24">
            {typeof main === "string" ? (
              <p className="font-georgia text-4xl">{main}</p>
            ) : (
              <div className="relative h-auto min-h-[unset] w-full overflow-hidden rounded-6xl sm:min-h-[600px]">
                <Image
                  src={main.path}
                  alt={label}
                  fill
                  sizes="60vw"
                  placeholder={mainBase64 ? "blur" : undefined}
                  blurDataURL={mainBase64 ?? undefined}
                  className="hidden rounded-6xl object-cover sm:block"
                  style={{
                    objectPosition: main?.position ?? "center 35%",
                  }}
                />
                <Image
                  src={main.path}
                  alt={label}
                  width={mainMetadata?.width}
                  height={mainMetadata?.height}
                  placeholder={mainBase64 ? "blur" : undefined}
                  blurDataURL={mainBase64 ?? undefined}
                  className="block rounded-6xl object-cover sm:hidden"
                />
              </div>
            )}
            <div className="flex flex-col gap-8">
              {sub.map((item, index) =>
                typeof item === "string" || React.isValidElement(item) ? (
                  <p key={index} className="font-konstanz text-xl">
                    {item}
                  </p>
                ) : (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="font-sans-alt text-xl font-semibold">
                      {(item as { heading: string }).heading}
                    </p>
                    <p className="font-konstanz text-xl font-normal">
                      {(item as { text: string }).text}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
