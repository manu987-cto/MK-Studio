'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

const categories = [
  {
    id: 'maquillage',
    title: 'Maquillage',
    icon: '💄',
    services: [
      { name: 'Maquillage Mariée', duration: '1h 30min', price: '150 €', desc: '' },
      { name: 'Essai mariée', duration: '1h', price: '80 €', desc: '' },
      { name: 'Maquillage invité / demoiselles d\'honneur', duration: '1h', price: '90 €', desc: 'Teint complet avec contouring, sourcils dessinés, faux cils, belle bouche.' },
      { name: 'Maquillage simple', duration: '45min', price: '60 €', desc: 'Teint corrigé, sourcils redessinés, eyeliner ou fard, mascara, bouche naturelle.' },
    ],
  },
  {
    id: 'sourcils',
    title: 'Sourcils & Épilation',
    icon: '✦',
    services: [
      { name: 'Épilation au fil sourcils', duration: '15min', price: '15 €', desc: '' },
      { name: 'Restructuration sourcils', duration: '20min', price: '27 €', desc: 'Redessiner la ligne des sourcils.' },
      { name: 'Restructuration + teinture', duration: '40min', price: '35 €', desc: 'Redessiner la ligne adaptée à la morphologie.' },
      { name: 'Restructuration + Browlift + teinture', duration: '1h', price: '65 €', desc: '' },
      { name: 'Teinture sourcils / cils', duration: '20min', price: '12 €', desc: '' },
      { name: 'Épilation lèvres', duration: '15min', price: '7 €', desc: '' },
      { name: 'Épilation sourcils + lèvres', duration: '30min', price: '20 €', desc: '' },
    ],
  },
  {
    id: 'cils',
    title: 'Cils & Browlift',
    icon: '👁',
    services: [
      { name: 'Rehaussement + Teinture + Lashbotox', duration: '1h', price: '50 €', desc: 'Cils relevés dès la racine, effet plus long, plus fourni. Dure 4 à 6 semaines.' },
      { name: 'Browlift', duration: '30min', price: '35 €', desc: 'Restructure et fixe les poils pour un aspect fourni et discipliné. 4 à 6 semaines.' },
      { name: 'Browlift + teinture', duration: '40min', price: '42 €', desc: '' },
      { name: 'Rehaussement + Teinture + Browlift', duration: '1h', price: '80 €', desc: '' },
      { name: 'Rehaussement + Teinture + Browlift + Teinture', duration: '1h', price: '92 €', desc: '' },
      { name: 'Rehaussement + Teinture + Restructuration + Browlift + Teinture', duration: '1h 20min', price: '110 €', desc: '' },
      { name: 'Extension de cils — Pose complète cil à cil', duration: '1h', price: '60 €', desc: 'Idéal pour une première expérience.' },
      { name: 'Remplissage 2-3 sem. cil à cil', duration: '1h', price: '35 €', desc: '' },
      { name: 'Extension — Pose complète volume mixte', duration: '1h 30min', price: '70 €', desc: '' },
      { name: 'Remplissage 2-3 sem. volume mixte', duration: '1h 30min', price: '40 €', desc: '' },
      { name: 'Extension — Pose complète Volume russe', duration: '2h', price: '90 €', desc: '' },
      { name: 'Remplissage 2-3 sem. volume russe', duration: '1h 30min', price: '50 €', desc: '' },
      { name: 'Dépose / retrait des extensions', duration: '40min', price: '15 €', desc: '' },
    ],
  },
  {
    id: 'ongles',
    title: 'Ongles — Mains',
    icon: '💅',
    services: [
      { name: 'Manucure', duration: '30min', price: '20 €', desc: '' },
      { name: 'Pose Vernis Semi-permanent mains', duration: '45min', price: '35 €', desc: 'Résultat fin et naturel. 2-3 semaines de tenue. Inclut préparation ongles et cuticules.' },
      { name: 'Pose Vernis Semi-permanent French/Bboomer', duration: '1h', price: '45 €', desc: '' },
      { name: 'Dépose + Pose Vernis Semi-permanent', duration: '1h 10min', price: '45 €', desc: '' },
      { name: 'Dépose + Vernis Semi-permanent French/Bboomer', duration: '1h 20min', price: '55 €', desc: '' },
      { name: 'Dépose semi-permanent', duration: '20min', price: '15 €', desc: '' },
      { name: 'GAINAGE sur ongles naturels', duration: '1h 30min', price: '45 €', desc: 'Sans rallongement. Solide, protecteur, légèrement bombé. Remplissage possible après 3-4 sem.' },
      { name: 'GAINAGE French/Baby-Boomers', duration: '1h 30min', price: '55 €', desc: '' },
      { name: 'Remplissage gainage', duration: '1h 30min', price: '45 €', desc: 'Prévenez si ajout nail art.' },
      { name: 'Remplissage gainage French/Bboomer', duration: '1h 40min', price: '55 €', desc: '' },
      { name: 'Pose Gel rallongement capsules', duration: '2h', price: '55 €', desc: '' },
      { name: 'Pose Gel rallongement capsules French/Bboomer', duration: '2h', price: '65 €', desc: '' },
      { name: 'Remplissage gel', duration: '1h 30min', price: '45 €', desc: '' },
      { name: 'Remplissage gel French/Bboomer', duration: '1h 40min', price: '55 €', desc: '' },
      { name: 'Remplissage extérieur', duration: '1h 40min', price: '50 €', desc: '' },
      { name: 'Dépose gel', duration: '30min', price: '20 €', desc: 'Pas de dépose acrylique ni capsule américaine.' },
      { name: 'Dépose Gel + Manucure', duration: '1h', price: '35 €', desc: '' },
      { name: 'Nail Art', duration: '15min', price: 'Sur devis', desc: 'Sur devis — non réservable en ligne.' },
      { name: 'Réparation ongle (cassé)', duration: '10min', price: '5 €', desc: '' },
      { name: 'Chrome', duration: '15min', price: '5 €', desc: '' },
    ],
  },
  {
    id: 'pieds',
    title: 'Soins des Pieds',
    icon: '🌸',
    services: [
      { name: 'Beauté des pieds', duration: '30min', price: '25 €', desc: 'Cuticules, coupe et lime, ponçage. Vernis durcisseur + massage hydratant. Pas de callosités.' },
      { name: 'Pose Vernis Semi-permanent pieds', duration: '45min', price: '35 €', desc: '' },
      { name: 'Pose Vernis Semi-permanent French/Bboomer pieds', duration: '1h', price: '45 €', desc: '' },
      { name: 'Dépose + Pose Vernis Semi-permanent pieds', duration: '1h 15min', price: '45 €', desc: '' },
      { name: 'Dépose + Vernis Semi-permanent French/Bboomer pieds', duration: '1h 15min', price: '55 €', desc: '' },
      { name: 'Dépose semi-permanent pieds', duration: '20min', price: '12 €', desc: '' },
      { name: 'Dépose + Beauté des pieds', duration: '1h', price: '35 €', desc: '' },
    ],
  },
];

