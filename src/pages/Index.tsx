import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaitlistModal from "@/components/WaitlistModal";

const DashboardVisual = lazy(() => import("@/components/DashboardVisual"));
const UseCasesSection = lazy(() => import("@/components/UseCasesSection"));
const ValueSection = lazy(() => import("@/components/ValueSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const openWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={openWaitlist} />
      <HeroSection onWaitlistClick={openWaitlist} />
      <Suspense fallback={<div className="h-48" />}>
        <DashboardVisual />
        <UseCasesSection />
        <ValueSection />
        <Footer />
      </Suspense>
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
