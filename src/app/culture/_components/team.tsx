import Image from "next/image";

import { team } from "@/lib/data/culture";
import { getBlurDataURL } from "@/lib/utils/image";

export default async function CultureTeam() {
  const blurData = await Promise.all(
    team.map(async ({ image }) => {
      const { base64, metadata } = (await getBlurDataURL(image)) ?? {};
      return { base64, metadata };
    })
  );

  return (
    <div className="w-full">
      <div className="container !pt-8 sm:!pt-12">
        <div
          className="flex w-full items-center justify-center overflow-hidden rounded-6xl px-6 py-12 sm:px-10 md:py-16"
          style={{
            background: "var(--gradient-10)",
          }}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-32 xl:gap-44 2xl:gap-64">
            {team.map(({ name, other, position, image }, index) => {
              const { base64 } = blurData?.[index] ?? {};

              return (
                <div key={index} className="flex flex-col gap-4 sm:gap-8">
                  <div className="xl lg:w-[33 0px] relative aspect-square w-[250px] overflow-hidden rounded-full shadow-1 grayscale lg:w-[320px]">
                    <Image
                      src={image}
                      alt={name}
                      placeholder={base64 ? "blur" : undefined}
                      blurDataURL={base64 ?? undefined}
                      fill
                      // width={metadata?.width ?? undefined}
                      // height={metadata?.height ?? undefined}
                      className="rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-center text-3xl font-bold">{name}</p>
                    <p className="text-center font-sans-alt text-base leading-[1.4]">
                      {position} and
                    </p>
                    <p className="text-center font-sans-alt text-base leading-[1.4]">
                      {other}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