export default function PrestationsPage() {
  return (
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>
      {/* Header */}
      <section
        className="py-24 px-6 lg:px-12 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(201,169,110,0.06) 0%, transparent 100%)',
          borderBottom: '1px solid rgba(201,169,110,0.1)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(201,169,110,0.1) 0%, transparent 60%)' }}
        />
        <RevealOnScroll>
          <div className="category-badge">Menu & Tarifs</div>
          <h1
            className="mt-4 mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            Nos <span className="gold-text">Prestations</span>
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', lineHeight: '1.8' }}>
            Toutes nos prestations sont réalisées avec des produits premium.<br />
            Règlement par espèces, chèque ou virement uniquement. <strong style={{ color: 'rgba(201,169,110,0.8)' }}>Pas de CB.</strong><br />
            Nous ne faisons pas de capsules américaines ni d'acrylique.
          </p>
        </RevealOnScroll>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="category-badge"
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
            >
              {c.icon} {c.title}
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-20">
        {categories.map((cat, ci) => (
          <section key={cat.id} id={cat.id}>
            <RevealOnScroll delay={ci * 50}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 300,
                      color: '#fff',
                    }}
                  >
                    {cat.title}
                  </h2>
                </div>
                <div
                  className="flex-1 h-px ml-4"
                  style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.4), transparent)' }}
                />
              </div>

              <div className="space-y-2">
                {cat.services.map((s, i) => (
                  <div
                    key={i}
                    className="luxury-card p-5 flex flex-col sm:flex-row sm:items-start gap-3"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1" style={{ color: '#E8D5B0', letterSpacing: '0.04em' }}>
                        {s.name}
                      </h3>
                      {s.desc && (
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          {s.desc}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0">
                      <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {s.duration}
                      </span>
                      <span className="text-base font-semibold" style={{ color: '#C9A96E', minWidth: '70px', textAlign: 'right' }}>
                        {s.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0D0D0D' }}>
        <RevealOnScroll>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
            Une question sur une prestation ?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Réserver &amp; Calculer mon total</Link>
            <a href="tel:0770277958" className="btn-outline">Appeler le 07 70 27 79 58</a>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
