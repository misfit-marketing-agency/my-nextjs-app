import { Metadata } from "next";

import PrivacyPolicyMain from "./_components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy | Misfit",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyMain />;
}
