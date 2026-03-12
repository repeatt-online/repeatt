import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WaitlistModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
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
    try {
      const res = await fetch("https://formspree.io/f/xzdjrlbz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        // Reset after close animation
        setTimeout(() => {
          setSubmitted(false);
          setEmail("");
        }, 300);
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm top-[35%] sm:top-[50%]">
        {submitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-foreground">✓</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">You're on the list!</h2>
            <p className="text-sm text-muted-foreground mt-2">
              We'll invite early users soon.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center">Join the Waitlist</DialogTitle>
              <DialogDescription className="text-center">
                Early members get free forever access.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {error && <p className="text-xs text-destructive mt-1">{error}</p>}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="hero"
                  size="default"
                  className="h-10 text-sm rounded-full px-6"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : <>Submit <span className="ml-1">→</span></>}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
