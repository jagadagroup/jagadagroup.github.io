import type { Metadata } from 'next';
import ContactFormComponent from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Get Quote — Contact Jagada Industries for Metal Powders',
  description: 'Contact Jagada Industries for Magnalium powder, Magnesium powder, and Al-Mg alloy powder pricing. Phone, email, and enquiry form available.',
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
          <ContactFormComponent
            labels={{
              title: 'Enquiry / Feedback Form',
              name: 'Name*',
              address: 'Address*',
              telephone: 'Telephone',
              email: 'E-mail ID*',
              comments: 'Comments',
              mandatory: '*Marked fields are mandatory',
              submit: 'Submit',
              reset: 'Reset',
              success: 'Thank you for your enquiry!',
            }}
          />
        </div>
      </div>
    </>
  );
}