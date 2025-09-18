import { Metadata } from "next";

import CultureMain from "./_components";

const title = "Culture";
const description =
  "Discover the culture that drives Misfit Marketing. Learn about our values, team, and the creative environment that fuels our passion for helping brands break the mold and build authentic connections.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default function Culture() {
  return <CultureMain />;
}
