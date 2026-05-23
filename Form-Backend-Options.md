# Form Backend Options — Jagada Group

> Internal document. Not for commit.

## Top 3 Options (Sorted by Simplicity)

### 1. Formspree (Zero infrastructure, 5-minute setup)

**How:** Sign up at formspree.io, get an endpoint URL, add it as the form `action`.

**Pros:**
- No server code, no Azure subscription, no API keys to manage
- 50 submissions/month free tier
- Handles spam filtering, file uploads, reCAPTCHA
- Instant email notification to info@jagadagroup.com
- Works with any static site — just an `<form action="...">` attribute

**Cons:**
- Paid beyond 50/month ($20/month for 1,000 submissions)
- Branded confirmation page on free tier (can customise on paid)

**Implementation (5 minutes):**
```tsx
<form
  action="https://formspree.io/f/xyzYourFormId"
  method="POST"
  className="newsletter px-5 w-100 py-2"
  style={{ background: 'whitesmoke' }}
>
  {/* ... existing fields ... */}
  {/* Formspree adds _subject, _replyto, etc. as hidden fields for routing */}
  <input type="hidden" name="_subject" value="New enquiry from jagadagroup.com" />
  <input type="text" name="_gotcha" style={{ display: 'none' }} />
</form>
```

---

### 2. Azure Functions (Your suggestion, more control)

**How:** Create an HTTP-triggered Azure Function that accepts POST, sends email via SendGrid, returns redirect.

**Pros:**
- You own the infrastructure, no third-party branding
- Unlimited submissions (you pay for Azure consumption, ~pennies)
- Can log to database, CRM, or Slack in future
- CORS can be restricted to jagadagroup.com only

**Cons:**
- Requires Azure subscription setup
- Cold start latency (~2-3 seconds for first request)
- Need to configure SendGrid/Mailgun for email delivery
- ~30 minutes to set up initially

**Implementation sketch:**
```js
// Azure Function (Node.js)
module.exports = async function (context, req) {
  const { name, email, phone, address, comments } = req.body || {};
  
  // Send email via SendGrid binding
  context.bindings.message = {
    personalizations: [{ to: [{ email: "info@jagadagroup.com" }] }],
    subject: `New Enquiry from ${name || 'Unknown'}`,
    content: [{ type: "text/plain", value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nComments: ${comments}` }]
  };

  // Redirect back to thank-you page
  context.res = {
    status: 302,
    headers: { Location: "https://www.jagadagroup.com/thank-you/" }
  };
};
```

**Form change:**
```tsx
<form
  action="https://jagada-functions.azurewebsites.net/api/contact"
  method="POST"
>
```

---

### 3. Google Apps Script (Free, Google Workspace integration)

**How:** Create a Google Apps Script web app, deploy it, use as form endpoint.

**Pros:**
- Completely free (unlimited submissions)
- Email lands directly in your Gmail/Workspace inbox
- Can also log to Google Sheets for lead tracking
- No external service dependency

**Cons:**
- Script is public (anyone can POST spam if they find the URL)
- No built-in spam filtering
- Slightly more complex to set up than Formspree
- ~15 minutes to set up

**Implementation:**
```js
// Google Apps Script — deployed as web app
function doPost(e) {
  const data = e.parameter;
  const body = `
    New enquiry from jagadagroup.com:
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.telephone}
    Comments: ${data.comments}
  `;
  
  // Send email
  MailApp.sendEmail({
    to: "info@jagadagroup.com",
    subject: "New Enquiry: " + data.name,
    body: body
  });
  
  // Log to sheet (optional)
  const sheet = SpreadsheetApp.openById("your-sheet-id").getActiveSheet();
  sheet.appendRow([new Date(), data.name, data.email, data.phone, data.comments]);
  
  // Redirect
  return HtmlService.createHtmlOutput(
    '<html><script>window.location.href="https://www.jagadagroup.com/thank-you/";</script></html>'
  );
}
```

**Form change:**
```tsx
<form
  action="https://script.google.com/macros/s/AKfycb.../exec"
  method="POST"
>
```

---

## Recommendation

| Priority | Option | Why |
|----------|--------|-----|
| **P0 — Do immediately** | Formspree | 5 min setup, no infrastructure. Prove the flow works. |
| **P1 — Later** | Azure Functions | When volume grows beyond 50/month or you want branding control. |
| **Alternative** | Google Apps Script | If you're already on Google Workspace and want free unlimited. |

Start with Formspree now, migrate to Azure Functions when traffic justifies it. Both require the exact same form HTML — just change the `action` URL.

---

## Implementation (Formspree)

1. Go to https://formspree.io → Create account → New Form
2. Get form ID (e.g., `xyzYourFormId`)
3. Verify your email (info@jagadagroup.com)
4. Add `action="https://formspree.io/f/xyzYourFormId"` to the contact form
5. Add hidden `_subject` field for email subject routing
6. Add `_next` hidden field to redirect to thank-you page

**Code change (contact-us page + es-ES contact page):**
```tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  className="newsletter px-5 w-100 py-2"
  style={{ background: 'whitesmoke' }}
>
  <input type="hidden" name="_subject" value="New enquiry from jagadagroup.com" />
  <input type="hidden" name="_next" value="https://www.jagadagroup.com/thank-you/" />
  <input type="text" name="_gotcha" style={{ display: 'none' }} />
  {/* ... rest of form fields unchanged ... */}
</form>
```

**Same change for es-ES contact form** with Spanish subject line.