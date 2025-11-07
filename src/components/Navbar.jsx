import { useState } from 'react';
import { Menu, X, Heart, Home, Info, Mail, Activity } from 'lucide-react';

function NavLink({ to, children, onClick }) {
  return (
    <a
      href={to}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <Heart size={18} />
          </span>
          <span className="text-lg">StrokeSense</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink to="#home"><Home size={16}/>Home</NavLink>
          <NavLink to="#predict"><Activity size={16}/>Predict</NavLink>
          <NavLink to="#about"><Info size={16}/>About</NavLink>
          <NavLink to="#contact"><Mail size={16}/>Contact</NavLink>
          <a href="#predict" className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Check Risk Now
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="#home" onClick={() => setOpen(false)}><Home size={16}/>Home</NavLink>
            <NavLink to="#predict" onClick={() => setOpen(false)}><Activity size={16}/>Predict</NavLink>
            <NavLink to="#about" onClick={() => setOpen(false)}><Info size={16}/>About</NavLink>
            <NavLink to="#contact" onClick={() => setOpen(false)}><Mail size={16}/>Contact</NavLink>
            <a href="#predict" onClick={() => setOpen(false)} className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Check Risk Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
