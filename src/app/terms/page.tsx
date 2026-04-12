import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JJCX Inc.",
  description: "Terms of service for JJCX Inc. consulting services and jjcx.dev.",
};

export default function TermsOfService() {
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

            <h1 className="article-title">Terms of Service</h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "48px" }}>Effective April 12, 2026</p>

            <h2>Overview</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the jjcx.dev website and any services
              provided by JJCX Inc. (&quot;JJCX,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
              accessing our website or purchasing our services, you agree to be bound by these Terms.
            </p>

            <h2>Services</h2>
            <p>
              JJCX provides consulting services in annotation operations and AI program management. Our service
              offerings include fractional AI PM and annotation operations leadership, HITL workflow audits and
              redesigns, advisory retainers, and digital products such as office hours and async audits. Service
              scope, deliverables, and timelines are defined in individual agreements with each client.
            </p>

            <h2>Payments and refunds</h2>
            <p>
              Payments for services are processed through Stripe. All fees are stated in the applicable service
              listing or client agreement. For one-time purchases (such as async audits), payment is due at time
              of purchase. For retainer and hourly engagements, payment terms are defined in the client agreement.
            </p>
            <p>
              If you are unsatisfied with a service, contact us at j@jjcx.dev within 7 days of delivery. We will
              work to resolve the issue or provide a refund at our discretion. Refunds for consulting hours already
              delivered are not available.
            </p>

            <h2>Scheduling and cancellations</h2>
            <p>
              Scheduled sessions (such as office hours) may be rescheduled or cancelled with at least 24 hours&apos;
              notice. Cancellations with less than 24 hours&apos; notice may forfeit the session fee. We reserve
              the right to reschedule sessions with reasonable notice.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on jjcx.dev, including articles, case studies, tools, and design elements, is the
              property of JJCX Inc. and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works from our content without written permission.
            </p>
            <p>
              Work product created for clients as part of a consulting engagement is governed by the terms of the
              individual client agreement.
            </p>

            <h2>Use of tools and resources</h2>
            <p>
              Free tools and resources on jjcx.dev (such as the scoring calculator) are provided as-is for
              informational purposes. Results are illustrative and should not be treated as professional advice
              for your specific situation. For tailored guidance, engage our consulting services.
            </p>

            <h2>Acceptable use</h2>
            <p>
              You agree not to use our website or services in any way that violates applicable laws, infringes
              on the rights of others, attempts to interfere with the operation of our website, or misrepresents
              your identity or affiliation. We reserve the right to terminate access to our services for any user
              who violates these Terms.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              JJCX provides consulting services and content on a best-efforts basis. We are not liable for any
              indirect, incidental, or consequential damages arising from the use of our website or services.
              Our total liability for any claim related to our services is limited to the amount you paid for
              the specific service giving rise to the claim.
            </p>

            <h2>Disclaimer</h2>
            <p>
              Our website and free tools are provided &quot;as is&quot; without warranties of any kind, either
              express or implied. We do not guarantee that our website will be available without interruption
              or free from errors.
            </p>

            <h2>Governing law</h2>
            <p>
              These Terms are governed by the laws of the Province of Ontario, Canada. Any disputes arising from
              these Terms or your use of our services will be resolved in the courts of Ontario, Canada.
            </p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with an updated
              effective date. Continued use of our website or services after changes are posted constitutes
              acceptance of the revised Terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these Terms? Reach out
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
