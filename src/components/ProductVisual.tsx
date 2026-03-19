import { useState } from "react";

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
    <path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
  </svg>
);

const ProductVisual = () => {
  const [isRecurring, setIsRecurring] = useState(true);

  return (
    <div className={`bg-card rounded-2xl shadow-card border border-border max-w-sm mx-auto text-left overflow-hidden ${!isRecurring ? 'opacity-50' : ''}`}>

      <div className="px-5 py-3.5 bg-primary">
        <p className="text-sm text-primary-foreground text-center font-bold">
          Create recurring payment
        </p>
      </div>

      <div className="p-5 space-y-0">
        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <RupeeIcon />
            <span className="text-muted-foreground text-sm">Send</span>
          </div>
          <span className="font-bold text-foreground text-base">₹3,000</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <UserIcon />
            <span className="text-muted-foreground text-sm">To</span>
          </div>
          <span className="font-medium text-foreground text-sm px-3 py-1 rounded-full border border-border">maid@upi</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
          <div className="flex items-center gap-2.5">
            <CalendarIcon />
            <span className="text-muted-foreground text-sm">Frequency</span>
          </div>
          <span className="font-semibold text-sm text-primary">Monthly</span>
        </div>

        <div
          className="flex justify-between items-center py-3 mt-1 bg-accent/50 -mx-5 px-5 rounded-b-xl cursor-pointer select-none"
          onClick={() => setIsRecurring(!isRecurring)}>
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
    </div>
  );
};

export default ProductVisual;
