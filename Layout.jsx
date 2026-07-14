import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About the Research' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/outcomes', label: 'Outcomes' },
  { to: '/researcher', label: 'Researcher' },
  { to: '/contact', label: 'Contact' },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <div className="min-h-screen bg-white text-[hsl(var(--ink))] selection:bg-[hsl(var(--accent-gold))]/25">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
        <nav className="mx-auto max-w-[90rem] px-6 lg:px-10 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-8 w-8 rounded-md bg-[hsl(var(--ink))] text-white">
              <Shield className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className={`font-display text-lg font-semibold tracking-tight ${solid ? 'text-[hsl(var(--ink))]' : 'text-white'}`}>
              Digital Transparency Initiative
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[hsl(var(--accent-gold))] ${
                    isActive ? 'text-[hsl(var(--accent-gold))]' : solid ? 'text-slate-600' : 'text-white/80'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
          <button className={`lg:hidden ${solid ? 'text-[hsl(var(--ink))]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `text-left py-2.5 font-medium border-b border-slate-100 last:border-0 ${
                    isActive ? 'text-[hsl(var(--accent-gold))]' : 'text-slate-700'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[hsl(var(--ink))] border-t border-white/10 text-white/50">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-10 py-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-7 w-7 rounded-md bg-white/10">
              <Shield className="h-3.5 w-3.5 text-[hsl(var(--accent-gold))]" />
            </span>
            <span className="font-display text-white/90">Digital Transparency Initiative</span>
          </Link>
          <p className="text-sm text-center">
            Research proposal by Levni Apraku-Mensah &middot; Florida Atlantic University
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
