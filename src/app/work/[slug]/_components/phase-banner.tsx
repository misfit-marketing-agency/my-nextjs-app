import { cn } from "@/lib/utils";
import { getBlurDataURL } from "@/lib/utils/image";
import Image from "next/image";

import { Fragment } from "react";

type Props = {
  phase: "challenges" | "solutions" | "results";
  list: string[];
  className?: string;
};

const images = {
  challenges: {
    path: "/assets/images/challenges.png",
    width: 202,
    height: 282,
  },
  solutions: {
    path: "/assets/images/solutions.png",
    width: 202,
    height: 282,
  },
  results: {
    path: "/assets/images/results.png",
    width: 235,
    height: 270,
  },
};

export default async function WorkPhaseBanner({
  phase,
  list,
  className,
}: Props) {
  const label = phase.charAt(0).toUpperCase() + phase.slice(1);
  const image = images[phase];

  const { base64: imageBase64, metadata: imageMetadata } =
    (await getBlurDataURL(image.path)) ?? {};

  return (
    <div className={cn("relative z-10 w-full", className)}>
      <div className="relative w-full rounded-t-6xl bg-primary-foreground">
        <div className="container">
          <div className="flex w-full flex-col items-center justify-center gap-8 sm:gap-12">
            <div>
              <Image
                src={image.path}
                alt={label}
                width={imageMetadata?.width ?? image.width}
                height={imageMetadata?.height ?? image.height}
                placeholder={imageBase64 ? "blur" : undefined}
                blurDataURL={imageBase64 ?? undefined}
                className="h-[90vw] max-h-[140px] object-contain sm:max-h-[224px]"
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <p className="text-center font-georgia text-5xl text-primary sm:text-7xl">
                {label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:gap-4">
                {list.map((item, index) => (
                  <Fragment key={index}>
                    <span className="font-inter text-sm text-primary sm:text-lg">
                      {item}
                    </span>
                    {index !== list.length - 1 && (
                      <span className="font-inter text-sm text-primary sm:text-lg">
                        |
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
