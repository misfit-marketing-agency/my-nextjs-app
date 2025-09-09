import Image from "next/image";

import { getBlurDataURL } from "@/lib/utils/image";

type Props = {
  name: string;
  image: string;
};

export default async function WorkBanner({ name, image }: Props) {
  const { base64: bannerBase64 } = (await getBlurDataURL(image)) ?? {};

  return (
    <div className="relative aspect-[1344/780] max-h-screen w-full">
      <Image
        src={image}
        alt={name}
        fill
        sizes="100vw"
        placeholder={bannerBase64 ? "blur" : undefined}
        blurDataURL={bannerBase64 ?? undefined}
        className="object-cover"
      />
    </div>
  );
}
