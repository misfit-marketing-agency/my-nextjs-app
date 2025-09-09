"use client";

import React from "react";

import { privacyPolicy } from "@/lib/data/privacy-policy";

export default function PrivacyPolicyMain() {
  return (
    <div className="w-full">
      <div className="container !pt-10 sm:!pt-14">
        {/* Main Title */}
        <h1 className="mb-12 text-7xl font-medium sm:mb-16">Privacy Policy</h1>

        {/* Privacy Policy Content */}
        <div className="flex flex-col gap-10 font-konstanz">
          {privacyPolicy.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 border-b border-b-secondary pb-10"
            >
              {/* Section Heading */}
              {section.heading && (
                <h2 className="font-sans-alt text-lg font-bold leading-[1.6]">
                  {section.heading}
                </h2>
              )}

              {/* Section Content */}
              <div className="flex flex-col gap-8">
                {section.content.map((item, contentIndex) => {
                  if (typeof item === "string") {
                    return (
                      <p
                        key={contentIndex}
                        className="text-base leading-[1.75]"
                      >
                        {item}
                      </p>
                    );
                  }

                  if (typeof item === "object" && item !== null) {
                    if (
                      "type" in item &&
                      item.type === "ul" &&
                      "items" in item
                    ) {
                      return (
                        <div key={contentIndex} className="flex flex-col gap-8">
                          {item.label && (
                            <p className="text-base leading-[1.75]">
                              {item.label}
                            </p>
                          )}
                          <ul className="ml-3 list-inside list-disc space-y-2 sm:ml-4">
                            {item.items.map((listItem, index) => (
                              <li
                                key={index}
                                className="text-base leading-[1.75]"
                              >
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    if (
                      "type" in item &&
                      item.type === "ol" &&
                      "label" in item
                    ) {
                      return (
                        <div key={contentIndex} className="flex flex-col gap-8">
                          {item.label && (
                            <p className="text-base leading-[1.75]">
                              {item.label}
                            </p>
                          )}
                          <ol className="ml-3 list-inside list-decimal space-y-2 sm:ml-4">
                            {item.items.map((listItem, index) => (
                              <li
                                key={index}
                                className="text-base leading-[1.75] marker:font-inter"
                              >
                                {listItem}
                              </li>
                            ))}
                          </ol>
                        </div>
                      );
                    }

                    // Handle React.ReactNode (like the contact section)
                    if (React.isValidElement(item)) {
                      return <div key={contentIndex}>{item}</div>;
                    }
                  }

                  return null;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}
