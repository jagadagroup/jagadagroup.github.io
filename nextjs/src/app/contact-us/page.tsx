import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us — Jagada Industries',
  description: 'Get in touch with Jagada Industries for pyrotechnic raw materials, metal powders, and metallurgical products. Phone, email, and address available.',
};

export default function ContactUsPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            id="contact-header"
            className="col-12 imgc"
            style={{ backgroundImage: "url('/images/171109_06_49_10_5DSR4201.0.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="overlap d-flex align-items-center justify-content-center p-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="content py-3 px-5 text-center text-white">
                <h2 className="text-2xl font-bold">MEET OUR EXPERTISE AT WORK</h2>
                <h6 className="text-base mt-2 opacity-90">
                  We work closely with our customers to ensure compliance ahead of launch.
                  Once everything is a go, your product will be on the market!
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-us" className="container-fluid py-5">
        <div className="row">
          <ContactCard icon="/svgs/064-compass.svg" title="E-MAIL US" content="info@jagadagroup.com" />
          <ContactCard icon="/svgs/081-magic.svg" title="PHONE NUMBER" content="M. Jeyakumar +91 9443144719\nJ. Deleepkumar +91 9585544719" />
          <ContactCard icon="/svgs/055-browser-1.svg" title="WEBSITE" content="https://jagadagroup.com" />
          <ContactCard icon="/svgs/085-avatar.svg" title="ADDRESS" content="Jagada Industries\n3/1224-6, Sattur Road,\nVirudhunagar - 626002, TN" />
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-4 pb-5">
            <form className="px-5 w-full py-4" style={{ background: 'whitesmoke' }}>
              <h2 className="text-xl font-semibold mb-3">Enquiry / Feedback Form</h2>
              <div className="form-group">
                <label htmlFor="contact-name" className="block mb-1">Name*</label>
                <input id="contact-name" type="text" placeholder="John Doe" className="form-control w-full border rounded p-2" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="contact-address" className="block mb-1">Address*</label>
                <textarea id="contact-address" rows={3} className="form-control w-full border rounded p-2" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="contact-phone" className="block mb-1">Telephone</label>
                <input id="contact-phone" type="text" placeholder="+91 90000 00000" className="form-control w-full border rounded p-2" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="contact-email" className="block mb-1">E-mail ID*</label>
                <input id="contact-email" type="email" placeholder="johndoe@example.com" className="form-control w-full border rounded p-2" />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="contact-comments" className="block mb-1">Comments</label>
                <textarea id="contact-comments" rows={4} className="form-control w-full border rounded p-2" />
                <small className="text-gray-500">*Marked fields are mandatory</small>
              </div>
              <div className="mt-3 flex gap-3">
                <button type="submit" className="btn btn-success px-4 py-2">Submit</button>
                <button type="reset" className="btn btn-primary px-4 py-2">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactCard({ icon, title, content }: { icon: string; title: string; content: string }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
      <Image src={icon} alt="" width={48} height={48} className="mb-4" />
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-center text-sm mt-2 whitespace-pre-line">{content}</p>
    </div>
  );
}