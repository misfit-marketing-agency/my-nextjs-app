import { Fragment } from "react";

import Divide from "@/components/divide";
import { process } from "@/lib/data/approach";

export default function ApproachProcess() {
  return (
    <div className="rounded-6xl bg-secondary">
      <div className="container">
        <div className="flex w-full flex-col gap-16">
          <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-start">
            <div className="flex flex-col gap-6 sm:gap-12">
              <h2 className="text-7xl font-medium text-primary">Our Process</h2>
              <div className="max-w-[580px]">
                <p className="font-konstanz text-xl text-primary">
                  Our process balances structure with flexibility, resulting in
                  solutions that are tailored to your individual needs.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-6xl border">
            <div className="flex-flex-col w-full gap-6">
              {process.map(({ label, description }, index) => {
                const count = index + 1;

                return (
                  <Fragment key={index}>
                    <div className="grid w-full grid-cols-[20px_0.6fr_1fr] items-center gap-8 px-4 py-8 sm:grid-cols-[32px_1fr_1fr] sm:gap-20 sm:px-8 sm:py-12">
                      <p className="font-inter text-sm text-primary sm:text-[18px]">
                        {count.toString().padStart(2, "0")}
                      </p>
                      <p className="mx-auto text-lg text-primary sm:text-3xl">
                        {label}
                      </p>
                      <p className="max-w-[560px] font-konstanz text-base text-primary sm:text-xl">
                        {description}
                      </p>
                    </div>
                    {count !== process.length && (
                      <Divide background="bg-primary" />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
