import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudies from "../components/CaseStudies";
import PricingSection from "../components/PricingSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import AIChatWidget from "../components/AIChatWidget";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <CaseStudies />
      <PricingSection />
      <FinalCTA />
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
