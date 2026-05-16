import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Jagada Industries',
  description: 'Get in touch with Jagada Industries for pyrotechnic raw materials, metal powders, and metallurgical products.',
};

export default function ContactUsPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/contactUs.css" />
      <div className="container-fluid">
        <div className="row">
          <div id="contact-header" className="col-12 imgc" style={{ backgroundImage: "url('/images/171109_06_49_10_5DSR4201.0.jpg')" }}>
            <div className="overlap d-flex align-items-center justify-content-center">
              <div className="content py-3 px-5">
                <h2>MEET OUR EXPERTISE AT WORK</h2>
                <h6>We work closely with our customers to ensure compliance ahead of launch. Once everything is a go, your product will be on the market!</h6>
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
            <h2>E-MAIL US</h2>
            <p>info@jagadagroup.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/081-magic.svg" className="mb-4" alt="" />
            <h2>PHONE NUMBER</h2>
            <p style={{ textAlign: 'center' }}>
              <span>M. Jeyakumar&nbsp;&nbsp;&nbsp;+91 9443144719</span><br />
              <span>J. Deleepkumar +91 9585544719</span>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/055-browser-1.svg" className="mb-4" alt="" />
            <h2>WEBSITE</h2>
            <p>https://jagadagroup.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact-child d-flex flex-column justify-content-center align-items-center p-4">
            <img src="/svgs/085-avatar.svg" className="mb-4" alt="" />
            <h2>ADDRESS</h2>
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
              <h2 className="mb-3">Enquiry / Feedback Form</h2>
              <div className="form-group"><label htmlFor="contact-name">Name*</label><input id="contact-name" className="form-control" type="text" placeholder="John Doe" /></div>
              <div className="form-group"><label htmlFor="contact-address">Address*</label><textarea id="contact-address" className="form-control" rows={3}></textarea></div>
              <div className="form-group"><label htmlFor="contact-phone">Telephone</label><input id="contact-phone" className="form-control" type="text" placeholder="+91 90000 00000" /></div>
              <div className="form-group"><label htmlFor="contact-email">E-mail ID*</label><input id="contact-email" className="form-control" type="email" placeholder="johndoe@example.com" /></div>
              <div className="form-group"><label htmlFor="contact-comments">Comments</label><textarea id="contact-comments" className="form-control" rows={4}></textarea><small className="form-text">*Marked fields are mandatory</small></div>
              <div className="btn-group">
                <button className="btn btn-success" type="submit">Submit</button>
                <button className="btn btn-primary" type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}