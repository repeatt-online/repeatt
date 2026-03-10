import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const options = [
"Rent",
"Maid",
"Cook",
"Subscriptions",
"Family allowance",
"Other"];


const WaitlistSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    const { error: dbError } = await supabase.from("waitlist").insert({
      email: trimmed,
      payment_preference: payment || null
    });

    setLoading(false);

    if (dbError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section ref={ref} className="py-16 px-4 bg-accent/30">
        <div className="container max-w-lg mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-primary-foreground">✓</span>
          </div>
          <h2 className="text-xl font-bold text-foreground">You're on the list!</h2>
          <p className="text-sm text-muted-foreground mt-2">
            We'll invite early users soon.
          </p>
        </div>
      </section>);

  }

  return (
    <section ref={ref} className="py-16 px-4 bg-accent/30">
      <div className="container max-w-lg mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Be the first to try Repeatt.
        </h2>
        <p className="text-sm text-muted-foreground mt-2 mb-6">

        </p>

        <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto text-left">
          <div>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
          </div>
          








          
          <Button variant="hero" size="lg" className="w-full h-12 text-base" type="submit" disabled={loading}>
            {loading ? "Joining..." : <>Get Early Access <span className="ml-1">→</span></>}
          </Button>
        </form>
      </div>
    </section>);

});

WaitlistSection.displayName = "WaitlistSection";

export default WaitlistSection;