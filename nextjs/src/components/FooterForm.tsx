'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';

export default function FooterForm() {
  const [state, handleSubmit] = useForm('xaqkyrwa');
  const [showForm, setShowForm] = useState(true);

  if (!showForm || state.succeeded) {
    return (
      <div className="py-2 px-3 w-100">
        <h6 style={{ color: '#ccc' }}>Any queries?</h6>
        <p className="mb-2" style={{ color: '#999' }}>Keep up with the latest new in industry</p>
        {state.succeeded ? (
          <p className="text-success small mb-0">✓ Enquiry sent!</p>
        ) : (
          <a href="/contact-us/" className="btn btn-primary btn-sm">ENQUIRE NOW</a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter py-2 px-3 w-100">
      <input type="hidden" name="_subject" value="Footer enquiry — jagadagroup.com" />
      <input type="hidden" name="form_source" value="footer" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <h6 style={{ color: '#ccc' }}>Any queries?</h6>
      <p className="mb-1" style={{ color: '#999' }}>Keep up with the latest new in industry</p>
      <div className="form-group d-flex flex-row">
        <div className="input-group">
          <input className="form-control" type="text" name="query" placeholder="Type your query here..." />
        </div>
      </div>
      <div className="form-group d-flex flex-row">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input className="form-control" type="email" name="email" placeholder="ben@example.com" required />
          <div className="input-group-append d-md-none">
            <button className="input-group-text" type="submit" disabled={state.submitting}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <button className="btn btn-primary d-none d-md-block ml-4" type="submit" disabled={state.submitting}>
          {state.submitting ? '...' : 'SEND'}
        </button>
      </div>
    </form>
  );
}