import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link
      aria-label="Home"
      href="/"
      className={cn("inline-flex items-center justify-center", className)}
    >
      <Image
        src="/assets/images/misfit.png"
        alt="Misfit"
        width={177.1}
        height={90.3}
        className="h-[calc(125px*90.3/177.1)] w-[125px] object-contain md:h-[88.2095px] md:w-[173px]"
      />
    </Link>
  );
}
