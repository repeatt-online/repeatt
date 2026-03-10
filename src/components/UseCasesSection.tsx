import { Home, Sparkles, CookingPot, Users, Smartphone, Car } from "lucide-react";

const cases = [
{ icon: Home, label: "Rent", desc: "Automate monthly rent payments." },
{ icon: Sparkles, label: "Maid", desc: "Pay household help automatically." },
{ icon: CookingPot, label: "Cook", desc: "Never forget monthly cook salary." },
{ icon: Users, label: "Parents", desc: "Send allowance automatically." },
{ icon: Smartphone, label: "Apps", desc: "Track subscriptions like Netflix or Spotify." },
{ icon: Car, label: "Services", desc: "Car wash, internet, gym memberships." }];


const UseCasesSection = () => {
  return (
    <section className="py-12 px-4 bg-accent/30">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6">
          Payments that repeat every month.
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {cases.map((c, i) =>
          <div
            key={i}
            className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-card transition-shadow flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center mb-2">
                <c.icon className="w-4.5 h-4.5 text-accent-foreground" />
              </div>
              <p className="font-semibold text-sm text-foreground">{c.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default UseCasesSection;