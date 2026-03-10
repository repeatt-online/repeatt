import { Button } from "@/components/ui/button";
import ProductVisual from "./ProductVisual";

const HeroSection = ({ onWaitlistClick }: { onWaitlistClick: () => void }) => {
  return (
    <section className="pt-20 pb-8 px-4 bg-accent/50">
      <div className="container max-w-lg mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight animate-fade-up">
          Set any payment on{" "}
          <span className="text-gradient-brand">repeatt.</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Rent • Maid • Cook • Driver • Subscriptions
        </p>
        <Button
          variant="hero"
          size="lg"
          className="mt-6 w-full sm:w-auto text-base px-8 py-3 h-12 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
          onClick={onWaitlistClick}
        >
          Get Early Access <span className="ml-1">→</span>
        </Button>
        <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <ProductVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
