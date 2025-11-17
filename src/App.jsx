import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import CardsTable from './components/CardsTable'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* glow backdrop */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />

      <Navbar />
      <Hero />
      <Stats />
      <CardsTable />

      <footer className="mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
          © {new Date().getFullYear()} FinSight. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App