'use client';

import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  formId?: string;
  labels: {
    title: string;
    name: string;
    address: string;
    telephone: string;
    email: string;
    comments: string;
    mandatory: string;
    submit: string;
    reset: string;
    success: string;
  };
}

export default function ContactFormComponent({
  formId = 'xaqkyrwa',
  labels,
}: ContactFormProps) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-4 pb-5">
        <div className="px-5 w-100 py-5 text-center" style={{ background: '#f0fdf4' }}>
          <h2 className="mb-3" style={{ color: '#16a34a' }}>✓ {labels.success}</h2>
          <p className="text-muted">We will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-4 pb-5">
      <form onSubmit={handleSubmit} className="newsletter px-5 w-100 py-2" style={{ background: 'whitesmoke' }}>
        <input type="hidden" name="_subject" value="Contact page enquiry — jagadagroup.com" />
        <input type="hidden" name="form_source" value="contact-us-page" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        <h2 className="mb-3">{labels.title}</h2>

        <div className="form-group">
          <label htmlFor="contact-name">{labels.name}</label>
          <input id="contact-name" className="form-control" type="text" name="name" placeholder="John Doe" required />
          <ValidationError field="name" prefix={labels.name} errors={state.errors} className="text-danger small" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-address">{labels.address}</label>
          <textarea id="contact-address" className="form-control" name="address" rows={3} required />
          <ValidationError field="address" prefix={labels.address} errors={state.errors} className="text-danger small" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-phone">{labels.telephone}</label>
          <input id="contact-phone" className="form-control" type="text" name="phone" placeholder="+91 90000 00000" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">{labels.email}</label>
          <input id="contact-email" className="form-control" type="email" name="email" placeholder="johndoe@example.com" required />
          <ValidationError field="email" prefix={labels.email} errors={state.errors} className="text-danger small" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-comments">{labels.comments}</label>
          <textarea id="contact-comments" className="form-control" name="comments" rows={4} />
        </div>

        <small className="form-text text-muted">{labels.mandatory}</small>

        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className="alert alert-danger mt-2 py-2 small" role="alert">
            Please correct the highlighted fields above.
          </div>
        )}

        <div className="btn-group mt-3">
          <button className="btn btn-success" type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : labels.submit}
          </button>
          <button className="btn btn-primary" type="reset">{labels.reset}</button>
        </div>
      </form>
    </div>
  );
}