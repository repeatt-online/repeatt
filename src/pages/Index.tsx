import { useRef, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaitlistSection from "@/components/WaitlistSection";

const DashboardVisual = lazy(() => import("@/components/DashboardVisual"));
const UseCasesSection = lazy(() => import("@/components/UseCasesSection"));
const ValueSection = lazy(() => import("@/components/ValueSection"));
const Footer = lazy(() => import("@/components/Footer"));

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
      <Suspense fallback={<div className="h-48" />}>
        <DashboardVisual />
        <UseCasesSection />
        <ValueSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
