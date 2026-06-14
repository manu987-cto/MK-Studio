import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function AProposPage() {
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
          <div className="category-badge">Notre histoire</div>
          <h1
            className="mt-4 mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 300,
              color: '#fff',
            }}
          >
            À propos de <span className="gold-text">Kübra</span>
          </h1>
          <div className="section-divider" />
        </RevealOnScroll>
      </section>

      {/* Bio section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll direction="left">
            <div className="relative">
              <div
                className="absolute -inset-4"
                style={{ border: '1px solid rgba(201,169,110,0.12)' }}
              />
              <Image
                src="/images/cils.png"
                alt="Kübra — MK Studio"
                width={600}
                height={700}
                className="relative z-10 w-full object-cover"
                style={{ aspectRatio: '3/4', filter: 'brightness(0.9)' }}
              />
              {/* Decorative element */}
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)',
                }}
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <div className="category-badge">Fondatrice & Esthéticienne</div>
              <h2
                className="mt-4 mb-2"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 300,
                  color: '#fff',
                }}
              >
                Kübra
              </h2>
              <div
                className="h-px mb-8"
                style={{ background: 'linear-gradient(90deg, #C9A96E, transparent)', width: '120px' }}
              />

              <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                <p>
                  Bienvenue chez <strong style={{ color: '#E8D5B0' }}>MK Studio</strong>, votre institut de beauté au cœur de Vannes (Morbihan).
                  Spécialiste du regard et des extensions de cils, je vous accueille dans un espace luxueux et
                  intimiste où chaque détail a été pensé pour votre confort.
                </p>
                <p>
                  Passionnée de beauté depuis toujours, j&apos;ai développé une expertise pointue dans les extensions
                  de cils (volume russe, mixte, cil à cil), le maquillage mariée avec contouring, la restructuration
                  de sourcils et les soins des ongles.
                </p>
                <p>
                  Mon approche ? Prendre le temps. Chaque cliente est unique et mérite une prestation
                  personnalisée, réalisée avec des produits premium et des techniques à la pointe.
                </p>
                <p>
                  Je ne fais pas de capsules américaines ni d&apos;acrylique — par choix de qualité et de santé
                  pour vos ongles naturels.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: '✦', label: 'Expertise', desc: 'Techniques maîtrisées' },
                  { icon: '◈', label: 'Produits premium', desc: 'Marques sélectionnées' },
                  { icon: '♡', label: 'Bienveillance', desc: 'Accueil chaleureux' },
                  { icon: '✿', label: 'Personnalisation', desc: 'Sur mesure pour vous' },
                ].map((v) => (
                  <div key={v.label} className="luxury-card p-4">
                    <div className="text-lg mb-2" style={{ color: '#C9A96E' }}>{v.icon}</div>
                    <div className="text-sm font-medium mb-1" style={{ color: '#E8D5B0' }}>{v.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Studio photos */}
      <section className="py-20 px-6 lg:px-12" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="category-badge">L&apos;espace</div>
              <h2
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  color: '#fff',
                }}
              >
                Notre <span className="gold-text">Studio</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['/images/accueil.png', '/images/cabine.png', '/images/espace.png', '/images/produits.png'].map((src, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="relative overflow-hidden aspect-square group">
                  <Image
                    src={src}
                    alt="MK Studio"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    style={{ filter: 'brightness(0.75)' }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)' }}
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="luxury-card p-10 text-center">
              <div className="category-badge mb-6">Nous rendre visite</div>
              <h3
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '2rem',
                  fontWeight: 300,
                  color: '#fff',
                }}
              >
                Trouvez-nous à <span className="gold-text">Vannes</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { icon: '◈', label: 'Adresse', value: '20 Rue Thiers\n56000 Vannes' },
                  { icon: '⏰', label: 'Horaires', value: 'Mardi au Samedi\n09h30 – 19h00' },
                  { icon: '☎', label: 'Téléphone', value: '07 70 27 79 58' },
                ].map((info) => (
                  <div key={info.label}>
                    <div className="text-xl mb-3" style={{ color: '#C9A96E' }}>{info.icon}</div>
                    <div className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {info.label}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: '#E8D5B0', whiteSpace: 'pre-line', letterSpacing: '0.04em', lineHeight: '1.7' }}
                    >
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-gold">Prendre rendez-vous</Link>
                <a
                  href="https://maps.google.com/?q=20+Rue+Thiers+56000+Vannes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
