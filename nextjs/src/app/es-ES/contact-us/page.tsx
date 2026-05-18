import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';
import { getAlternates } from '@/lib/alternates';
import ContactFormComponent from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto — Jagada Industries',
  description: 'Póngase en contacto con Jagada Industries para materias primas pirotécnicas, polvos metálicos y productos metalúrgicos.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/es-ES/contact-us/',
    languages: getAlternates('/es-ES/contact-us/', 'es-ES'),
  },
  openGraph: { locale: 'es_ES' },
};

export default function EsContactPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/contactUs.css" />
      <div className="container-fluid">
        <div className="row">
          <div id="contact-header" className="col-12 imgc" style={{ backgroundImage: "url('/images/171109_06_49_10_5DSR4201.0.jpg')" }}>
            <div className="overlap d-flex align-items-center justify-content-center">
              <div className="content py-3 px-5">
                <h2>{t.contact.header}</h2>
                <h6>{t.contact.headerSub}</h6>
              </div>
            </div>
            <div className="border-anime"></div>
          </div>
        </div>
      </div>

      <div id="contact-us" className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/064-compass.svg" className="mb-4" alt="" />
            <h2>{t.contact.emailUs}</h2>
            <p>info@jagadagroup.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/081-magic.svg" className="mb-4" alt="" />
            <h2>{t.contact.phoneNumber}</h2>
            <p style={{ textAlign: 'center' }}>
              <span>M. Jeyakumar&nbsp;&nbsp;&nbsp;+91 9443144719</span><br />
              <span>J. Deleepkumar +91 9585544719</span>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/055-browser-1.svg" className="mb-4" alt="" />
            <h2>{t.contact.website}</h2>
            <p>https://jagadagroup.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/085-avatar.svg" className="mb-4" alt="" />
            <h2>{t.contact.address}</h2>
            <p style={{ textAlign: 'center' }}>
              <span>Jagada Industries</span><br />
              <span>3/1224-6, Sattur Road,</span><br />
              <span>Virudhunagar - 626002, TN</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <ContactFormComponent
            labels={{
              title: t.contact.enquiryForm,
              name: t.contact.name,
              address: t.contact.addressLabel,
              telephone: t.contact.telephone,
              email: t.contact.emailId,
              comments: t.contact.comments,
              mandatory: t.contact.mandatory,
              submit: t.contact.submit,
              reset: t.contact.reset,
              success: '¡Gracias por su consulta!',
            }}
          />
        </div>
      </div>
    </>
  );
}