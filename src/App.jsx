import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import CardsTable from './components/CardsTable'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-100">
      {/* floating ambient shapes */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute top-40 -right-12 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-float-delay" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl animate-float-slow" />
        <div className="absolute inset-0 [mask-image:radial-gradient(55%_40%_at_50%_0%,black,transparent_70%)]" />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <CardsTable />

      <footer className="mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-400 text-sm">
          © {new Date().getFullYear()} FinSight. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
