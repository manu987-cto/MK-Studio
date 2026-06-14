'use client';

import { useState, useMemo } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';

const ALL_SERVICES = [
  // Maquillage
  { id: 'm1', category: 'Maquillage', name: 'Maquillage Mariée', price: 150, duration: '1h 30min' },
  { id: 'm2', category: 'Maquillage', name: 'Essai mariée', price: 80, duration: '1h' },
  { id: 'm3', category: 'Maquillage', name: 'Maquillage invité / demoiselles d\'honneur', price: 90, duration: '1h' },
  { id: 'm4', category: 'Maquillage', name: 'Maquillage simple', price: 60, duration: '45min' },
  // Sourcils
  { id: 's1', category: 'Sourcils & Épilation', name: 'Épilation au fil sourcils', price: 15, duration: '15min' },
  { id: 's2', category: 'Sourcils & Épilation', name: 'Restructuration sourcils', price: 27, duration: '20min' },
  { id: 's3', category: 'Sourcils & Épilation', name: 'Restructuration + teinture', price: 35, duration: '40min' },
  { id: 's4', category: 'Sourcils & Épilation', name: 'Restructuration + Browlift + teinture', price: 65, duration: '1h' },
  { id: 's5', category: 'Sourcils & Épilation', name: 'Teinture sourcils / cils', price: 12, duration: '20min' },
  { id: 's6', category: 'Sourcils & Épilation', name: 'Épilation lèvres', price: 7, duration: '15min' },
  { id: 's7', category: 'Sourcils & Épilation', name: 'Épilation sourcils + lèvres', price: 20, duration: '30min' },
  // Cils
  { id: 'c1', category: 'Cils & Browlift', name: 'Rehaussement + Teinture + Lashbotox', price: 50, duration: '1h' },
  { id: 'c2', category: 'Cils & Browlift', name: 'Browlift', price: 35, duration: '30min' },
  { id: 'c3', category: 'Cils & Browlift', name: 'Browlift + teinture', price: 42, duration: '40min' },
  { id: 'c4', category: 'Cils & Browlift', name: 'Rehaussement + Teinture + Browlift', price: 80, duration: '1h' },
  { id: 'c5', category: 'Cils & Browlift', name: 'Rehaussement + Teinture + Browlift + Teinture', price: 92, duration: '1h' },
  { id: 'c6', category: 'Cils & Browlift', name: 'Rehaussement + Teinture + Restructuration + Browlift + Teinture', price: 110, duration: '1h 20min' },
  { id: 'c7', category: 'Cils & Browlift', name: 'Extension cils — Pose complète cil à cil', price: 60, duration: '1h' },
  { id: 'c8', category: 'Cils & Browlift', name: 'Remplissage 2-3 sem. cil à cil', price: 35, duration: '1h' },
  { id: 'c9', category: 'Cils & Browlift', name: 'Extension — Pose complète volume mixte', price: 70, duration: '1h 30min' },
  { id: 'c10', category: 'Cils & Browlift', name: 'Remplissage 2-3 sem. volume mixte', price: 40, duration: '1h 30min' },
  { id: 'c11', category: 'Cils & Browlift', name: 'Extension — Pose complète volume russe', price: 90, duration: '2h' },
  { id: 'c12', category: 'Cils & Browlift', name: 'Remplissage 2-3 sem. volume russe', price: 50, duration: '1h 30min' },
  { id: 'c13', category: 'Cils & Browlift', name: 'Dépose / retrait des extensions', price: 15, duration: '40min' },
  // Ongles
  { id: 'o1', category: 'Ongles — Mains', name: 'Manucure', price: 20, duration: '30min' },
  { id: 'o2', category: 'Ongles — Mains', name: 'Pose Vernis Semi-permanent mains', price: 35, duration: '45min' },
  { id: 'o3', category: 'Ongles — Mains', name: 'Pose VSP French/Bboomer', price: 45, duration: '1h' },
  { id: 'o4', category: 'Ongles — Mains', name: 'Dépose + Pose VSP', price: 45, duration: '1h 10min' },
  { id: 'o5', category: 'Ongles — Mains', name: 'Dépose + VSP French/Bboomer', price: 55, duration: '1h 20min' },
  { id: 'o6', category: 'Ongles — Mains', name: 'Dépose semi-permanent', price: 15, duration: '20min' },
  { id: 'o7', category: 'Ongles — Mains', name: 'GAINAGE ongles naturels', price: 45, duration: '1h 30min' },
  { id: 'o8', category: 'Ongles — Mains', name: 'GAINAGE French/Baby-Boomers', price: 55, duration: '1h 30min' },
  { id: 'o9', category: 'Ongles — Mains', name: 'Remplissage gainage', price: 45, duration: '1h 30min' },
  { id: 'o10', category: 'Ongles — Mains', name: 'Remplissage gainage French/Bboomer', price: 55, duration: '1h 40min' },
  { id: 'o11', category: 'Ongles — Mains', name: 'Pose Gel rallongement capsules', price: 55, duration: '2h' },
  { id: 'o12', category: 'Ongles — Mains', name: 'Pose Gel rallongement capsules French/Bboomer', price: 65, duration: '2h' },
  { id: 'o13', category: 'Ongles — Mains', name: 'Remplissage gel', price: 45, duration: '1h 30min' },
  { id: 'o14', category: 'Ongles — Mains', name: 'Remplissage gel French/Bboomer', price: 55, duration: '1h 40min' },
  { id: 'o15', category: 'Ongles — Mains', name: 'Remplissage extérieur', price: 50, duration: '1h 40min' },
  { id: 'o16', category: 'Ongles — Mains', name: 'Dépose gel', price: 20, duration: '30min' },
  { id: 'o17', category: 'Ongles — Mains', name: 'Dépose Gel + Manucure', price: 35, duration: '1h' },
  { id: 'o18', category: 'Ongles — Mains', name: 'Réparation ongle cassé', price: 5, duration: '10min' },
  { id: 'o19', category: 'Ongles — Mains', name: 'Chrome', price: 5, duration: '15min' },
  // Pieds
  { id: 'p1', category: 'Soins des Pieds', name: 'Beauté des pieds', price: 25, duration: '30min' },
  { id: 'p2', category: 'Soins des Pieds', name: 'Pose VSP pieds', price: 35, duration: '45min' },
  { id: 'p3', category: 'Soins des Pieds', name: 'Pose VSP French/Bboomer pieds', price: 45, duration: '1h' },
  { id: 'p4', category: 'Soins des Pieds', name: 'Dépose + Pose VSP pieds', price: 45, duration: '1h 15min' },
  { id: 'p5', category: 'Soins des Pieds', name: 'Dépose + VSP French/Bboomer pieds', price: 55, duration: '1h 15min' },
  { id: 'p6', category: 'Soins des Pieds', name: 'Dépose semi-permanent pieds', price: 12, duration: '20min' },
  { id: 'p7', category: 'Soins des Pieds', name: 'Dépose + Beauté des pieds', price: 35, duration: '1h' },
];

