import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import PlatformModules from "@/components/PlatformModules";
import FeatureSection from "@/components/FeatureSection";
import PayrollSection from "@/components/PayrollSection";
import AISection from "@/components/AISection";
import AskShenll from "@/components/AskShenll";
import MobileExperience from "@/components/MobileExperience";
import PerformanceSection from "@/components/PerformanceSection";
import Industries from "@/components/Industries";
import ProductShowcase from "@/components/ProductShowcase";
import WhyShenll from "@/components/WhyShenll";
import CustomerStories from "@/components/CustomerStories";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <PlatformModules />
      <FeatureSection />
      <PayrollSection />
      <AISection />
      <AskShenll />
      <MobileExperience />
      <PerformanceSection />
      <Industries />
      <ProductShowcase />
      <WhyShenll />
      <CustomerStories />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
