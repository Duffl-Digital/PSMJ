import React from "react";

/**
 * Icons: put your files in /public/images/advantage/ (icon-1 ... icon-6).
 * .svg or .png both work, just change the extension in the <img src>.
 */
export default function HomeAdvantage() {
  return (
    <section
      aria-labelledby="advantage-heading"
      className="relative w-full overflow-hidden bg-white px-4 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2
          id="advantage-heading"
          className="mb-8 text-center text-sm font-bold uppercase tracking-wide text-[#2B2B33] sm:mb-10 sm:text-base"
        >
          The Advantage
        </h2>

        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-500 to-transparent md:block"
          />

          <div className="flex flex-col gap-4 md:gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-0">
            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-r from-[#E8F3E8] via-[#F4F9F4] to-white">
              <img src="/images/advantage/icon-1.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-last md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit amet</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>

            <div aria-hidden="true" className="hidden items-center justify-center md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
            </div>

            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-l from-[#DFF0FA] via-[#F1F8FC] to-white">
              <img src="/images/advantage/icon-2.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-first md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit amet</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-0">
            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-r from-[#FCEADF] via-[#FEF5EF] to-white">
              <img src="/images/advantage/icon-3.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-last md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit amet</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>

            <div aria-hidden="true" className="hidden items-center justify-center md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
            </div>

            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-l from-[#FDF0D6] via-[#FEF8EB] to-white">
              <img src="/images/advantage/icon-4.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-first md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit amet</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_72px_1fr] md:gap-0">
            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-r from-[#E8E6F3] via-[#F4F3FA] to-white">
              <img src="/images/advantage/icon-5.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-last md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>

            <div aria-hidden="true" className="hidden items-center justify-center md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
            </div>

            <article className="flex h-full items-center gap-3 rounded-lg px-4 py-4 sm:px-5 md:min-h-[92px] bg-gradient-to-l from-[#FBE1EE] via-[#FDF1F7] to-white">
              <img src="/images/advantage/icon-6.svg" alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain md:order-first md:mx-1" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[11px] font-bold uppercase leading-snug text-[#2B2B33] sm:text-xs">Lorem ipsum dolor sit amet</h3>
                <p className="mt-1.5 text-justify text-[10.5px] leading-[1.7] text-[#4A4A55] sm:text-[11px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

