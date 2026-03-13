import { Button } from "@/components/ui/button";
import ProductVisual from "./ProductVisual";

const HeroSection = ({ onWaitlistClick }: {onWaitlistClick: () => void;}) => {
  return (
    <section className="pt-20 pb-8 px-4 bg-primary-foreground text-primary-foreground">
      <div className="container max-w-lg mx-auto text-center text-primary-foreground">
        <h1 className="font-extrabold text-foreground leading-tight animate-fade-up sm:text-3xl text-xl" style={{ fontWeight: 800 }}>
          Rent paid. Maid paid. You didn't lift a finger.
        </h1>
        <p className="mt-3 text-sm sm:text-base animate-fade-up text-muted-foreground font-medium" style={{ animationDelay: "0.1s" }}>
          Rent • Maid • Cook • Driver • Subscriptions
        </p>
        <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <ProductVisual />
        </div>
        <div className="mt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="hero"
            size="default"
            className="h-10 text-sm rounded-full px-6"
            onClick={onWaitlistClick}
          >
            Join Waitlist <span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </section>);

};

export default HeroSection;