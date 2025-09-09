import Inter from "@/components/inter";

export const team: {
  image: string;
  name: string;
  position: string | React.ReactNode;
  other: string;
}[] = [
  {
    image: "/assets/images/_409e83764bfb9e9194498fc7f300507b1b3829f3.jpg",
    name: "Sydney Abrams",
    position: (
      <>
        Co<Inter>-</Inter>Founder
      </>
    ),
    other: "Creative Director",
  },
  {
    image: "/assets/images/_4723d060ebb42116b1d1e8d09668b1ca75de144a.jpg",
    name: "Grant Shapiro",
    position: (
      <>
        Co<Inter>-</Inter>Founder
      </>
    ),
    other: "Chief Growth Officer",
  },
];

export const about: {
  label: string;
  value: string;
}[] = [
  {
    label: "Not our first rodeo",
    value: "7 years of experience",
  },
  {
    label: "Locations",
    value: "NYC, ATX",
  },
  {
    label: "Team Size",
    value: "Small enough to get stuff done, big enough to do it well",
  },
  {
    label: "Integrated Approach",
    value: "Brand, digital, content, community, & marketing all under one roof",
  },
  {
    label: "In-house content studio",
    value: "High capabilities across low to high fidelity content creation",
  },
  {
    label: "Experienced",
    value: "Direct access to the partners",
  },
  {
    label: "Engaged Entrepreneurs",
    value: "Direct access to the partners",
  },
  {
    label: "Ethos",
    value: "We make work that works and have fun doing it",
  },
];
