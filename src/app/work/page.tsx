import { Metadata } from "next";
import WorkMain from "./_components";

const title = "Work";
const description =
  "Explore our portfolio of brands that dare to misfit. Discover how we help brands break the mold and build for what's now, what's next, and what's never been done before.";
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

export default function Work() {
  return <WorkMain />;
}
