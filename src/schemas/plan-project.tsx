import * as yup from "yup";

import Inter from "@/components/inter";

export const serviceOptions = [
  { key: "social-media-management", label: "Social Media Management" },
  { key: "content-creation", label: "Content Creation" },
  { key: "creative-branding", label: "Creative Branding" },
  { key: "website-development", label: "Website Development" },
];

export const timelineOptions = [
  { key: "few-weeks", label: <>A few weeks</> },
  {
    key: "3-6-months",
    label: (
      <>
        3<Inter>-</Inter>6 months
      </>
    ),
  },
  {
    key: "6-12-months",
    label: (
      <>
        6<Inter>-</Inter>12 months
      </>
    ),
  },
  {
    key: "1-2-years",
    label: (
      <>
        1<Inter>-</Inter>2 years
      </>
    ),
  },
];

export const budgetOptions = [
  {
    key: "$2500-$5000",
    label: (
      <>
        <Inter>$</Inter>2,500 <Inter>-</Inter> <Inter>$</Inter>5,000
      </>
    ),
  },
  {
    key: "$5000-$7500",
    label: (
      <>
        <Inter>$</Inter>5,000 <Inter>-</Inter> <Inter>$</Inter>7,500
      </>
    ),
  },
  {
    key: "$7500-$10000",
    label: (
      <>
        <Inter>$</Inter>7,500 <Inter>-</Inter> <Inter>$</Inter>10,000
      </>
    ),
  },
  {
    key: "$10000+",
    label: (
      <>
        <Inter>$</Inter>10,000<Inter>+</Inter>
      </>
    ),
  },
];

export const planProjectSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  companyName: yup.string().required("Company name is required"),
  service: yup
    .array()
    .of(yup.string().required("Please let us know what you are looking for"))
    .min(1, "Please let us know what you are looking for")
    .required("Please let us know what you are looking for"),
  timeline: yup.string().required("Please let us know your timeline"),
  budget: yup.string().required("Please let us know your budget"),
  details: yup.string().required("Please let us know more about your project"),
});

export type PlanProjectSchema = yup.InferType<typeof planProjectSchema>;
