import Image from "next/image";

import { cn } from "@/lib/utils";
import { getBlurDataURL } from "@/lib/utils/image";

type Props = {
  images: [{ image: string; alt: string }, { image: string; alt: string }];
  className?: string;
};

async function WorkImage({ image, alt }: { image: string; alt: string }) {
  const { base64: imageBase64 } = (await getBlurDataURL(image)) ?? {};

  return (
    <div className="relative aspect-square h-auto overflow-hidden rounded-3xl sm:rounded-4xl md:rounded-6xl">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="60vw"
        placeholder={imageBase64 ? "blur" : undefined}
        blurDataURL={imageBase64 ?? undefined}
        className="rounded-3xl object-cover sm:rounded-4xl md:rounded-6xl"
      />
    </div>
  );
}

export default function WorkImageList({ images, className }: Props) {
  return (
    <div className={cn("relative z-10 w-full", className)}>
      <div className="container">
        <div className="grid w-full grid-cols-2 items-stretch gap-4 sm:gap-8 md:gap-12">
          {images.map(({ image, alt }, index) => (
            <WorkImage key={index} image={image} alt={alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
