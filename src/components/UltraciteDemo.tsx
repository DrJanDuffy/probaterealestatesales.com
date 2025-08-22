export default function UltraciteDemo() {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Ultracite CSS Features
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Enhanced CSS utilities and components powered by Ultracite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glassmorphism Card */}
          <div className="card backdrop-blur-md bg-white/20 border border-white/30 p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Glassmorphism Effect
            </h3>
            <p className="text-secondary-600 mb-4">
              Beautiful frosted glass appearance with backdrop blur
            </p>
            <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Glass Effect</span>
            </div>
          </div>

          {/* Advanced Shadows */}
          <div className="card shadow-2xl hover:shadow-3xl transition-shadow duration-300 p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Advanced Shadows
            </h3>
            <p className="text-secondary-600 mb-4">
              Enhanced shadow utilities with hover effects
            </p>
            <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Shadow Demo</span>
            </div>
          </div>

          {/* Advanced Gradients */}
          <div className="card bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Advanced Gradients
            </h3>
            <p className="mb-4 opacity-90">
              Enhanced gradient utilities with multiple color stops
            </p>
            <div className="h-32 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="font-semibold">Gradient Demo</span>
            </div>
          </div>

          {/* Advanced Animations */}
          <div className="card p-8 group">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Advanced Animations
            </h3>
            <p className="text-secondary-600 mb-4">
              Smooth transitions and hover effects
            </p>
            <div className="h-32 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-semibold">Hover Me!</span>
            </div>
          </div>

          {/* Advanced Borders */}
          <div className="card border-2 border-dashed border-gradient-to-r from-blue-500 to-purple-500 p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Advanced Borders
            </h3>
            <p className="text-secondary-600 mb-4">
              Gradient borders and advanced border utilities
            </p>
            <div className="h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Border Demo</span>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Advanced Filters
            </h3>
            <p className="text-secondary-600 mb-4">
              CSS filters and visual effects
            </p>
            <div className="h-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center hover:brightness-110 hover:contrast-125 transition-all duration-300">
              <span className="text-white font-semibold">Filter Demo</span>
            </div>
          </div>
        </div>

        {/* Ultracite Features List */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-6 text-center">
            Ultracite Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">Enhanced Shadows</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• shadow-3xl, shadow-4xl</li>
                <li>• shadow-colored utilities</li>
                <li>• Advanced shadow positioning</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">Advanced Gradients</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Multi-stop gradients</li>
                <li>• Conic gradients</li>
                <li>• Gradient borders</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">CSS Filters</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• brightness, contrast</li>
                <li>• blur, saturate</li>
                <li>• hue-rotate utilities</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">Advanced Animations</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Smooth transitions</li>
                <li>• Hover effects</li>
                <li>• Transform utilities</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">Glassmorphism</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• backdrop-blur utilities</li>
                <li>• Glass card effects</li>
                <li>• Transparency controls</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-600">Advanced Layout</h4>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• Container queries</li>
                <li>• Advanced grid</li>
                <li>• Flexbox utilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
