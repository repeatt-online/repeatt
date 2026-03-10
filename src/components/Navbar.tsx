import { RefreshCw } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <RefreshCw className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-emerald-500">Repeatt</span>
        </div>
      </div>
    </nav>);

};

export default Navbar;