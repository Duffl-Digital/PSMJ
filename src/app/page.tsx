
import Home from "@/components/home";
import IntroVideo from "@/components/layout/IntroVideo";

export default function Index() {
  return (
    <IntroVideo
      desktopVideo="/video/intro.mp4"
      mobileVideo="/video/intro.mp4"
      showPromptBefore={2}
    >
      <Home />
    </IntroVideo>
  );
}