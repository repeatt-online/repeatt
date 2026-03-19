import { Link } from "react-router-dom";

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-primary-foreground">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container max-w-lg mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <RefreshIcon />
          </div>
          <span className="font-bold text-sm text-foreground">Repeatt</span>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <a href="mailto:hello@repeatpay.in" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground mt-4">© 2026 Repeatt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
