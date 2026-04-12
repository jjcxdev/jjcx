import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annotation Program Audit — JJCX Inc.",
  description:
    "Fixed-scope async audit of your annotation program. Written report with failure points and priority-ranked recommendations within five business days.",
};

export default function AuditPage() {
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

            <h1 className="article-title">Annotation Program <span className="article-title-accent">Audit</span></h1>

            <p>
              A fixed-scope, fixed-price diagnostic of your annotation program.
              Find out where your program is broken and what to fix first.
            </p>

            <h2>How it works</h2>
            <p>
              You submit your documentation, guidelines, QA process details, and workflow structure
              through a structured intake form. I review everything, identify failure points, and
              deliver a written report with concrete, priority-ranked recommendations within
              five business days.
            </p>
            <p>
              This is not a consulting engagement. It is a diagnostic. It answers the question:
              where is your program broken and what should you fix first?
            </p>

            <h2>What you get</h2>
            <p>
              A written audit report covering QA loop integrity, annotator feedback mechanisms,
              scoring methodology, documentation quality, and workflow bottlenecks. Every finding
              comes with priority-ranked recommendations and implementation notes. The audit
              includes one 30-minute follow-up call to walk through the findings together.
            </p>

            <h2>Who this is for</h2>
            <p>
              AI teams and program managers running annotation programs who know something
              is off but can&apos;t pinpoint where. Quality scores are stuck, annotator
              performance is inconsistent, or the QA loop feels like it&apos;s running on
              assumptions instead of data. If you&apos;re spending more time firefighting than
              building, this audit will tell you exactly where to focus.
            </p>

            <h2>What happens next</h2>
            <p>
              Audit findings naturally surface the scope for deeper work. If you decide to
              move forward with a full HITL Workflow Audit &amp; Redesign engagement within
              30 days, the $2,000 audit fee is credited toward the project.
            </p>

            <hr />

            <div className="pricing-block">
              <p className="pricing-amount">$2,000 <span className="pricing-currency">CAD</span></p>
              <p className="pricing-detail">Written report in 5 business days &nbsp;·&nbsp; 30-min follow-up call</p>
              <a href="https://buy.stripe.com/7sY00kepm2Ru6CY3FIeUU00" target="_blank" rel="noopener noreferrer" className="btn-primary">Get started</a>
              <p className="pricing-footnote">
                Questions first? <a href="mailto:j@jjcx.dev">j@jjcx.dev</a>
              </p>
            </div>

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
