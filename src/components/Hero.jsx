import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] lg:min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Realtime insights • Secure by design
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Minimal finance OS for modern teams
          </h1>
          <p className="mt-4 text-neutral-300 text-lg">
            Monitor cash, track spend, and surface signals without noise. Pure dark and white, no distractions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-white text-black font-medium shadow-sm hover:bg-neutral-100 transition">
              Get started
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white/0 hover:bg-white/10 text-white font-medium border border-white/10 transition">
              Live demo
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />
    </section>
  );
}
