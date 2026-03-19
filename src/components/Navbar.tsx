import { Button } from "@/components/ui/button";

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary-foreground">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

const Navbar = ({ onWaitlistClick }: { onWaitlistClick?: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <RefreshIcon />
          </div>
          <span className="text-lg font-bold text-primary">Repeatt</span>
        </div>
        <Button
          variant="hero"
          size="sm"
          className="text-xs px-4 rounded-full"
          onClick={onWaitlistClick}
        >
          Download for Free <span className="ml-1">→</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
