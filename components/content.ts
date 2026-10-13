export type Logo = { name: string; src: string;  height: number };
export type Slide = { src: string; alt: string };

// Put your logo files in /public/logos and photos in /public/gallery
export const logos: Logo[] = [
  { name: "Infosys", src: "/images/clientele/logo/5.svg",  height: 44 },
  { name: "CBRE", src: "/images/clientele/logo/24.svg",  height: 44 },
  { name: "PayPal", src: "/images/clientele/logo/23.svg",  height: 44 },
  { name: "Trimble", src: "/images/clientele/logo/21.svg",  height: 44 },
  { name: "Verizon", src: "/images/clientele/logo/16.svg", height: 44 },
  
   { name: "Cognizant", src: "/images/clientele/logo/22.svg",  height: 44 },
  { name: "Oracle", src: "/images/clientele/logo/4.svg",  height: 44 },
  { name: "Axis Bank", src: "/images/clientele/logo/9.svg",  height: 44 },
  { name: "Tata", src: "/images/clientele/logo/27.svg",  height: 44 },
];

// Use 5+ slides: Swiper's loop + coverflow needs enough slides to look right
export const slides: Slide[] = [
  { src: "/images/home/gallery/img-1.jpg", alt: "Attendee smiling at the expo" },
  { src: "/images/home/gallery/img-2.jpg", alt: "Expo hall with exhibitor booths" },
  { src: "/images/home/gallery/img-3.jpg", alt: "Visitor walking through the venue" },
  { src: "/images/home/gallery/img-4.jpg", alt: "Networking at the event" },
  { src: "/images/home/gallery/img-5.jpg", alt: "Panel session on the main stage" },
];
