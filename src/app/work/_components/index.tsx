import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/arrow-right";
import { Button } from "@/components/ui/button";
import Inter from "@/components/inter";
import { works } from "@/lib/data/work";
import { cn } from "@/lib/utils";
import { getBlurDataURL } from "@/lib/utils/image";

type WorkCardProps = (typeof works)[0] & {
  index: number;
  className?: string;
};

async function WorkCard({
  label,
  description,
  href,
  core,
  image,
  index,
  className,
}: WorkCardProps) {
  const { base64: coreBase64, metadata: coreMetadata } =
    (await getBlurDataURL(core.path)) ?? {};
  const { base64: imageBase64, metadata: imageMetadata } =
    (await getBlurDataURL(image.path)) ?? {};

  return (
    <div
      key={index}
      className={cn(
        "w-full overflow-hidden rounded-6xl border border-secondary p-4 md:p-6",
        className
      )}
    >
      <div className="flex w-full items-stretch gap-4">
        <div
          className="w-full rounded-4xl md:rounded-2xl"
          style={{
            background: `var(--gradient-${index + 6})`,
          }}
        >
          <div className="flex w-full flex-col items-center gap-6 px-6 py-10 md:gap-10">
            <div className="w-4/5 max-w-[360px] overflow-hidden rounded-full border border-secondary bg-transparent p-1 sm:w-3/4 lg:w-1/2">
              <div className="relative aspect-[394/234] w-full rounded-full bg-muted">
                <Image
                  src={core.path}
                  alt={label}
                  placeholder={coreBase64 ? "blur" : undefined}
                  blurDataURL={coreBase64 ?? undefined}
                  width={coreMetadata?.width ?? core.width}
                  height={coreMetadata?.height ?? core.height}
                  sizes="100%"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-center text-6xl font-medium text-foreground">
              {label}
            </p>
            <div className="w-full space-y-2">
              <div className="mx-auto max-w-[430px]">
                <p className="text-center font-sans-alt text-base sm:text-[18px]">
                  {description}
                </p>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  aria-label={label}
                  asChild
                  variant="secondary"
                  size="icon"
                >
                  <Link aria-label={label} href={href}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden h-auto w-[340px] min-w-[340px] overflow-hidden rounded-2xl md:block">
          <Image
            src={image.path}
            alt={label}
            placeholder={imageBase64 ? "blur" : undefined}
            blurDataURL={imageBase64 ?? undefined}
            width={imageMetadata?.width ?? image.width}
            height={imageMetadata?.height ?? image.height}
            sizes="100%"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function WorkMain() {
  return (
    <div className="w-full">
      <div className="container !pt-10 sm:!pt-14">
        <div className="flex w-full flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-7xl font-medium leading-[0.9]">
              Brands That Dare to Misfit.
            </h1>
            <div className="max-w-[620px]">
              <p className="font-sans-alt text-xl">
                We craft digital experiences that don<Inter>&apos;</Inter>t just
                look good, they move the needle. We help brands break the mold
                and build for what<Inter>&apos;</Inter>s now, what
                <Inter>&apos;</Inter>s next, and what<Inter>&apos;</Inter>s
                never been done before.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col">
            {works.map((work, index) => (
              <WorkCard
                key={index}
                index={index}
                className={index !== 0 ? "-mt-[1px]" : ""}
                {...work}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
