import ScrollMask from "@/components/layout/ScrollMask";

export default function Home() {
  return (
    <main className="bg-white">
      <ScrollMask
        desktopVideo="/video/intro.mp4"
        mobileVideo="https://cd.duffldigital.in/video/mobile-sample2.mp4"
        height="250vh"
      />
    </main>
  );
}



// import ScrollMask from "@/components/layout/ScrollMask";

// export default function Home() {
//   return (
//     <main className="bg-black">
//       <ScrollMask
//         image="https://png.pngtree.com/thumb_back/fh260/background/20241019/pngtree-nature-high-resolution-desktop-wallpaper-hd-image_16414250.jpg"
//         height="250vh"
//       />
//     </main>
//   );
// }