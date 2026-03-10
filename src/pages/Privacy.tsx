import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-background px-4 py-12">
    <div className="container max-w-lg mx-auto">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h1>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>Repeatt collects your email address and optional survey response solely for the purpose of managing our waitlist.</p>
        <p><strong className="text-foreground">Data collected:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email address</li>
          <li>Optional survey response (which payment you want to automate)</li>
          <li>Timestamp of submission</li>
        </ul>
        <p>Your data is <strong className="text-foreground">never sold or shared</strong> with third parties. We use it only to notify you about early access to Repeat.</p>
        <p>For questions, contact <a href="mailto:hello@repeatpay.in" className="text-primary hover:underline">hello@repeatpay.in</a>.</p>
      </div>
    </div>
  </div>
);

export default Privacy;
