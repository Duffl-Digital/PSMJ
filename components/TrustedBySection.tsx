import ClientLogos from "./ClientLogos";
import GallerySlider from "./GallerySlider";
import { logos, slides } from "./content";

export default function TrustedBySection() {
  return (
   <section className="relative overflow-hidden bg-white">
  <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_auto_1.2fr] lg:gap-12">
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-64 rounded-full bg-indigo-50 blur-3xl" />

    {/* logos: second on mobile, first on desktop */}
    <div className="order-2 lg:order-1">
      <ClientLogos />
    </div>

    {/* divider: hidden on mobile, since it would sit between the gallery and logos */}
    <div
      className="order-3 hidden h-px w-full bg-slate-200 lg:order-2 lg:block lg:h-48 lg:w-px"
      aria-hidden
    />

    {/* gallery: first on mobile, last on desktop */}
    <div className="order-1 min-w-0 lg:order-3">
      <GallerySlider slides={slides} />
    </div>
  </div>
</section>
  );
}
