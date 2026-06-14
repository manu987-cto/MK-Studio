'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/prestations', label: 'Prestations' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10, 10, 10, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div
                  className="absolute inset-0 rounded-full border animate-glow"
                  style={{ borderColor: 'rgba(201,169,110,0.4)' }}
                />
                <div
                  className="absolute inset-1 rounded-full flex items-center justify-center text-xs font-bold tracking-widest"
                  style={{
                    background: 'linear-gradient(135deg, #C9A96E, #E8D5B0)',
                    color: '#0A0A0A',
                  }}
                >
                  MK
                </div>
              </div>
              <div>
                <div className="text-sm font-light tracking-[0.3em] text-white uppercase">MK Studio</div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: '#C9A96E', fontSize: '0.55rem' }}>
                  Institut de Beauté
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${pathname === l.href ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTA + burger */}
            <div className="flex items-center gap-6">
              <a
                href="tel:0770277958"
                className="hidden lg:flex items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: '#C9A96E' }}
              >
                <span className="text-lg">☎</span>
                07 70 27 79 58
              </a>
              <Link href="/contact" className="btn-gold hidden lg:inline-block" style={{ fontSize: '0.65rem', padding: '12px 24px' }}>
                Réserver
              </Link>

              {/* Burger */}
              <button
                className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5 z-50 relative"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span
                  className="block h-px w-8 transition-all duration-300"
                  style={{
                    background: '#C9A96E',
                    transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="block h-px transition-all duration-300"
                  style={{
                    background: '#C9A96E',
                    width: menuOpen ? '0' : '24px',
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block h-px w-8 transition-all duration-300"
                  style={{
                    background: '#C9A96E',
                    transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 lg:hidden ${menuOpen ? 'open' : ''}`}
        style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-2xl font-light tracking-[0.3em] ${pathname === l.href ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:0770277958"
            className="mt-4 text-sm tracking-widest"
            style={{ color: '#C9A96E' }}
            onClick={() => setMenuOpen(false)}
          >
            07 70 27 79 58
          </a>
          <Link
            href="/contact"
            className="btn-gold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Réserver
          </Link>
        </div>
      </div>
    </>
  );
}
