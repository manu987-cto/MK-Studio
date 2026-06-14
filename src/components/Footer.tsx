import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold tracking-widest"
                style={{ background: 'linear-gradient(135deg, #C9A96E, #E8D5B0)', color: '#0A0A0A' }}
              >
                MK
              </div>
              <div>
                <div className="text-sm font-light tracking-[0.3em] uppercase text-white">MK Studio</div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: '#C9A96E', fontSize: '0.55rem' }}>
                  Institut de Beauté · Vannes
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '280px' }}>
              Institut de beauté spécialisé dans les extensions de cils, le maquillage et les soins des ongles à Vannes, Morbihan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: '#C9A96E' }}>Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/prestations', label: 'Prestations & Tarifs' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/a-propos', label: 'À propos de Kübra' },
                { href: '/contact', label: 'Contact & Réservation' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-yellow-400"
                    style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: '#C9A96E' }}>Nous trouver</h4>
            <div className="space-y-4 text-sm" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
              <div className="flex items-start gap-3">
                <span style={{ color: '#C9A96E', marginTop: '2px' }}>◈</span>
                <span>20 Rue Thiers<br />56000 Vannes</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: '#C9A96E' }}>☎</span>
                <a href="tel:0770277958" className="hover:text-white transition-colors">07 70 27 79 58</a>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: '#C9A96E' }}>⏰</span>
                <span>Mar–Sam · 09h30–19h00</span>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ color: '#C9A96E' }}>★</span>
                <span>4,9/5 · 21 avis Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
          <span>© {new Date().getFullYear()} MK Studio — Institut de Beauté · Vannes</span>
          <span>Règlement : Espèces · Chèque · Virement</span>
        </div>
      </div>
    </footer>
  );
}
