import { Metadata } from "next";

import CultureMain from "./_components";

export const metadata: Metadata = {
  title: "Culture",
  description: "Culture at Misfit",
};

export default function Culture() {
  return <CultureMain />;
}
