import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Metal Powder FAQ — Magnalium, Magnesium & Titanium — Jagada Industries',
  description: 'Answers to common questions about Magnalium powder, Magnesium powder, and Titanium powder — composition, mesh sizes, coated vs uncoated, certifications, and export.',
  alternates: { canonical: '/faq/', languages: { en: '/faq/', 'x-default': '/faq/' } },
};

const FAQS = [
  {
    question: 'What is Magnalium powder?',
    answer:
      'Magnalium is a 50% Aluminium / 50% Magnesium alloy powder used in pyrotechnics and fireworks manufacturing. Unlike a mechanical blend of aluminium and magnesium powders, Magnalium is melted and atomized as a single alloy — the magnesium component ignites first, at a lower temperature, then rapidly heats the aluminium component for a brighter, more sustained reaction than either metal produces alone.',
  },
  {
    question: 'What is the difference between Magnalium and Magnesium powder?',
    answer:
      'Magnesium powder is a pure metal and burns at a higher flame temperature (around 3,100°C) than Magnalium (around 2,200°C), producing more brightness but also more sensitivity to moisture and impact. Magnalium is an Aluminium-Magnesium alloy that trades some brightness for better stability, longer shelf life, and lower cost — for most fireworks compositions, Magnalium is the more practical choice.',
  },
  {
    question: "What is the composition of Jagada's Magnalium powder?",
    answer:
      "Jagada Industries' Magnalium powder is a 50% Aluminium / 50% Magnesium alloy by weight, made from virgin (not recycled) metal ingots and verified by OES (Optical Emission Spectroscopy) testing on every batch.",
  },
  {
    question: 'What mesh size of Magnalium powder should I use for fireworks?',
    answer:
      'Mesh size depends on the effect: coarser mesh (18–40) suits fountains and sparklers, mid-range mesh (80–150) suits color stars and strobe/glitter effects, and finer mesh (200–325) suits flash powder and crackling/dragon-egg effects. Jagada Industries manufactures Magnalium powder in all 7 standard mesh sizes — 18, 40, 80, 100, 150, 200, and 325 mesh.',
  },
  {
    question: 'What is the difference between coated and uncoated Magnesium powder?',
    answer:
      'Uncoated Magnesium powder reacts with moisture in the air, forming a hydroxide layer that degrades burn performance over time. Grade 1 Magnesium Powder (Coated) has a thin polymer coating that blocks moisture without affecting burn rate — recommended for humid climates or long storage. Uncoated Magnesium is suitable for dry climates where cost matters more than shelf life.',
  },
  {
    question: 'Do you export Magnalium and Magnesium powder internationally?',
    answer:
      'Yes. Jagada Industries has manufactured and exported Magnalium, Magnesium, and Titanium powders since 1992 to customers worldwide. For humid or tropical export markets, we recommend Grade 1 Magnesium Powder (Coated) over uncoated Magnesium, since uncoated powder degrades faster in high humidity.',
  },
  {
    question: 'What certifications does Jagada Industries hold?',
    answer: 'Jagada Industries is ISO 9001:2008 and ISO 14001 certified.',
  },
  {
    question: 'Is Jagada Industries a manufacturer or a trader?',
    answer:
      "Jagada Industries is a manufacturer, not a trader or reseller. We produce Magnalium, Magnesium, and Titanium powders in our own facility in Virudhunagar, Tamil Nadu, India — the heart of India's fireworks manufacturing region — and have done so since 1992.",
  },
];

export default function FaqPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/blog.css" />
      <FAQPageJsonLd items={FAQS} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq/' }]} />

      <article className="blog-container blog-body">
        <Link href="/" className="blog-back">&larr; Back to Home</Link>

        <h1 className="blog-title">Metal Powder FAQ</h1>
        <p className="blog-meta">Jagada Industries &middot; Magnalium, Magnesium &amp; Titanium Powder</p>

        <p className="blog-lead">
          Common questions about Magnalium, Magnesium, and Titanium powder — composition, mesh
          sizes, coated vs. uncoated grades, certifications, and export. For product-specific
          specifications, see our{' '}
          <Link href="/magnalium/">Magnalium</Link> and <Link href="/magnesium/">Magnesium</Link>{' '}
          catalog pages, or read our full{' '}
          <Link href="/blog/magnalium-vs-magnesium-vs-aluminum/">
            Magnalium vs Magnesium vs Aluminum comparison guide
          </Link>.
        </p>

        {FAQS.map((faq) => (
          <section key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </section>
        ))}

        <div className="blog-cta">
          <p><strong>Have a question we didn&apos;t answer?</strong></p>
          <div>
            <Link href="/products/" className="btn btn-outline-light btn-sm">Browse Products</Link>
            <Link href="/contact-us/" className="btn btn-warning btn-sm">Ask Us</Link>
          </div>
        </div>
      </article>
    </>
  );
}
