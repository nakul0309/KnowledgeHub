function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Powerful Enterprise Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-slate-800 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              AI Document Search
            </h3>
          </div>

          <div className="p-8 bg-slate-800 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Team Workspaces
            </h3>
          </div>

          <div className="p-8 bg-slate-800 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Secure Access Control
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;