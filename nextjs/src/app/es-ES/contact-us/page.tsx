import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contáctenos — Jagada Industries',
  description: 'Póngase en contacto con Jagada Industries para materias primas pirotécnicas, polvos metálicos y productos metalúrgicos.',
  openGraph: { locale: 'es_ES' },
};

function ContactCard({ icon, title, content }: { icon: string; title: string; content: string }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
      <Image src={icon} alt="" width={48} height={48} className="mb-4" />
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-center text-sm mt-2 whitespace-pre-line">{content}</p>
    </div>
  );
}

export default function EsContactPage() {
  const dict = getDictionary('es-ES');
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div id="contact-header" className="col-12 imgc" style={{ backgroundImage: "url('/images/171109_06_49_10_5DSR4201.0.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="overlap d-flex align-items-center justify-content-center p-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="content py-3 px-5 text-center text-white">
                <h2 className="text-2xl font-bold">{dict.contact.header}</h2>
                <h6 className="text-base mt-2 opacity-90">{dict.contact.headerSub}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-us" className="container-fluid py-5">
        <ContactCard icon="/svgs/064-compass.svg" title={dict.contact.emailUs} content="info@jagadagroup.com" />
        <ContactCard icon="/svgs/081-magic.svg" title={dict.contact.phoneNumber} content="M. Jeyakumar +91 9443144719\nJ. Deleepkumar +91 9585544719" />
        <ContactCard icon="/svgs/055-browser-1.svg" title={dict.contact.website} content="https://jagadagroup.com" />
        <ContactCard icon="/svgs/085-avatar.svg" title={dict.contact.address} content="Jagada Industries\n3/1224-6, Sattur Road,\nVirudhunagar - 626002, TN" />
      </div>
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-4 pb-5">
            <form className="px-5 w-full py-4" style={{ background: 'whitesmoke' }}>
              <h2 className="text-xl font-semibold mb-3">{dict.contact.enquiryForm}</h2>
              <div className="form-group"><label htmlFor="es-contact-name" className="block mb-1">{dict.contact.name}</label><input id="es-contact-name" type="text" className="form-control w-full border rounded p-2" /></div>
              <div className="form-group mt-3"><label htmlFor="es-contact-address" className="block mb-1">{dict.contact.addressLabel}</label><textarea id="es-contact-address" rows={3} className="form-control w-full border rounded p-2" /></div>
              <div className="form-group mt-3"><label htmlFor="es-contact-phone" className="block mb-1">{dict.contact.telephone}</label><input id="es-contact-phone" type="text" className="form-control w-full border rounded p-2" /></div>
              <div className="form-group mt-3"><label htmlFor="es-contact-email" className="block mb-1">{dict.contact.emailId}</label><input id="es-contact-email" type="email" className="form-control w-full border rounded p-2" /></div>
              <div className="form-group mt-3"><label htmlFor="es-contact-comments" className="block mb-1">{dict.contact.comments}</label><textarea id="es-contact-comments" rows={4} className="form-control w-full border rounded p-2" /></div>
              <small className="text-gray-500">{dict.contact.mandatory}</small>
              <div className="mt-3 flex gap-3">
                <button type="submit" className="btn btn-success px-4 py-2">{dict.contact.submit}</button>
                <button type="reset" className="btn btn-primary px-4 py-2">{dict.contact.reset}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}