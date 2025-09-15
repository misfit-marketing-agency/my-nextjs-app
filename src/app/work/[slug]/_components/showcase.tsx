import Image from "next/image";

import Divide from "@/components/divide";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  text?: string[];
  instagram?: string;
  images: string[];
  aspect?: string;
  gradient?: boolean;
};

export default function WorkShowcase({
  name,
  text = [],
  images,
  aspect = "453 / 912",
  gradient = true,
}: Props) {
  const hasText = text.length >= 1;
  const imagesCount = images.length;

  return (
    <div className="relative w-full">
      <div
        style={
          gradient
            ? {
                background: "linear-gradient(113deg, #EAE1BB 0%, #D6B9BA 100%)",
              }
            : {}
        }
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-[110%] w-full",
          !gradient && "bg-primary"
        )}
      />
      <div className="container relative">
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center gap-8 sm:gap-12",
            imagesCount === 1
              ? "md:flex-row md:gap-12 xl:gap-44"
              : "md:gap-20 xl:flex-row xl:gap-24"
          )}
        >
          <div
            className={cn(
              "flex flex-row items-center gap-6 sm:items-start sm:gap-12 md:gap-16 lg:gap-20",
              hasText || (!hasText && imagesCount <= 2)
                ? "justify-center"
                : "w-full justify-center sm:justify-between"
            )}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative max-w-[360px]",
                  hasText
                    ? imagesCount === 1
                      ? "w-[60vw] sm:w-[70vw] lg:w-[90vw] xl:w-[40vw]"
                      : imagesCount === 2
                        ? "w-[42vw] xl:w-[40vw]"
                        : "w-[30vw] xl:w-[40vw]"
                    : "w-[43vw] lg:w-[90vw] xl:w-[40vw]"
                )}
                style={{
                  aspectRatio: aspect,
                }}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="60vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {hasText && (
            <div className="mx-auto flex w-full max-w-[500px] flex-col justify-center gap-8 xl:mx-[unset] xl:w-[40%] xl:justify-start">
              <h3 className="text-7xl">{name}</h3>
              <Divide />
              <div className="flex flex-col gap-8">
                {text.map((text, index) => (
                  <p key={index} className="font-inter text-xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
