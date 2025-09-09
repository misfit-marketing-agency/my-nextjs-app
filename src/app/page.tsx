import { Metadata } from "next";

import HomeMain from "./home/_components";

export const metadata: Metadata = {
  title: "Home | Misit",
  description: "Home | Misfit",
};

export default function Home() {
  return <HomeMain />;
}
