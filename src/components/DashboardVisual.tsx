const payments = [
{ name: "Netflix", amount: "₹649" },
{ name: "ChatGPT", amount: "₹1,700" },
{ name: "Spotify", amount: "₹119" },
{ name: "Car wash subscription", amount: "₹499" },
{ name: "Rent", amount: "₹20,000" },
{ name: "Maid salary", amount: "₹3,000" },
{ name: "Cook salary", amount: "₹4,000" }];


const DashboardVisual = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        <div className="bg-card rounded-2xl shadow-card p-5 border border-border">
          <p className="text-xs text-primary uppercase tracking-wider mb-4 text-center font-bold">
            Your recurring payments
          </p>
          <div className="space-y-0">
            {payments.map((p, i) =>
            <div
              key={i}
              className="flex justify-between items-center py-2.5 border-b border-border last:border-0">
              
                <span className="text-sm text-foreground">{p.name}</span>
                <span className="text-sm font-medium text-foreground">{p.amount}</span>
              </div>
            )}
          </div>
          <div className="mt-4 pt-3 border-t-2 border-primary/20 flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">Total monthly spend</span>
            <span className="text-lg font-bold text-primary">₹29,967</span>
          </div>
        </div>
      </div>
    </section>);

};

export default DashboardVisual;