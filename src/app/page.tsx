'use client';

import Image from 'next/image';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';
import RevealOnScroll from '@/components/RevealOnScroll';

const services = [
  {
    icon: '👁',
    title: 'Extensions de Cils',
    desc: 'Cil à cil, volume mixte ou russe. Des regards qui envoûtent.',
    price: 'Dès 60 €',
    href: '/prestations#cils',
  },
  {
    icon: '✦',
    title: 'Sourcils & Browlift',
    desc: 'Restructuration, teinture et browlift pour des sourcils parfaits.',
    price: 'Dès 15 €',
    href: '/prestations#sourcils',
  },
  {
    icon: '💅',
    title: 'Ongles & Vernis',
    desc: 'Semi-permanent, gainage, gel, french et nail art sur mesure.',
    price: 'Dès 20 €',
    href: '/prestations#ongles',
  },
  {
    icon: '💄',
    title: 'Maquillage',
    desc: 'Maquillage mariée somptueux et maquillage invité sur mesure.',
    price: 'Dès 60 €',
    href: '/prestations#maquillage',
  },
];

const reviews = [
  {
    name: 'Sara Galasso',
    stars: 5,
    text: 'Wow! Got my eyebrows reshaped with Kubra. It was amazing — she worked very fast and I came out with a beautiful new brow line.',
    date: 'Février 2025',
  },
  {
    name: 'Huguette Burban',
    stars: 5,
    text: 'Première manucure avec Kubra. Super contente du résultat. Cette jeune femme est super gentille, très souriante et très professionnelle.',
    date: 'Décembre 2024',
  },
  {
    name: 'Lahihe KOC',
    stars: 5,
    text: "C'est le seul endroit à Vannes qui propose l'épilation des sourcils au fil. Kubra est vraiment adorable, dès qu'on entre on se sent bien.",
    date: 'Avril 2023',
  },
];

export default function HomePage() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      <ParticlesBackground />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facade.png"
            alt="MK Studio Vannes"
            fill
            className="object-cover"
            priority
            style={{ filter: 'brightness(0.25) saturate(0.8)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.8) 100%)',
            }}
          />
        </div>

        {/* Golden line left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.5), transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="category-badge animate-fade-up mb-8"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Institut de Beauté · Vannes · Morbihan
            </div>

            {/* Title */}
            <h1
              className="animate-fade-up"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                opacity: 0,
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
              }}
            >
              <span style={{ color: '#fff' }}>L&apos;art de</span>
              <br />
              <span className="shimmer">sublimer</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>votre beauté</span>
            </h1>

            <p
              className="animate-fade-up"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1rem',
                lineHeight: '1.8',
                maxWidth: '480px',
                marginBottom: '2.5rem',
                letterSpacing: '0.04em',
                opacity: 0,
                animationDelay: '0.6s',
                animationFillMode: 'forwards',
              }}
            >
              Kübra vous accueille dans son studio luxueux au cœur de Vannes pour des prestations
              d&apos;exception : extensions de cils, maquillage mariée, sourcils et ongles.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ opacity: 0, animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <Link href="/contact" className="btn-gold">
                Réserver un rendez-vous
              </Link>
              <Link href="/prestations" className="btn-outline">
                Voir les prestations
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex gap-12 mt-16 animate-fade-up"
              style={{ opacity: 0, animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              {[
                { value: '4,9★', label: 'Note Google' },
                { value: '21+', label: 'Avis clients' },
                { value: '3+', label: 'Années d\'expérience' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-thin tracking-tight"
                    style={{ color: '#C9A96E', fontFamily: 'var(--font-playfair)' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(201,169,110,0.8), transparent)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(201,169,110,0.5)' }}>Découvrir</span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative z-10 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-none z-0"
                  style={{ border: '1px solid rgba(201,169,110,0.15)' }}
                />
                <Image
                  src="/images/accueil.png"
                  alt="Espace accueil MK Studio"
                  width={600}
                  height={500}
                  className="relative z-10 w-full object-cover"
                  style={{ aspectRatio: '4/3', filter: 'brightness(0.9)' }}
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -right-6 z-20 p-5 animate-glow"
                  style={{
                    background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
                    minWidth: '120px',
                  }}
                >
                  <div className="text-2xl font-thin text-center" style={{ color: '#0A0A0A', fontFamily: 'var(--font-playfair)' }}>4,9</div>
                  <div className="text-xs text-center tracking-widest mt-1" style={{ color: 'rgba(10,10,10,0.7)' }}>★★★★★</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div>
                <div className="category-badge">Notre univers</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontWeight: 300,
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                    color: '#fff',
                  }}
                >
                  Un studio dédié à
                  <br />
                  <span className="gold-text">votre éclat</span>
                </h2>
                <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                  Bienvenue chez MK Studio, au cœur de Vannes. Kübra vous reçoit dans un espace luxueux et intimiste
                  pour des prestations haut de gamme : extensions de cils bluffantes, maquillage de mariée
                  somptueux, sourcils restructurés et ongles parfaits.
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                  Son expertise et sa passion font de chaque rendez-vous un moment unique, dédié entièrement
                  à sublimer votre beauté naturelle.
                </p>
                <Link href="/a-propos" className="btn-outline">
                  Découvrir Kübra
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="category-badge">Nos expertises</div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: '#fff',
                  marginTop: '1rem',
                }}
              >
                Des prestations
                <span className="gold-text"> d&apos;exception</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 120}>
                <Link href={s.href} className="luxury-card block p-8 h-full service-card-hover">
                  <div className="text-3xl mb-5">{s.icon}</div>
                  <h3
                    className="text-base font-medium mb-3 tracking-wide"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#E8D5B0' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {s.desc}
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm font-semibold" style={{ color: '#C9A96E' }}>{s.price}</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="text-center mt-12">
              <Link href="/prestations" className="btn-gold">
                Tous les tarifs
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="relative z-10 py-8 overflow-hidden">
        <div className="flex gap-4" style={{ animation: 'marquee 25s linear infinite' }}>
          {['/images/ongles1.png', '/images/ongles2.png', '/images/pieds.png', '/images/cils.png', '/images/cabine.png', '/images/ongles1.png', '/images/ongles2.png', '/images/pieds.png'].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-48 relative overflow-hidden">
              <Image
                src={src}
                alt="MK Studio"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.8) saturate(0.9)' }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.3)' }} />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* AVIS */}
      <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="category-badge">Témoignages</div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: '#fff',
                  marginTop: '1rem',
                }}
              >
                Elles parlent
                <span className="gold-text"> de nous</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <RevealOnScroll key={r.name} delay={i * 150}>
                <div className="luxury-card p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} style={{ color: '#C9A96E' }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#E8D5B0' }}>{r.name}</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>{r.date}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.02) 100%)',
            border: 'none',
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%)',
          }}
        />
        <RevealOnScroll>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="category-badge">Prenez rendez-vous</div>
            <h2
              className="mt-4 mb-6"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 300,
                color: '#fff',
                lineHeight: 1.2,
              }}
            >
              Prête à vous
              <br />
              <span className="shimmer">faire sublimer ?</span>
            </h2>
            <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', lineHeight: '1.8' }}>
              Contactez-nous ou réservez directement en ligne — réponse rapide garantie.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-gold animate-glow">
                Réserver en ligne
              </Link>
              <a href="tel:0770277958" className="btn-outline">
                07 70 27 79 58
              </a>
            </div>
            <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
              20 Rue Thiers · 56000 Vannes · Mardi au Samedi 09h30–19h00
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
