import { Menu, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition">
            <Menu className="h-5 w-5 text-white/80" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-white/10 border border-white/15" />
            <span className="text-white font-semibold tracking-tight">FinSight</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <input
              placeholder="Search"
              className="h-10 w-72 pl-10 pr-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <Search className="h-4 w-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition relative">
            <Bell className="h-5 w-5 text-white/80" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white text-[10px] text-black font-medium flex items-center justify-center">3</span>
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition">
            <User className="h-5 w-5 text-white/80" />
          </button>
        </div>
      </div>
    </header>
  );
}
