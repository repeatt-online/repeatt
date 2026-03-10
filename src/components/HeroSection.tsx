import { Button } from "@/components/ui/button";
import ProductVisual from "./ProductVisual";

const HeroSection = ({ onWaitlistClick }: {onWaitlistClick: () => void;}) => {
  return (
    <section className="pt-20 pb-8 px-4 bg-accent/50">
      <div className="container max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-foreground leading-tight animate-fade-up sm:text-3xl" style={{ fontWeight: 800 }}>
          Set any payment on{" "}
          <span className="text-gradient-brand">Repeatt.</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base animate-fade-up text-muted-foreground font-medium" style={{ animationDelay: "0.1s" }}>
          Rent • Maid • Cook • Driver • Subscriptions
        </p>
        <Button
          variant="hero"
          size="lg"
          className="mt-6 text-sm px-6 py-2 h-10 rounded-full animate-fade-up"
          style={{ animationDelay: "0.2s" }}
          onClick={onWaitlistClick}>
          
          Join Waitlist <span className="ml-1">→</span>
        </Button>
        <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <ProductVisual />
        </div>
      </div>
    </section>);

};

export default HeroSection;