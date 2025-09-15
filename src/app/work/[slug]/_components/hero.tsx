import Image from "next/image";

import Divide from "@/components/divide";
import { getBlurDataURL } from "@/lib/utils/image";
import { Image as ImageType } from "@/types";

type Props = {
  name: string;
  description: string;
  image: ImageType;
  cover: ImageType;
  phrase: string | React.ReactNode;
  scope: string[];
  website: string;
};

export default async function WorkHero({
  name,
  description,
  image,
  cover,
  phrase,
}: Props) {
  const { base64: imageBase64 } = (await getBlurDataURL(image.path)) ?? {};
  const { base64: coverBase64, metadata: coverMetadata } =
    (await getBlurDataURL(cover.path)) ?? {};

  return (
    <div className="w-full">
      <div className="container !pt-6">
        <div className="flex w-full flex-col gap-8 sm:gap-12 md:gap-16">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full items-end justify-between gap-6">
              <h1 className="text-7xl">{name}</h1>
              <div className="relative hidden aspect-[14/9] w-full max-w-[313.6px] overflow-hidden rounded-6xl sm:block">
                <Image
                  src={image.path}
                  alt={name}
                  fill
                  // width={imageMetadata?.width}
                  // height={imageMetadata?.height}
                  placeholder={imageBase64 ? "blur" : undefined}
                  blurDataURL={imageBase64 ?? undefined}
                  className="rounded-6xl object-cover"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-6">
              <Divide />
              <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="font-sans-alt text-3xl">{phrase}</p>
                {/* <div className="flex items-center justify-between gap-12 md:justify-start">
                  <div className="flex items-center gap-4">
                    {scope.map((item, index) => (
                      <div
                        className="border-secondary rounded-full border px-4 py-3"
                        key={index}
                      >
                        <p className="font-konstanz text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    aria-label="View site"
                    asChild
                    variant="ghost"
                    className="gap-4 hover:bg-transparent"
                  >
                    <Link aria-label="View site" href={website} target="_blank">
                      View site{" "}
                      <div className="bg-secondary text-background inline-flex h-7 w-7 items-center justify-center rounded-full">
                        <span className="-rotate-45">
                          <ArrowRight />
                        </span>
                      </div>
                    </Link>
                  </Button>
                </div> */}
              </div>
              <Divide />
            </div>
            <div className="w-full">
              <p className="font-inter text-lg">{description}</p>
            </div>
          </div>

          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-5xl"
            style={{
              aspectRatio: `${coverMetadata?.width} / ${coverMetadata?.height}`,
            }}
          >
            <Image
              src={cover.path}
              alt={name}
              width={coverMetadata?.width}
              height={coverMetadata?.height}
              placeholder={coverBase64 ? "blur" : undefined}
              blurDataURL={coverBase64 ?? undefined}
              className="w-full rounded-5xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
