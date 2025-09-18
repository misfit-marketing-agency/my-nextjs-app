import { Metadata } from "next";

import PrivacyPolicyMain from "./_components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Misfit Marketing's Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website. Learn about our data collection practices, your rights, and how we maintain the security of your information.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyMain />;
}
