import Header from "./components/layout/static/Header";
import AboutSection from "./feature/static/views/AboutSection";
import Footer from "./feature/static/views/Footer";
import HeroSection from "./feature/static/views/HeroSection";
import ProjectSection from "./feature/static/views/ProjectSection";
import QuotesSection from "./feature/static/views/QuotesSection";
import Testimonial from "./feature/static/views/Testimonial";

import { motion } from "framer-motion";
import useCusorMotion from "./hooks/useCusorMotion";
import { useAtomValue } from "jotai";
import { cursorAtom } from "./service/atoms/utils.atom";
import WhatIDoSection from "./feature/static/views/WhatIDoSection";

//TODO: Offset of the mouse when the size is 200 (Important)

function App() {
  const { width, height } = useAtomValue(cursorAtom);

  // make a way that update the event using effect (async) or layout (sync)
  const { cursorXSpring, cursorYSpring } = useCusorMotion({});

  return (
    <main className="max-w-screen-xl mx-auto">
      <Header />
      <HeroSection />
      <QuotesSection title="I am">
        a person who focus on producing a high quality products that turns
        client idea into a reality
      </QuotesSection>
      <AboutSection />
      <WhatIDoSection />
      <ProjectSection />
      <QuotesSection title="I love">
        Crafting impactful Product and high-end websites tailored for your
        needs.
      </QuotesSection>
      <Testimonial />
      <QuotesSection title="I love">
        Crafting impactful Product and high-end websites tailored for your
        needs.
      </QuotesSection>
      <Footer />

      <motion.div
        initial={{
          width,
          height,
        }}
        animate={{ opacity: 1, width, height }}
        transition={{ duration: 0.5 }}
        className="cursor fixed top-0 left-0  bg-black rounded-full z-[999] pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          zIndex: 999,
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
      ></motion.div>
    </main>
  );
}

export default App;
