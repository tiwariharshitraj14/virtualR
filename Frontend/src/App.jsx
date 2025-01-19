import FeatureSection from "./componets/FeatureSection";
import Footer from "./componets/Footer";
import HeroSection from "./componets/HeroSection";
import Navbar from "./componets/Navbar";
import Pricing from "./componets/Pricing";
import Testimonials from "./componets/Testimonials";
import Workflow from "./componets/Workflow";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
     
    </>
  );
};

export default App;