import { getURL } from "./config";

export const siteMetadata = {
  title: "Misfit",
  author: "Misift",
  headerTitle: "Misfit",
  description:
    "Misfit is a creative studio that helps brands build their digital presence and grow their audience.",
  language: "en-us",
  theme: "light",
  siteUrl: new URL(getURL()),
  socialBanner: "/assets/images/social/og.png",
  locale: "en-US",
};

export default siteMetadata;
