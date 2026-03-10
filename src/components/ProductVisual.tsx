import { useState } from "react";
import { IndianRupee, User, CalendarDays } from "lucide-react";

const ProductVisual = () => {
  const [isRecurring, setIsRecurring] = useState(true);

  return (
    <div className={`bg-card rounded-2xl shadow-card border border-border max-w-sm mx-auto text-left animate-wobble overflow-hidden transition-opacity duration-300 ${!isRecurring ? 'opacity-50' : ''}`}>
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.4deg); }
          50% { transform: rotate(-0.3deg); }
          75% { transform: rotate(0.2deg); }
        }
        .animate-wobble {
          animation: wobble 4s ease-in-out infinite;
        }
      `}</style>

      {/* Green header */}
      <div className="bg-primary px-5 py-3.5">
        <p className="text-sm text-primary-foreground text-center font-bold">
          Create recurring payment
        </p>
      </div>

      <div className="p-5 space-y-0">
        {/* Send */}
        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <IndianRupee className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">Send</span>
          </div>
          <span className="font-bold text-foreground text-base">₹3,000</span>
        </div>

        {/* To */}
        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">To</span>
          </div>
          <span className="font-medium text-foreground text-sm px-3 py-1 rounded-full border border-border">maid@upi</span>
        </div>

        {/* Frequency */}
        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <CalendarDays className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">Frequency</span>
          </div>
          <span className="font-semibold text-primary text-sm">Monthly</span>
        </div>

        {/* Date */}
        





        

        {/* Recurring toggle */}
        <div
          className="flex justify-between items-center py-3 mt-1 bg-accent/50 -mx-5 px-5 rounded-b-xl cursor-pointer select-none"
          onClick={() => setIsRecurring(!isRecurring)}
        >
          <span className="font-semibold text-foreground text-sm">Recurring</span>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold ${isRecurring ? 'text-primary' : 'text-muted-foreground'}`}>
              {isRecurring ? 'ON' : 'OFF'}
            </span>
            <div className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${isRecurring ? 'bg-primary' : 'bg-muted-foreground/30'}`}>
              <div className={`w-5 h-5 bg-primary-foreground rounded-full absolute top-0.5 shadow-sm transition-all duration-200 ${isRecurring ? 'right-0.5' : 'left-0.5'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default ProductVisual;