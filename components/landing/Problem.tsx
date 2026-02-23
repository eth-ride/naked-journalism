export function Problem() {
  return (
    <section className="bg-bg-dark py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-start gap-3 mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Problem</h2>
              <span className="text-4xl lg:text-5xl text-brand-orange">*</span>
            </div>

            <div className="space-y-6 text-lg lg:text-xl text-text-secondary">
              <div className="group hover:text-text-primary transition-colors">
                <span className="font-medium text-brand-orange">Mkubwa Anasema</span>
                <span className="mx-2">{">"}</span>
                <span>The Truth</span>
              </div>

              <div className="group hover:text-text-primary transition-colors">
                <span className="font-medium text-brand-orange">Politically Correct</span>
                <span className="mx-2">{">"}</span>
                <span>Editorial Independence</span>
              </div>

              <div className="group hover:text-text-primary transition-colors">
                <span className="font-medium text-brand-orange">Ads</span>
                <span className="mx-2">{">"}</span>
                <span>Press Freedom</span>
              </div>
            </div>
          </div>

          {/* Right: Images */}
          <div className="space-y-4">
            <div className="aspect-[3/2] bg-bg-surface rounded-lg overflow-hidden border border-bg-elevated">
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                Camera with money
              </div>
            </div>
            <div className="aspect-[3/2] bg-bg-surface rounded-lg overflow-hidden border border-bg-elevated">
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                Photographer in action
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
