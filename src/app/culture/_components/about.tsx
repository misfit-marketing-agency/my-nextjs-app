import { about } from "@/lib/data/culture";

export default function CultureAbout() {
  return (
    <div>
      <div className="container !pt-14">
        <div className="flex w-full flex-col gap-8">
          <h2 className="font-georgia sm:text-10xl text-center text-7xl">
            Misfit at a Glance
          </h2>
          <div className="grid w-full grid-cols-2 items-stretch gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {about.map(({ label, value }, index) => (
              <div
                key={index}
                className="bg-danger flex h-auto min-h-[200px] flex-col gap-2 overflow-hidden rounded-[150px] p-4 sm:min-h-[278px]"
              >
                <div className="border-background h-full rounded-full border bg-transparent px-4 py-14 sm:py-20">
                  <div className="flex h-full flex-col items-center justify-center gap-1">
                    <p className="font-helvetica text-background/70 text-center text-sm uppercase">
                      {label}
                    </p>
                    <p className="font-helvetica text-background text-center text-base sm:text-xl">
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
