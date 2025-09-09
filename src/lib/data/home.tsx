import { Image } from "@/types";
import Inter from "@/components/inter";

export const features: {
  label: string;
  description: React.ReactNode;
  image: Image;
  href: string;
}[] = [
  {
    label: "Research",
    description: (
      <>
        It<Inter>&apos;</Inter>s on us to understand your organization to ensure
        our work aligns with your goals.
      </>
    ),
    image: {
      path: "/assets/images/research.png",
      width: 2100,
      height: 2100,
    },
    href: "/approach#research",
  },
  {
    label: "Strategy",
    description:
      "You tell us what you want people to do, and we work together to get them to do it.",
    image: {
      path: "/assets/images/strategy.png",
      width: 2100,
      height: 2100,
    },
    href: "/approach#strategy",
  },
  {
    label: "Branding",
    description:
      "Your brand is the story you tell. We help you tell that story the way it ought to be told.",
    image: {
      path: "/assets/images/branding.png",
      width: 2100,
      height: 2100,
    },
    href: "/approach#branding",
  },
  {
    label: "Digital",
    description:
      "We get the digital space and can help you navigate the ever evolving medium.",
    image: {
      path: "/assets/images/digital.png",
      width: 2100,
      height: 2100,
    },
    href: "/approach#digital",
  },
];

export const works: {
  name: string;
  description: React.ReactNode;
  href: string;
  background?: Image;
  image?: Image;
}[] = [
  {
    name: "Unagi",
    description:
      "Helping a scooter brand move a community, and turn everyday rides into something electric.",
    href: "/work/unagi-scooters",
    background: {
      path: "/assets/images/unagi-bg.png",
      width: 1486,
      height: 733,
    },
    image: {
      path: "/assets/images/unagi.png",
      width: 964,
      height: 670,
    },
  },
  {
    name: "The Gram",
    description:
      "Setting a new standard for cannabis, and redefining what high looks like.",
    href: "/work/the-gram",
  },
  {
    name: "Flock Social",
    description:
      "Cutting through the noise, and redefining what going out feels like.",
    href: "/work/flock-social",
  },
  {
    name: "Inner Circle",
    description:
      "Helping a dating community go beyond the app, and bring chemistry back IRL.",
    href: "/work/the-inner-circle",
  },
];
