import ClientLogos from "./ClientLogos";
import GallerySlider from "./GallerySlider";
import GallerySliderNew ,{GalleryItem} from "./GallerySliderNew";
import { logos, slides } from "./content";
const images: GalleryItem[] = [
  { src: "/images/home/gallery/img-1.jpg", alt: "Event hall" },
  { src: "/images/home/gallery/img-2.jpg", alt: "Networking area" },
  { src: "/images/home/gallery/img-3.jpg", alt: "Booth visit" },
  { src: "/images/home/gallery/img-4.jpg", alt: "Conference" },
];
export default function TrustedBySection() {
  return (
   <section className="relative overflow-hidden ">
  <div className="relative mx-auto grid  items-center gap-10  py-16 lg:grid-cols-[1fr_auto_1.2fr] lg:gap-12">
   

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
      {/* <GallerySlider slides={slides} /> */}
       <GallerySliderNew items={images} autoPlay interval={3000} />
    </div>
  </div>
</section>
  );
}
