import Header from "./components/layout/static/Header";
import AboutSection from "./feature/static/views/AboutSection";
import HeroSection from "./feature/static/views/HeroSection";
import QuotesSection from "./feature/static/views/QuotesSection";

import WhatIDoSection from "./feature/static/views/WhatIDoSection";
import ProjectSection from "./feature/static/views/ProjectSection";
import Footer from "./feature/static/views/Footer";
import YStack from "./components/layout/container/YStack";

function App() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto">
      <Header />
      <HeroSection />

      <YStack className="my-[200px]">
        <QuotesSection title="I am" delay={0.25}>
          a person who focus on producing a high
        </QuotesSection>
        <QuotesSection delay={0.35}>
          quality products that turns client idea
        </QuotesSection>
        <QuotesSection>into a reality</QuotesSection>
      </YStack>

      <AboutSection />

      <WhatIDoSection />

      <ProjectSection />

      <YStack className="my-[200px]">
        <QuotesSection title="I am">
          Progress is impossible without change, and those who cannot change
          their minds cannot change anything.
        </QuotesSection>
      </YStack>

      {/* <Testimonial /> */}

      <Footer />
    </main>
  );
}

export default App;
