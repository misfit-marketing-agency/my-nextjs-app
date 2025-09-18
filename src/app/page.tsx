import { Metadata } from "next";

import HomeMain from "./home/_components";

const title = "Misfit Marketing | Social Media Agency";
const description =
  "We are a full-service boutique agency based in NYC and Austin, specializing in social media strategy, management, influencer marketing, and content creation.";
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

export default function Home() {
  return <HomeMain />;
}
