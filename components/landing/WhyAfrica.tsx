export function WhyAfrica() {
  const reasons = [
    "Over 500M mobile money users",
    "Strong pay-as-you-go culture",
    "Rapid global growth for local creators",
    "Rising demand for independent civic reporting",
  ];

  return (
    <section className="bg-bg-surface py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">Why Africa, Why Now</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bullet points */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                <p className="text-lg lg:text-xl text-text-primary">{reason}</p>
              </div>
            ))}

            {/* Images */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="aspect-square bg-bg-dark rounded-lg border border-bg-elevated flex items-center justify-center">
                <span className="text-xs text-text-muted">Mobile money</span>
              </div>
              <div className="aspect-square bg-bg-dark rounded-lg border border-bg-elevated flex items-center justify-center">
                <span className="text-xs text-text-muted">Data chart</span>
              </div>
            </div>
          </div>

          {/* Right: Callout box */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange-light rounded-xl p-8 lg:p-12 shadow-2xl">
            <p className="text-2xl lg:text-4xl font-bold text-white leading-tight">
              Time to leapfrog subscriptions and paywalls entirely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
