import { Metadata } from "next";

import HomeMain from "./home/_components";

export const metadata: Metadata = {
  title: "Misfit Marketing | Social Media Agency",
  description:
    "We are a full-service boutique agency based in NYC and Austin, specializing in social media strategy, management, influencer marketing, and content creation.",
};

export default function Home() {
  return <HomeMain />;
}
