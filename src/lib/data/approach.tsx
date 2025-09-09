import Inter from "@/components/inter";

export const process: {
  label: string;
  description: React.ReactNode;
}[] = [
  {
    label: "Discover",
    description:
      "We start by learning about your organization; how you operate and what sets you apart.",
  },
  {
    label: "Define",
    description:
      "We determine what success looks like to ensure the things we build together have purpose.",
  },
  {
    label: "Direct",
    description:
      "Working collaboratively, we outline the solutions that will get you where you want to go.",
  },
  {
    label: "Develop",
    description:
      "This is where the doing takes place, building on the gathered knowledge to make the things that make the difference.",
  },
  {
    label: "Deliver",
    description:
      "Deploying the work includes everything from launching a single website to starting a years, long multitiered campaign.",
  },
  {
    label: "Deliberate",
    description:
      "We measure the effectiveness of the work during and following a project, making adjustments where needed, to be sure goals are met.",
  },
];

export const values: {
  label: string;
  description: React.ReactNode;
}[] = [
  {
    label: "Break the Mold",
    description: (
      <>
        We challenge the expected. Safe is boring, and boring doesn
        <Inter>&apos;</Inter>t move people.
      </>
    ),
  },
  {
    label: "Create with Purpose",
    description:
      "Every choice we make is intentional, design, words, strategy, all built to matter and move.",
  },
  /*{
    label: "Lead with Honesty",
    description:
      "We tell it like it is. Transparency builds trust, and trust builds better work.",
  },
  {
    label: "Stay Curious",
    description:
      "We question everything, and keep asking until we get to something real.",
  },*/
  {
    label: "Be Human",
    description:
      "We bring personality, empathy, and edge. Because brands that feel real, win.",
  },
];

export const services: {
  label: string;
  features: string[];
  description: React.ReactNode;
}[] = [
  {
    label: "Research",
    features: [
      "Trend Tracking & Forecasting",
      "Competitive Brand Analysis",
      "Audience Mapping",
      "Sound, Hashtag, and Algorithm Trends",
      "Influencer Landscape Scanning",
    ],
    description:
      "We dig deep through inquiry, analysis and reasoning to help you understand what matters most to the people that matter most to you.",
  },
  {
    label: "Strategy",
    features: [
      "Social Content Strategy",
      "Campaign Development",
      "Engagement & Community Strategy",
      "Influencer Collaboration",
      "Launch & Rollout Planning",
      "Cross Channel Consistency Guidelines",
    ],
    description:
      "You tell us what you want people to do, and we tell you how to get them to do it. We translate knowledge into meaningful action.",
  },
  {
    label: "Branding",
    features: [
      "Brand Strategy",
      "Mission, Vision, Values Statements",
      "Naming & Logo Design",
      "Brand Identity & Style Guidelines",
      "Brand Positioning & Messaging",
    ],
    description:
      "Your brand is the sum total of everything that comes to mind when people think about your product or organization. We help you tell your story the way it ought to be told.",
  },
  {
    label: "Digital",
    features: [
      "Instagram & TikTok Management",
      "Content Calendar Creation",
      "Static Photo & Video Production",
      "Graphic Design",
      "Trend Driven Copy",
      "Community Management",
      "Search Engine Optimization (SEO)",
      "Analytics Monitoring",
    ],
    description:
      "We understand the digital space through and through, and we can help you effectively navigate the ever evolving medium.",
  },
];
