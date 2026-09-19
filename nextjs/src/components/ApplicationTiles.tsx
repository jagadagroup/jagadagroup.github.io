import Link from 'next/link';

type Tile = { href: string; title: string; desc: string; icon: string };

const magnaliumTiles: Tile[] = [
  { href: '/magnalium-for-fireworks/', title: 'Magnalium for Fireworks', desc: 'Fountains, bursts, colour compositions — the right mesh for every effect.', icon: '✨' },
  { href: '/blog/how-to-choose-mesh-size-magnalium-powder/', title: 'Mesh Size Guide', desc: 'Pick the right Magnalium mesh for strobes and crackling stars.', icon: '💥' },
  { href: '/metal-powder-for-defense/', title: 'Defense & Aerospace', desc: 'High-purity Al-Mg alloy powders meeting defense-grade specifications.', icon: '🛡️' },
];

const magnesiumTiles: Tile[] = [
  { href: '/magnesium-powder-for-fireworks/', title: 'Fireworks Grade Magnesium', desc: 'Bright white stars & mines — Grade 1 & 2 IS 2307 powder.', icon: '✨' },
  { href: '/magnesium-powder-for-defense/', title: 'Defense Applications', desc: 'Illuminating flares, signals & countermeasures — batch-verified.', icon: '🛡️' },
  { href: '/magnesium-exporters/', title: 'Export to Your Country', desc: 'Ship to Mexico, Brazil, Peru, Vietnam and worldwide.', icon: '🌍' },
];

export function MagnaliumApplicationTiles() {
  return <ApplicationTiles tiles={magnaliumTiles} heading="Applications" />;
}

export function MagnesiumApplicationTiles() {
  return <ApplicationTiles tiles={magnesiumTiles} heading="Applications" />;
}

function ApplicationTiles({ tiles, heading }: { tiles: Tile[]; heading: string }) {
  return (
    <div className="container-fluid" style={{ background: '#f8f9fa', padding: '2.5rem 1rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h3 style={{ textAlign: 'center', color: '#1a3c6b', marginBottom: '1.5rem', fontWeight: 700 }}>{heading}</h3>
        <div className="row">
          {tiles.map((tile) => (
            <div key={tile.href} className="col-12 col-md-4 mb-3">
              <Link href={tile.href} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem', height: '100%', background: '#fff', transition: 'box-shadow 0.2s' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tile.icon}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a3c6b', marginBottom: '0.4rem' }}>{tile.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>{tile.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
