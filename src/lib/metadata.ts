import { getURL } from "./config";

export const siteMetadata = {
  title: "Misfit Marketing",
  author: "Misfit Marketing",
  headerTitle: "Misfit Marketing",
  description:
    "Misfit Marketing is a creative studio that helps brands build their digital presence and grow their audience. We are based in Austin, TX and Brooklyn, NY.",
  language: "en-us",
  theme: "light",
  siteUrl: new URL(getURL()),
  socialBanner: "/assets/images/og.png",
  locale: "en-US",
};

export default siteMetadata;
