import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ArrowRight from "@/components/icons/arrow-right";
import Divide from "@/components/divide";
import SectionLabel from "@/components/section-label";
import Inter from "@/components/inter";
import { works } from "@/lib/data/home";
import { getBlurDataURL } from "@/lib/utils/image";

type Work = (typeof works)[0];

function WorkCardBasic({ name, description, href }: Work) {
  return (
    <div className="w-full rounded-6xl border border-primary px-6 py-8 sm:px-10">
      <div className="flex h-full w-full flex-col justify-between gap-4 md:flex-row md:items-stretch">
        <p className="text-6xl font-medium text-primary">{name}</p>
        <div className="flex h-auto justify-between gap-8 md:items-stretch md:justify-start">
          <div className="flex h-auto items-stretch gap-8">
            <Divide
              dir="v"
              background="bg-primary"
              className="hidden h-auto md:block"
            />
            <p className="my-auto max-w-[320px] font-sans-alt text-base text-primary">
              {description}
            </p>
          </div>
          <Button aria-label={name} asChild size="icon" className="my-auto">
            <Link aria-label={name} href={href}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

async function WorkCardComplex({
  name,
  description,
  image,
  background,
  href,
}: Work) {
  const { base64: imageBase64, metadata: imageMetadata } = image
    ? ((await getBlurDataURL(image.path)) ?? {})
    : {};

  if (!image || !background) return null;

  return (
    <div className="w-full rounded-6xl border border-primary p-6">
      <div
        className="flex w-full items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center px-4 py-24"
        style={{
          backgroundImage: `url(${background.path})`,
        }}
      >
        <div
          className="w-[95%] rounded-2xl md:w-[90%] lg:w-[65%]"
          style={{
            background: "var(--gradient-5)",
          }}
        >
          <div className="flex w-full flex-col items-center gap-6 px-6 py-10">
            <div className="aspect-[394/234] w-[88%] overflow-hidden rounded-full border border-secondary bg-transparent p-1 md:!w-1/2 xs:w-3/4">
              <div className="relative h-full rounded-full bg-muted">
                <Image
                  src={image.path}
                  alt={name}
                  placeholder={imageBase64 ? "blur" : undefined}
                  blurDataURL={imageBase64 ?? undefined}
                  width={imageMetadata?.width ?? image.width}
                  height={imageMetadata?.height ?? image.height}
                  sizes="100vw"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-center text-6xl font-medium text-foreground">
              {name}
            </p>
            <div className="w-full">
              <div className="mx-auto max-w-[430px]">
                <p className="text-center font-sans-alt text-base sm:text-[18px]">
                  {description}
                </p>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  aria-label={name}
                  asChild
                  variant="secondary"
                  size="icon"
                >
                  <Link aria-label={name} href={href}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeWork() {
  return (
    <div className="w-full rounded-6xl bg-secondary">
      <div className="container">
        <div className="flex w-full flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-7xl font-medium text-primary">
              Brands That Dare to Misfit.
            </h2>
            <div className="max-w-[593px]">
              <p className="font-sans-alt text-xl text-primary">
                We craft bold digital experiences that don<Inter>&apos;</Inter>t
                just look good, they shift brands forward. We build for what
                <Inter>&apos;</Inter>s now, what<Inter>&apos;</Inter>s next, and
                whatever breaks the mold.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-8">
            <SectionLabel className="font-medium text-primary">
              Selected work
            </SectionLabel>
            <div className="flex flex-col gap-4">
              {works.map((work) =>
                work?.image && work?.background ? (
                  <WorkCardComplex key={work.name} {...work} />
                ) : (
                  <WorkCardBasic key={work.name} {...work} />
                )
              )}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans-alt text-base text-primary sm:text-[18px]">
              Our work turns heads and moves the needle.
            </p>
            <Button
              asChild
              size="lg"
              className="w-fit gap-6 text-base font-bold sm:h-[4.2rem] sm:gap-8 md:gap-12"
            >
              <Link aria-label="Browse all works" href="/work">
                Browse all works
                <span className="inline-flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-foreground text-primary sm:h-[2.625rem] sm:w-[2.625rem]">
                  <ArrowRight className="!h-3.5 !w-3.5 sm:!h-4 sm:!w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
