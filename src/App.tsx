import Header from "./components/layout/static/Header";
import AboutSection from "./feature/static/views/AboutSection";
import Footer from "./feature/static/views/Footer";
import HeroSection from "./feature/static/views/HeroSection";
import ProjectSection from "./feature/static/views/ProjectSection";
import QuotesSection from "./feature/static/views/QuotesSection";
import Testimonial from "./feature/static/views/Testimonial";
function App() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Header />
      <HeroSection />
      <QuotesSection />
      <AboutSection />
      <ProjectSection />
      <QuotesSection />
      <Testimonial />
      <QuotesSection />
      <Footer />
    </main>
  );
}

export default App;
