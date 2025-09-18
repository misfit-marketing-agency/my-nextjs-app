import { Metadata } from "next";

import ApproachMain from "./_components";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Discover how Misfit Marketing creates digital experiences that move the needle. Our approach combines research, strategy, branding, and digital services to help brands break the mold. We don't just create to impress - we create to provoke, convert, and spark real action.",
};

export default function ApproachPage() {
  return <ApproachMain />;
}
