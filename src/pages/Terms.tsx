import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => (
  <div className="min-h-screen bg-background px-4 py-12">
    <div className="container max-w-lg mx-auto">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="text-2xl font-bold text-foreground mb-4">Terms of Service</h1>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>Repeat is currently under development. The product is not yet available for public use.</p>
        <p>By joining the waitlist, you are expressing interest in being notified when Repeat launches. <strong className="text-foreground">Joining the waitlist does not create a financial service relationship</strong> of any kind.</p>
        <p>We reserve the right to modify these terms as the product evolves. For questions, contact <a href="mailto:hello@repeatpay.in" className="text-primary hover:underline">hello@repeatpay.in</a>.</p>
      </div>
    </div>
  </div>
);

export default Terms;
