export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "A journalist publishes a story",
      description: "Independent reporters share their investigations on the platform",
      highlighted: false,
    },
    {
      number: "02",
      title: "Readers access content for free",
      description: "No paywalls, no subscriptions - all content is freely accessible",
      highlighted: true,
    },
    {
      number: "03",
      title: "The journalist is tipped instantly",
      description: "Readers support quality journalism through optional tips",
      highlighted: false,
    },
    {
      number: "04",
      title: "Readers can fund follow-up investigations",
      description: "Crowdfund deeper reporting on stories that matter",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-bg-dark py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
          What this looks like in real life:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Arrow connector (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="text-bg-elevated"
                  >
                    <path
                      d="M6 4 L12 8 L6 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full rounded-xl p-6 transition-all hover:scale-105 hover:shadow-2xl ${
                  step.highlighted
                    ? "bg-gradient-to-br from-brand-orange to-brand-orange-light text-white"
                    : "bg-bg-surface border border-bg-elevated hover:border-brand-orange/50"
                }`}
              >
                <div
                  className={`text-5xl lg:text-6xl font-bold mb-4 ${
                    step.highlighted ? "text-white" : "text-brand-orange"
                  }`}
                >
                  {step.number}
                </div>

                <h3
                  className={`text-lg font-semibold mb-3 ${
                    step.highlighted ? "text-white" : "text-text-primary"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    step.highlighted ? "text-white/90" : "text-text-secondary"
                  }`}
                >
                  {step.description}
                </p>

                {/* Image placeholder */}
                <div className="mt-6 aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-text-muted">Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
