import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type Props = {
  name?: string;
  email?: string;
  companyName?: string;
  service?: string[];
  timeline?: string;
  budget?: string;
  details?: string;
};

const PlanProjectEmail = function ({
  name = "John Doe",
  email = "john.doe@example.com",
  companyName = "Acme Corp",
  service = ["Web Development", "UI/UX Design"],
  timeline = "3-6 months",
  budget = "$50,000 - $100,000",
  details = "We're looking to build a comprehensive e-commerce platform with modern design and seamless user experience. The project should include mobile responsiveness, payment integration, and admin dashboard.",
}: Props) {
  const previewText = `New project inquiry from ${name} at ${companyName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 mx-auto my-auto px-2 font-sans">
          <Container className="border-gray-200 mx-auto my-[40px] max-w-[600px] rounded border border-solid bg-white p-[20px]">
            {/* Header */}
            <Section className="mb-[32px]">
              <Heading className="text-gray-900 mx-0 mb-[8px] p-0 text-center text-[28px] font-bold">
                New Project Inquiry
              </Heading>
              <Text className="text-gray-600 text-center text-[16px]">
                A potential client has submitted a project planning form
              </Text>
            </Section>

            {/* Contact Information */}
            <Section className="mb-[24px]">
              <Heading className="text-gray-900 mb-[16px] text-[20px] font-semibold">
                Contact Information
              </Heading>
              <div className="bg-gray-50 rounded-lg p-[16px]">
                <Text className="text-gray-800 mb-[8px] text-[14px] leading-[20px]">
                  <strong>Name:</strong> {name}
                </Text>
                <Text className="text-gray-800 mb-[8px] text-[14px] leading-[20px]">
                  <strong>Email:</strong> {email}
                </Text>
                <Text className="text-gray-800 text-[14px] leading-[20px]">
                  <strong>Company:</strong> {companyName}
                </Text>
              </div>
            </Section>

            {/* Project Details */}
            <Section className="mb-[24px]">
              <Heading className="text-gray-900 mb-[16px] text-[20px] font-semibold">
                Project Details
              </Heading>
              <div className="bg-gray-50 rounded-lg p-[16px]">
                <Text className="text-gray-800 mb-[8px] text-[14px] leading-[20px]">
                  <strong>Services Needed:</strong>
                </Text>
                <div className="mb-[12px] ml-[16px]">
                  {service.map((s, index) => (
                    <Text
                      key={index}
                      className="text-gray-700 mb-[4px] text-[14px] leading-[20px]"
                    >
                      • {s}
                    </Text>
                  ))}
                </div>
                <Text className="text-gray-800 mb-[8px] text-[14px] leading-[20px]">
                  <strong>Timeline:</strong> {timeline}
                </Text>
                <Text className="text-gray-800 text-[14px] leading-[20px]">
                  <strong>Budget:</strong> {budget}
                </Text>
              </div>
            </Section>

            {/* Project Description */}
            <Section className="mb-[32px]">
              <Heading className="text-gray-900 mb-[16px] text-[20px] font-semibold">
                Project Description
              </Heading>
              <div className="bg-gray-50 rounded-lg p-[16px]">
                <Text className="text-gray-800 text-[14px] leading-[22px]">
                  {details}
                </Text>
              </div>
            </Section>

            <Hr className="border-gray-200 mx-0 my-[26px] w-full border border-solid" />

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-gray-500 text-[12px] leading-[18px]">
                This project inquiry was submitted through your website&apos;s
                contact form.
                <br />
                Generated on {new Date().toLocaleDateString()} at{" "}
                {new Date().toLocaleTimeString()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PlanProjectEmail.PreviewProps = {
  name: "Sarah Johnson",
  email: "sarah.johnson@techstartup.com",
  companyName: "TechStartup Inc",
  service: ["Web Development", "Mobile App Development", "UI/UX Design"],
  timeline: "4-6 months",
  budget: "$75,000 - $150,000",
  details:
    "We're a fast-growing tech startup looking to build a comprehensive platform that includes a web application, mobile app, and admin dashboard. The platform should handle user authentication, real-time data processing, and integrate with third-party APIs. We're particularly interested in modern technologies like React, Node.js, and cloud infrastructure.",
} as Props;

export default PlanProjectEmail;
