import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';
import { getAlternates } from '@/lib/alternates';

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
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-4 pb-5">
            <form className="newsletter px-5 w-100 py-2" style={{ background: 'whitesmoke' }}>
              <h2 className="mb-3">{t.contact.enquiryForm}</h2>
              <div className="form-group"><label htmlFor="es-contact-name">{t.contact.name}</label><input id="es-contact-name" className="form-control" type="text" placeholder="John Doe" /></div>
              <div className="form-group"><label htmlFor="es-contact-address">{t.contact.addressLabel}</label><textarea id="es-contact-address" className="form-control" rows={3}></textarea></div>
              <div className="form-group"><label htmlFor="es-contact-phone">{t.contact.telephone}</label><input id="es-contact-phone" className="form-control" type="text" placeholder="+91 90000 00000" /></div>
              <div className="form-group"><label htmlFor="es-contact-email">{t.contact.emailId}</label><input id="es-contact-email" className="form-control" type="email" placeholder="ejemplo@correo.com" /></div>
              <div className="form-group"><label htmlFor="es-contact-comments">{t.contact.comments}</label><textarea id="es-contact-comments" className="form-control" rows={4}></textarea><small className="form-text">{t.contact.mandatory}</small></div>
              <div className="btn-group">
                <button className="btn btn-success" type="submit">{t.contact.submit}</button>
                <button className="btn btn-primary" type="reset">{t.contact.reset}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}