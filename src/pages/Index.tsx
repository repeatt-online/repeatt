import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardVisual from "@/components/DashboardVisual";
import UseCasesSection from "@/components/UseCasesSection";
import ValueSection from "@/components/ValueSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onWaitlistClick={scrollToWaitlist} />
      <WaitlistSection ref={waitlistRef} />
      <DashboardVisual />
      <UseCasesSection />
      <ValueSection />
      <Footer />
    </div>
  );
};

export default Index;
