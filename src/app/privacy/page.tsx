import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JJCX Inc.",
  description: "Privacy policy for JJCX Inc. consulting services and jjcx.dev.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <a className="nav-logo" href="/">
            <svg viewBox="0 0 1558 485" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "28px", width: "auto", display: "block" }}>
              <path d="M7.65839 397.369L74.8308 311.868H124.233C184.335 311.868 209.269 302.099 209.269 270.002V99.5587H312.539V262.001C312.539 352.339 249.74 397.369 124.233 397.369H7.65839Z" fill="#00878A" />
              <path d="M341.474 397.369L408.646 311.868H458.049C518.151 311.868 543.084 302.099 543.084 270.002V99.5587H646.355V262.001C646.355 352.339 583.555 397.369 458.049 397.369H341.474Z" fill="#00878A" />
              <path d="M870.759 397.369C766.186 397.369 689.152 331.964 689.152 245.533C689.152 158.265 766.186 99.5587 870.759 99.5587H1084.46L1018.59 186.362H870.759C823.125 186.362 792.422 201.527 792.422 245.533C792.422 290.005 823.125 311.868 870.759 311.868H1084.46L1018.59 397.369H870.759Z" fill="#00878A" />
              <path d="M1409.81 397.369L1319.01 305.635L1224.67 397.369H1096.47L1190.43 308.798C1237.6 264.327 1252.77 252.697 1259.84 247.859C1252.67 242.091 1237.6 230.926 1196.67 191.293L1100.93 99.5587H1243.84L1329.34 186.362L1415.67 99.5587H1548.81L1449.08 192.595C1414.84 224.6 1400.14 236.695 1390.74 243.766C1403.67 252.232 1422.37 268.234 1464.15 309.635L1554.95 397.369H1409.81Z" fill="#00878A" />
            </svg>
          </a>
          <ul className="nav-links">
            <li><a href="/#services">Services</a></li>
            <li><a href="/work">Case Studies</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact" className="nav-cta">Get in touch</a></li>
          </ul>
        </div>
      </nav>

      <div className="article-page">
        <div className="container">
          <div className="article-content">

            <div className="section-label">JJCX Inc.</div>
            <h1>Privacy Policy</h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "48px" }}>Effective April 12, 2026</p>

            <h2>Who we are</h2>
            <p>
              JJCX Inc. (&quot;JJCX,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a consulting
              business specializing in annotation operations and AI program management. We operate the website
              jjcx.dev and provide professional services to our clients.
            </p>

            <h2>Information we collect</h2>
            <p>
              We collect information you voluntarily provide to us when you use our website or engage with our services.
              This may include your name, email address, company name, and any other details you share when contacting
              us, subscribing to content, or purchasing services.
            </p>
            <p>
              When you visit jjcx.dev, we may automatically collect certain technical information including your
              IP address, browser type, operating system, referring URL, and pages visited. This data is collected
              through standard web server logs and analytics tools to help us understand how our site is used.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use the information we collect to respond to your inquiries, deliver consulting services you have
              purchased, send content you have opted into (such as articles or guides), improve our website and
              services, and comply with legal obligations.
            </p>

            <h2>Payment processing</h2>
            <p>
              Payments for our services are processed through Stripe. We do not store your credit card number or
              full payment details on our servers. Stripe&apos;s handling of your payment information is governed by
              their own privacy policy, available at stripe.com/privacy.
            </p>

            <h2>Email communications</h2>
            <p>
              If you provide your email address through our website (for example, through a content download or
              contact form), we may send you occasional emails related to our services and content. Every email
              includes an unsubscribe link. We will never sell or share your email address with third parties
              for marketing purposes.
            </p>

            <h2>Cookies and tracking</h2>
            <p>
              jjcx.dev may use cookies and similar technologies to analyze site traffic and understand usage
              patterns. You can control cookie settings through your browser. Our site does not respond to
              Do Not Track signals, but we limit tracking to what is necessary for site operation and analytics.
            </p>

            <h2>Third-party services</h2>
            <p>
              We may use third-party services such as Stripe (payments), Calendly (scheduling), Vercel (hosting),
              and analytics providers. Each of these services has its own privacy policy governing their use of
              your data. We only share the minimum information necessary for these services to function.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described
              in this policy, or as required by law. If you request deletion of your data, we will comply within
              a reasonable timeframe.
            </p>

            <h2>Your rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal information.
              You may also opt out of any marketing communications at any time. To exercise these rights, contact
              us at j@jjcx.dev.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware that we have collected data from a minor,
              we will take steps to delete it promptly.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an
              updated effective date. Your continued use of our website after any changes constitutes acceptance
              of the updated policy.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, contact us
              at <a href="mailto:j@jjcx.dev" style={{ color: "var(--accent-light)" }}>j@jjcx.dev</a>.
            </p>

          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <span className="footer-left">&copy; 2026 JJCX Inc.</span>
          <div className="footer-right">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="https://linkedin.com/in/justinjchambers" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:j@jjcx.dev">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
