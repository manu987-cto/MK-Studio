'use client';

import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';

const images = [
  { src: '/images/facade.png', title: 'Notre studio', category: 'Studio' },
  { src: '/images/facade2.png', title: 'Enseigne MK Studio', category: 'Studio' },
  { src: '/images/accueil.png', title: 'Espace d\'accueil', category: 'Studio' },
  { src: '/images/cabine.png', title: 'Cabine de soin', category: 'Studio' },
  { src: '/images/table.png', title: 'Table de soin', category: 'Studio' },
  { src: '/images/espace.png', title: 'Espace manucure', category: 'Studio' },
  { src: '/images/produits.png', title: 'Produits premium', category: 'Produits' },
  { src: '/images/ongles1.png', title: 'Nail art pastel', category: 'Ongles' },
  { src: '/images/ongles2.png', title: 'French nails fleuris', category: 'Ongles' },
  { src: '/images/pieds.png', title: 'Beauté des pieds', category: 'Pieds' },
  { src: '/images/cils.png', title: 'Extension de cils', category: 'Cils' },
];

export default function GaleriePage() {
  return (
    <div style={{ background: '#0A0A0A', paddingTop: '80px' }}>
      {/* Header */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ borderBottom: '1px solid rgba(201,169,110,0.1)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(201,169,110,0.08) 0%, transparent 60%)' }}
        />
        <RevealOnScroll>
          <div className="category-badge">Notre univers visuel</div>
          <h1
            className="mt-4 mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 300,
              color: '#fff',
            }}
          >
            La <span className="gold-text">Galerie</span>
          </h1>
          <div className="section-divider" />
        </RevealOnScroll>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <div
                className="break-inside-avoid relative group overflow-hidden"
                style={{ border: '1px solid rgba(201,169,110,0.15)' }}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={600}
                  height={450}
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ display: 'block', filter: 'brightness(0.85)' }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                >
                  <div className="category-badge" style={{ marginBottom: '6px' }}>{img.category}</div>
                  <h3 className="text-sm font-medium" style={{ color: '#E8D5B0', letterSpacing: '0.06em' }}>
                    {img.title}
                  </h3>
                </div>

                {/* Golden corner */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, transparent 50%, rgba(201,169,110,0.5) 50%)',
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <RevealOnScroll>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
            Envie de vivre l&apos;expérience MK Studio ?
          </p>
          <a href="/contact" className="btn-gold">Prendre rendez-vous</a>
        </RevealOnScroll>
      </section>
    </div>
  );
}