const CATEGORIES = Array.from(new Set(ALL_SERVICES.map((s) => s.category)));

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', date: '' });
  const [selected, setSelected] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [submitted, setSubmitted] = useState(false);

  const filteredServices = useMemo(
    () => activeCategory === 'Tous' ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  const total = useMemo(
    () => ALL_SERVICES.filter((s) => selected.includes(s.id)).reduce((acc, s) => acc + s.price, 0),
    [selected]
  );

  const selectedServices = ALL_SERVICES.filter((s) => selected.includes(s.id));

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: '80px' }} className="flex items-center justify-center">
        <div className="text-center p-12">
          <div className="text-6xl mb-6" style={{ color: '#C9A96E' }}>✦</div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 300, color: '#fff', marginBottom: '1rem' }}>
            Merci, <span className="gold-text">{form.name} !</span>
          </h2>
          <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
            Votre demande a bien été envoyée.
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Kübra vous contactera rapidement pour confirmer votre rendez-vous.
          </p>
          {selectedServices.length > 0 && (
            <div className="luxury-card p-6 text-left mb-8 max-w-md mx-auto">
              <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>Récapitulatif</h4>
              {selectedServices.map((s) => (
                <div key={s.id} className="flex justify-between text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span>{s.name}</span>
                  <span style={{ color: '#C9A96E' }}>{s.price} €</span>
                </div>
              ))}
              <div
                className="flex justify-between font-bold text-base mt-4 pt-4"
                style={{ borderTop: '1px solid rgba(201,169,110,0.2)', color: '#fff' }}
              >
                <span>Total estimé</span>
                <span style={{ color: '#C9A96E' }}>{total} €</span>
              </div>
            </div>
          )}
          <a href="/" className="btn-gold">Retour à l&apos;accueil</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>
      {/* Header */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ borderBottom: '1px solid rgba(201,169,110,0.1)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(201,169,110,0.08) 0%, transparent 60%)' }}
        />
        <RevealOnScroll>
          <div className="category-badge">Prise de contact</div>
          <h1
            className="mt-4 mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              color: '#fff',
            }}
          >
            Réservation <span className="gold-text">&amp; Contact</span>
          </h1>
          <div className="section-divider" />
        </RevealOnScroll>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT: Form */}
            <div className="lg:col-span-2">
              <RevealOnScroll direction="left">
                <div className="luxury-card p-8">
                  <h2
                    className="mb-8"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 300, color: '#fff' }}
                  >
                    Vos <span className="gold-text">coordonnées</span>
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="luxury-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre@email.fr"
                        className="luxury-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="06 xx xx xx xx"
                        className="luxury-input"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        className="luxury-input"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                        Message
                      </label>
                      <textarea
                        placeholder="Informations complémentaires..."
                        className="luxury-input"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ resize: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Info box */}
                <div className="luxury-card p-6 mt-6 space-y-4">
                  {[
                    { icon: '◈', label: '20 Rue Thiers, 56000 Vannes' },
                    { icon: '☎', label: '07 70 27 79 58' },
                    { icon: '⏰', label: 'Mardi – Samedi · 09h30–19h00' },
                    { icon: '💳', label: 'Espèces · Chèque · Virement (pas de CB)' },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <span style={{ color: '#C9A96E', flexShrink: 0 }}>{info.icon}</span>
                      <span>{info.label}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT: Service picker + total */}
            <div className="lg:col-span-3">
              <RevealOnScroll direction="right">
                <div className="luxury-card p-8 mb-6">
                  <h2
                    className="mb-6"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 300, color: '#fff' }}
                  >
                    Choisir mes <span className="gold-text">prestations</span>
                  </h2>

                  {/* Category filter */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Tous', ...CATEGORIES].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className="category-badge"
                        style={{
                          cursor: 'pointer',
                          borderColor: activeCategory === cat ? '#C9A96E' : 'rgba(201,169,110,0.25)',
                          color: activeCategory === cat ? '#C9A96E' : 'rgba(255,255,255,0.4)',
                          background: activeCategory === cat ? 'rgba(201,169,110,0.1)' : 'transparent',
                          transition: 'all 0.2s',
                          fontSize: '0.55rem',
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Services list */}
                  <div className="space-y-2 max-h-96 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#C9A96E #111' }}>
                    {filteredServices.map((s) => {
                      const isSelected = selected.includes(s.id);
                      return (
                        <label
                          key={s.id}
                          className="flex items-center gap-4 p-4 cursor-pointer transition-all duration-200"
                          style={{
                            background: isSelected ? 'rgba(201,169,110,0.08)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${isSelected ? 'rgba(201,169,110,0.4)' : 'rgba(201,169,110,0.12)'}`,
                          }}
                        >
                          <input
                            type="checkbox"
                            className="luxury-checkbox"
                            checked={isSelected}
                            onChange={() => toggle(s.id)}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate" style={{ color: isSelected ? '#E8D5B0' : 'rgba(255,255,255,0.7)' }}>
                              {s.name}
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                              {s.duration}
                            </div>
                          </div>
                          <div className="flex-shrink-0 font-semibold text-sm" style={{ color: '#C9A96E' }}>
                            {s.price} €
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Total */}
                <div
                  className="p-6 mb-6"
                  style={{
                    background: selected.length > 0
                      ? 'linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.06) 100%)'
                      : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${selected.length > 0 ? 'rgba(201,169,110,0.4)' : 'rgba(201,169,110,0.15)'}`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {selected.length === 0 ? (
                    <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
                      Sélectionnez vos prestations ci-dessus
                    </p>
                  ) : (
                    <>
                      <h3 className="text-xs tracking-widest uppercase mb-4" style={{ color: '#C9A96E' }}>
                        Récapitulatif — {selected.length} prestation{selected.length > 1 ? 's' : ''}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {selectedServices.map((s) => (
                          <div key={s.id} className="flex justify-between items-center text-sm">
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{s.name}</span>
                            <div className="flex items-center gap-3">
                              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>{s.duration}</span>
                              <span style={{ color: '#C9A96E', fontWeight: 600 }}>{s.price} €</span>
                              <button
                                type="button"
                                onClick={() => toggle(s.id)}
                                className="text-xs opacity-50 hover:opacity-100"
                                style={{ color: '#fff' }}
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        className="flex justify-between items-center pt-4"
                        style={{ borderTop: '1px solid rgba(201,169,110,0.25)' }}
                      >
                        <span className="text-sm font-medium" style={{ color: '#fff', letterSpacing: '0.08em' }}>
                          TOTAL ESTIMÉ
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: '1.8rem',
                            fontWeight: 300,
                            color: '#C9A96E',
                          }}
                        >
                          {total} €
                        </span>
                      </div>
                      <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
                        * Prix indicatifs — Nail art et options sur devis
                      </p>
                    </>
                  )}
                </div>

                <button type="submit" className="btn-gold w-full text-center" style={{ padding: '18px', fontSize: '0.75rem' }}>
                  Envoyer ma demande de rendez-vous
                  {selected.length > 0 && ` — ${total} €`}
                </button>
              </RevealOnScroll>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
