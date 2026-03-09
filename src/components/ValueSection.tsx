import { Check } from "lucide-react";

const points = [
  "Set payments to repeat",
  "Track subscriptions",
  "See total monthly recurring spend",
  "Never forget monthly payments again",
];

const ValueSection = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          One place for everything that repeats.
        </h2>
        <div className="space-y-3 text-left max-w-xs mx-auto">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
