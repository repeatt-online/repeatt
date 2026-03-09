const ProductVisual = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-5 border border-border max-w-sm mx-auto text-left">
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
        Create recurring payment
      </p>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-muted-foreground text-sm">Send</span>
          <span className="font-semibold text-foreground">₹3,000</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-muted-foreground text-sm">To</span>
          <span className="font-medium text-foreground">maid@upi</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-muted-foreground text-sm">Frequency</span>
          <span className="font-medium text-foreground">Monthly</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-border">
          <span className="text-muted-foreground text-sm">Date</span>
          <span className="font-medium text-foreground">1st of every month</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground text-sm">Recurring</span>
          <div className="w-11 h-6 bg-primary rounded-full relative">
            <div className="w-5 h-5 bg-primary-foreground rounded-full absolute right-0.5 top-0.5 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVisual;
