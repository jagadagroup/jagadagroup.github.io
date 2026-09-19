import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exportador de Pó de Magnésio para o Brasil — Jagada Industries',
  description: 'Jagada Industries exporta pó de magnésio, pó de magnálio e pó de alumínio para o Brasil. Fabricante indiano certificado ISO 9001:2008 desde 1992.',
};

export default function BrazilPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Fornecedor de Pó de Metal para o Brasil</h2>
          <h3>Jagada Industries — Exportador Certificado ISO desde 1992</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries exports Magnesium powder, Magnalium powder, and Aluminium powder to Brazil, one
          of the world&apos;s largest markets for pyrotechnic materials. Our ISO 9001:2008 certified facility
          in Virudhunagar, Tamil Nadu, India has been supplying high-purity metal powders to global buyers
          since 1992.
        </p>

        <h2 lang="pt-BR">Pó de Magnésio e Magnálio para o Brasil</h2>
        <p lang="pt-BR">
          A Jagada Industries é fabricante e exportadora indiana de pó de magnésio, pó de magnálio (liga
          alumínio-magnésio) e pó de alumínio para compradores no Brasil. Com mais de 30 anos de experiência
          na fabricação de pós metálicos para aplicações pirotécnicas e industriais, somos um dos principais
          exportadores de pó de magnésio para o mercado brasileiro.
        </p>

        <h2 lang="pt-BR">Produtos Disponíveis para o Brasil</h2>
        <ul lang="pt-BR">
          <li>
            <strong>Pó de Magnálio</strong> — Liga Al-Mg 50:50, disponível nas malhas 18, 40, 80, 100, 150,
            200 e 325
          </li>
          <li>
            <strong>Pó de Magnésio Grau 1</strong> — Pureza 99,8% conforme IS 2307, malha 40–80
          </li>
          <li>
            <strong>Pó de Magnésio Grau 2</strong> — Composição Mg-90%, Al-9,8%, malha 40–80
          </li>
          <li><strong>Grânulos de Magnésio</strong> — para aplicações pirotécnicas e industriais</li>
          <li><strong>Fita de Magnésio</strong> — para uso laboratorial e demonstração</li>
          <li><strong>Pó de Alumínio</strong> — grau industrial e pirotécnico</li>
        </ul>

        <h2 lang="pt-BR">Qualidade e Certificações</h2>
        <p lang="pt-BR">
          Todos os nossos pós metálicos exportados para o Brasil passam por rigoroso controle de qualidade:
        </p>
        <ul lang="pt-BR">
          <li>Fabricante certificado ISO 9001:2008</li>
          <li>Certificação de gestão ambiental ISO 14001</li>
          <li>Composição verificada por espectroscopia de emissão atômica</li>
          <li>Pureza do magnésio: 99,8% conforme padrão IS 2307</li>
          <li>Distribuição granulométrica uniforme em todo o produto</li>
          <li>Composição do magnálio: Al-50%, Mg-50% (verificada por lote)</li>
        </ul>

        <h2 lang="pt-BR">Logística e Envio para o Brasil</h2>
        <p lang="pt-BR">
          Exportamos pó de magnésio e pó de magnálio para o Brasil via frete marítimo, com embarque pelos
          portos indianos de Nhava Sheva (Mumbai) e Chennai. Os principais portos de destino no Brasil são
          o Porto de Santos (SP) e o Porto de Paranaguá (PR) — os dois maiores portos de importação do país.
          Os prazos de trânsito são competitivos e trabalhamos com despachantes aduaneiros experientes para
          garantir o desembaraço correto de produtos químicos e pós metálicos.
        </p>

        <h2 lang="pt-BR">Fornecedor de pó de magnésio Brasil — Por que escolher a Jagada Industries?</h2>
        <p lang="pt-BR">
          Como fabricante de pó de magnálio Brasil e exportador de pó de magnésio com décadas de experiência,
          a Jagada Industries oferece:
        </p>
        <ul lang="pt-BR">
          <li>Qualidade consistente lote a lote com certificados de análise</li>
          <li>Preços competitivos para importadores e distribuidores brasileiros</li>
          <li>Embalagem segura para transporte de pós inflamáveis conforme regulamentações internacionais</li>
          <li>Suporte técnico para especificação do produto certo para sua aplicação</li>
          <li>Experiência exportando para América Latina há mais de 30 anos</li>
        </ul>

        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 lang="pt-BR" style={{ marginTop: 0 }}>Solicite um Orçamento</h3>
          <p lang="pt-BR">
            Entre em contato com a Jagada Industries para receber preços, especificações técnicas e
            disponibilidade de pó de magnésio e pó de magnálio para o Brasil.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-block',
              backgroundColor: '#1a73e8',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Solicite um Orçamento
          </Link>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
          <p>
            <strong>Other export destinations:</strong>{' '}
            <Link href="/location/mexico">Mexico</Link> ·{' '}
            <Link href="/location/peru">Peru</Link> ·{' '}
            <Link href="/location/vietnam">Vietnam</Link> ·{' '}
            <Link href="/pt-PT">Português</Link>
          </p>
        </div>
      </div>
    </>
  );
}
