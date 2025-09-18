import { Metadata } from "next";
import WorkMain from "./_components";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our portfolio of brands that dare to misfit. Discover how we help brands break the mold and build for what's now, what's next, and what's never been done before.",
};

export default function Work() {
  return <WorkMain />;
}
