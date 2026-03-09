import { Link } from "react-router-dom";
import { RefreshCw } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container max-w-lg mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <RefreshCw className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-bold text-sm text-foreground">Repeat</span>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <a href="mailto:hello@repeatpay.in" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground mt-4">© 2026 Repeat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
