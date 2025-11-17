import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[78vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Realtime insights • Glassmorphic UI • Secure by design
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            A clean, modern fintech dashboard
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Visualize accounts, track spend, and monitor KPIs in one elegant place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 transition">
              Get Started
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/15 transition">
              Live Demo
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900" />
    </section>
  );
}
