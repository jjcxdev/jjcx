export default function Home() {
  return (
    <>
      {/* NAV */}
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
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Case Studies</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get in touch</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="hero-label">JJCX Inc. &nbsp;·&nbsp; Annotation Operations &amp; AI PM Consulting</p>

          <h1>
            The operational layer<br />
            behind your <strong>generative AI.</strong>
          </h1>

          <p className="hero-sub">
            If your GenAI program runs on human judgment — annotators, reviewers,
            labelers — I build and manage the systems that make that work at scale.
            Annotation pipelines, HITL workflows, and data quality programs
            that don&apos;t fall apart under pressure.
          </p>

          <div className="hero-actions">
            <a href="mailto:j@jjcx.dev" className="btn-primary">Start a conversation</a>
            <a href="#services" className="btn-ghost">See how I work →</a>
          </div>

        </div>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <p className="section-label">What I do</p>
          <div className="services-grid">

            <div className="service-card">
              <p className="service-number">01</p>
              <h3 className="service-title">Fractional AI PM &amp; Annotation Operations Lead</h3>
              <p className="service-desc">
                Embedded in your team as the operational lead for your HITL program.
                I own annotation workstreams, labeling quality, sprint delivery, and
                stakeholder reporting. You get senior PM coverage without a full-time
                headcount decision.
              </p>
              <p className="service-rate">$95 – $125 / hr &nbsp;·&nbsp; Min. 20 hrs/week</p>
            </div>

            <div className="service-card">
              <p className="service-number">02</p>
              <h3 className="service-title">HITL Workflow Audit &amp; Redesign</h3>
              <p className="service-desc">
                Most annotation quality problems are process problems. I find where
                your QA loop breaks, where annotators drift, and where labeling velocity
                is bleeding cost. Delivered as a written audit and a concrete redesign
                you can implement immediately.
              </p>
              <p className="service-rate">$7,500 – $15,000 / project &nbsp;·&nbsp; 2–4 weeks</p>
            </div>

            <div className="service-card">
              <p className="service-number">03</p>
              <h3 className="service-title">AI PM Advisory Retainer</h3>
              <p className="service-desc">
                For founders, VPs, and AI leads who need a senior thought partner
                on GenAI data strategy and HITL program decisions — without adding
                to the org chart. Async-first with one live session per week.
              </p>
              <p className="service-rate">$5,000 – $8,000 / month &nbsp;·&nbsp; 10–20 hrs/month</p>
            </div>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* WORK */}
      <section id="work">
        <div className="container">
          <p className="section-label">Case Studies</p>
          <div className="work-cards">

            <a href="/work/when-the-feedback-loop-is-missing" className="work-card">
              <div className="work-card-meta">
                <span className="work-card-num">01</span>
              </div>
              <h3 className="work-card-title">When the feedback loop is missing</h3>
              <p className="work-card-excerpt">
                Annotation quality stuck at 60%. The annotators weren&apos;t the problem —
                the system around them was. A structural fix brought quality to 90% within days.
              </p>
              <span className="work-card-link">Read case study →</span>
            </a>

            <a href="/work/the-productivity-problem-that-wasnt" className="work-card">
              <div className="work-card-meta">
                <span className="work-card-num">02</span>
              </div>
              <h3 className="work-card-title">The productivity problem that wasn&apos;t</h3>
              <p className="work-card-excerpt">
                A motivated remote annotation team that still couldn&apos;t perform.
                The issue wasn&apos;t engagement — it was that no one knew where to be or who owned what.
              </p>
              <span className="work-card-link">Read case study →</span>
            </a>

            <a href="/work/building-the-plane-while-flying-it" className="work-card">
              <div className="work-card-meta">
                <span className="work-card-num">03</span>
              </div>
              <h3 className="work-card-title">Building the plane while flying it</h3>
              <p className="work-card-excerpt">
                Mid-transition to a new annotation system, the analytics and backend access
                the team relied on disappeared. I didn&apos;t surface a problem — I arrived with a solution.
              </p>
              <span className="work-card-link">Read case study →</span>
            </a>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <p className="section-label">About</p>
          <div className="about-grid">

            <div className="about-bio">
              <p>
                I&apos;m <strong>Justin Chambers</strong>, Principal Consultant at <strong>JJCX Inc.</strong>{" "}
                I work with AI labs and product teams that need senior operational leadership
                for their annotation pipelines, HITL workflows, and GenAI annotation programs —
                without the overhead of a full-time hire.
              </p>
              <p>
                Before AI, I spent 15 years as a producer, with credits including NBA &times; Hennessy,
                Veuve Clicquot, Country Crock, and Scotch Brite. That background shaped how I work:
                I don&apos;t come to stakeholders with problems. I come with solutions I&apos;ve already
                stress-tested. Figure out as much as you can before you take it upstairs — that&apos;s
                a producing instinct, and it translates directly to operational leadership.
              </p>
              <p>
                I&apos;m also a tinkerer. When something isn&apos;t working — a broken pipeline, a missing
                analytics layer, a team operating without a source of truth — my instinct is to dig
                until I find the answer. Current clients include Meta, where I manage GenAI
                video and image annotation programs at scale.
              </p>
              <p>
                I&apos;m not an ML engineer. I&apos;m the person who makes the human infrastructure
                behind AI actually work.
              </p>
            </div>

            <div className="about-facts">
              <div className="about-fact">
                <span className="fact-label">Clients include</span>
                <span className="fact-value">Meta · Open to new engagements</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">Certifications</span>
                <span className="fact-value">PSM I · PMP Candidate (2026) · CS50x, Harvard</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">Specialization</span>
                <span className="fact-value">HITL Workflows · Annotation QA · GenAI Annotation Ops · Agile PM</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">Technical literacy</span>
                <span className="fact-value">TypeScript · React · Next.js · Python · SQL</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">Tools</span>
                <span className="fact-value">Jira · Monday.com · GitHub · Slack · Google Workspace</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">Location</span>
                <span className="fact-value">Ontario, Canada · Available remotely</span>
              </div>
              <div className="about-fact">
                <span className="fact-label">LinkedIn</span>
                <span className="fact-value">
                  <a href="https://linkedin.com/in/justinjchambers" style={{ color: "var(--accent-light)", textDecoration: "none" }}>
                    linkedin.com/in/justinjchambers
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Work with JJCX.</h2>
          <p>Currently accepting new engagements. Start with a 30-minute call — no pitch, just a straight conversation about what you need.</p>
          <div className="contact-links">
            <a href="mailto:j@jjcx.dev" className="contact-link contact-link-primary">
              j@jjcx.dev
            </a>
            <a href="https://linkedin.com/in/justinjchambers" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <span className="footer-left">© 2026 JJCX Inc.</span>
          <div className="footer-right">
            <a href="https://linkedin.com/in/justinjchambers" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:j@jjcx.dev">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
