"use client";

import { useState } from "react";

function calcBinary(decisions: number, accuracy: number): number {
  return Math.pow(accuracy / 100, decisions) * 100;
}

function calcPerDecision(accuracy: number): number {
  return accuracy;
}

function getVerdict(decisions: number, accuracy: number): { headline: string; detail: string; severity: "red" | "yellow" | "green" } {
  const binary = calcBinary(decisions, accuracy);
  const gap = accuracy - binary;

  if (binary < 70) {
    return {
      severity: "red",
      headline: "Your scoring system is the problem, not your annotators.",
      detail: `At ${accuracy}% per-step accuracy, binary scoring predicts a ${binary.toFixed(1)}% pass rate — well below any reasonable threshold. Annotators doing excellent work are being flagged as failing. This gap is structural.`,
    };
  } else if (binary < 88) {
    return {
      severity: "yellow",
      headline: "Your scores are being suppressed by task complexity.",
      detail: `Binary scoring is costing you ${gap.toFixed(1)} percentage points of measured quality. Annotators at ${accuracy}% per-step accuracy should be passing — the math says otherwise. Per-decision scoring would surface actual performance.`,
    };
  } else {
    return {
      severity: "green",
      headline: "Binary scoring is working reasonably well for this task type.",
      detail: `With only ${decisions} decisions per job, the binary pass rate closely tracks actual accuracy. If you're still seeing quality issues, the cause is likely elsewhere — instructions, feedback loops, or task design.`,
    };
  }
}

export default function ScoringCalculator() {
  const [decisions, setDecisions] = useState(8);
  const [accuracy, setAccuracy] = useState(95);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const binary = calcBinary(decisions, accuracy);
  const perDecision = calcPerDecision(accuracy);
  const gap = perDecision - binary;
  const verdict = getVerdict(decisions, accuracy);

  const toReach90 = Math.pow(0.90, 1 / decisions) * 100;

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

      <main className="calc-page">
        <div className="container">

          <div className="calc-hero">
            <p className="section-label">JJCX Inc. &nbsp;·&nbsp; Tools</p>
            <h1 className="calc-heading">
              Annotation Scoring <span className="calc-heading-accent">Calculator</span>
            </h1>
            <p className="calc-subhead">
              Enter your task complexity and annotator accuracy to see how binary pass/fail scoring
              compares to per-decision scoring — and what it means for your program.
            </p>
          </div>

          <div className="calc-card">

            <div className="calc-inputs">
              <div className="calc-field">
                <label className="calc-label">
                  Decisions per job
                  <span className="calc-label-hint">How many independent choices does each annotation job require?</span>
                </label>
                <div className="calc-slider-row">
                  <input
                    type="range" min={1} max={30} value={decisions}
                    onChange={e => setDecisions(Number(e.target.value))}
                    className="calc-slider"
                  />
                  <span className="calc-slider-val">{decisions}</span>
                </div>
              </div>

              <div className="calc-field">
                <label className="calc-label">
                  Per-step accuracy
                  <span className="calc-label-hint">What percentage of individual decisions does your annotator get right?</span>
                </label>
                <div className="calc-slider-row">
                  <input
                    type="range" min={70} max={100} step={0.5} value={accuracy}
                    onChange={e => setAccuracy(Number(e.target.value))}
                    className="calc-slider"
                  />
                  <span className="calc-slider-val">{accuracy.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="calc-results">
              <div className="calc-result-col">
                <span className="calc-result-label">Binary pass rate</span>
                <span className={`calc-result-val ${binary < 90 ? "calc-val-warn" : "calc-val-ok"}`}>
                  {binary.toFixed(1)}%
                </span>
              </div>
              <div className="calc-result-divider" />
              <div className="calc-result-col">
                <span className="calc-result-label">Per-decision score</span>
                <span className="calc-result-val calc-val-ok">{perDecision.toFixed(1)}%</span>
              </div>
              <div className="calc-result-divider" />
              <div className="calc-result-col">
                <span className="calc-result-label">Gap</span>
                <span className={`calc-result-val ${gap > 5 ? "calc-val-warn" : "calc-val-ok"}`}>
                  {gap > 0 ? `−${gap.toFixed(1)}pp` : "0pp"}
                </span>
              </div>
            </div>

            <div className={`calc-verdict calc-verdict-${verdict.severity}`}>
              <p className="calc-verdict-headline">{verdict.headline}</p>
              <p className="calc-verdict-detail">{verdict.detail}</p>
              {binary < 90 && (
                <p className="calc-verdict-math">
                  To reach 90% under binary scoring with {decisions} decisions per job,
                  annotators would need {toReach90.toFixed(1)}% per-step accuracy.
                </p>
              )}
            </div>

          </div>

          <div className="calc-gate">
            {!submitted ? (
              <>
                <p className="calc-gate-label">Want the full breakdown? Get the binary scoring explainer — including the math, the operational fallout, and how to fix it.</p>
                <form
                  className="calc-gate-form"
                  onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="calc-gate-input"
                    required
                  />
                  <button type="submit" className="calc-gate-btn">Send it</button>
                </form>
                <p className="calc-gate-fine">No spam. Unsubscribe anytime.</p>
              </>
            ) : (
              <div className="calc-gate-thanks">
                <p>Done — check your inbox. In the meantime, read the full article:</p>
                <a href="/articles/binary-passfail-scoring" className="calc-gate-link">
                  Binary Pass/Fail Scoring Artificially Inflates Annotation Failure Rates →
                </a>
              </div>
            )}
          </div>

          <div className="calc-cta">
            <p className="calc-cta-text">
              If your annotation program is showing scores like this, the fix usually starts with a diagnostic.
            </p>
            <a href="/#contact" className="calc-cta-btn">Talk to Justin →</a>
          </div>

        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-left">© 2026 JJCX Inc.</span>
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
