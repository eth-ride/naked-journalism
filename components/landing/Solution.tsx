import { Check } from "lucide-react";

export function Solution() {
  const features = [
    "Content is free to read - no paywalls or subscriptions",
    "Readers can tip journalists to support quality work",
    "Journalists earn instantly with transparent payments",
    "Investigations are crowdfunded by the public",
    "Zero advertiser dependence - editorial freedom through direct reader support",
  ];

  return (
    <section className="bg-bg-surface py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-bg-dark rounded-lg overflow-hidden border border-bg-elevated shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                Newspaper with "PAY NOW" buttons illustration
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Solution</h2>

            <p className="text-lg lg:text-xl text-text-secondary mb-8 leading-relaxed">
              Directly connect readers to journalists through a public market where citizens
              fund the information they value.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <Check size={16} className="text-brand-orange group-hover:text-white" />
                    </div>
                  </div>
                  <p className="text-base lg:text-lg text-text-primary">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
