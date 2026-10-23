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
   <section className="relative overflow-hidden xl:max-w-[1600px] xl:mx-auto ">
  <div className="relative mx-auto grid  items-center gap-10  md:py-16 pt-16 pb-8  lg:grid-cols-[1fr_auto_1.2fr]  lg:gap-12">
   

    {/* logos: second on mobile, first on desktop */}
    <div className="order-1 lg:order-1 lg:w-full md:w-[70%] md:mx-0 mx-auto sm:w-[80%] w-11/12 xl:pl-[8%]">
      <ClientLogos />
    </div>

    {/* divider: hidden on mobile, since it would sit between the gallery and logos */}
    <div
      className="order-2 hidden h-px w-full bg-[linear-gradient(180deg,#3383BB_0.99%,#E6F3FD_50.44%,#2E7BB5_100%)] lg:order-2 lg:block lg:h-48 lg:w-px"/>

    {/* gallery: first on mobile, last on desktop */}
    <div className="order-3 min-w-0 md:w-[70%] w-[90%] justify-self-end lg:order-3 lg:w-full lg:justify-self-stretch">
      {/* <GallerySlider slides={slides} /> */}
       <GallerySliderNew items={images} autoPlay interval={3000} />
    </div>
  </div>
</section>
  );
}
