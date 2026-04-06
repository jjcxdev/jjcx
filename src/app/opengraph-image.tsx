import { ImageResponse } from "next/og";

export const alt = "JJCX Inc. — AI Data Operations & PM Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0e0e12",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "4px",
            height: "100%",
            background: "linear-gradient(180deg, #00878A 0%, rgba(0,135,138,0.1) 100%)",
          }}
        />

        {/* Top-right corner glow */}
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-140px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,135,138,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Grid texture overlay */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,135,138,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          {/* JJCX Logo */}
          <svg
            viewBox="0 0 1558 485"
            style={{ height: "46px", width: "148px", marginBottom: "28px" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.65839 397.369L74.8308 311.868H124.233C184.335 311.868 209.269 302.099 209.269 270.002V99.5587H312.539V262.001C312.539 352.339 249.74 397.369 124.233 397.369H7.65839Z" fill="#00878A" />
            <path d="M341.474 397.369L408.646 311.868H458.049C518.151 311.868 543.084 302.099 543.084 270.002V99.5587H646.355V262.001C646.355 352.339 583.555 397.369 458.049 397.369H341.474Z" fill="#00878A" />
            <path d="M870.759 397.369C766.186 397.369 689.152 331.964 689.152 245.533C689.152 158.265 766.186 99.5587 870.759 99.5587H1084.46L1018.59 186.362H870.759C823.125 186.362 792.422 201.527 792.422 245.533C792.422 290.005 823.125 311.868 870.759 311.868H1084.46L1018.59 397.369H870.759Z" fill="#00878A" />
            <path d="M1409.81 397.369L1319.01 305.635L1224.67 397.369H1096.47L1190.43 308.798C1237.6 264.327 1252.77 252.697 1259.84 247.859C1252.67 242.091 1237.6 230.926 1196.67 191.293L1100.93 99.5587H1243.84L1329.34 186.362L1415.67 99.5587H1548.81L1449.08 192.595C1414.84 224.6 1400.14 236.695 1390.74 243.766C1403.67 252.232 1422.37 268.234 1464.15 309.635L1554.95 397.369H1409.81Z" fill="#00878A" />
          </svg>

          {/* Label */}
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.14em",
              color: "#00878A",
              textTransform: "uppercase",
              marginBottom: "28px",
              display: "flex",
            }}
          >
            AI DATA OPERATIONS · PM CONSULTING
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "54px",
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#f0f0f2",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The operational layer</span>
            <span>
              behind your{" "}
              <span style={{ fontWeight: 600 }}>generative AI.</span>
            </span>
          </div>

          {/* Sub */}
          <div
            style={{
              fontSize: "18px",
              color: "#7a7f99",
              fontWeight: 300,
              lineHeight: 1.5,
              marginBottom: "36px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Annotation pipelines, HITL workflows, and data quality programs</span>
            <span>that don&apos;t fall apart under pressure.</span>
          </div>

          {/* Pills row */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { text: "CLIENTS INCLUDE META", accent: true },
              { text: "HITL WORKFLOWS", accent: false },
              { text: "ANNOTATION QA", accent: false },
              { text: "FRACTIONAL AI PM", accent: false },
              { text: "PSM I · PMP CANDIDATE", accent: false },
            ].map(({ text, accent }) => (
              <div
                key={text}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.09em",
                  color: accent ? "#00b4b8" : "#7a7f99",
                  border: `1px solid ${accent ? "rgba(0,135,138,0.4)" : "rgba(255,255,255,0.1)"}`,
                  padding: "6px 12px",
                  borderRadius: "3px",
                  background: accent ? "rgba(0,135,138,0.08)" : "rgba(255,255,255,0.03)",
                  display: "flex",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "12px",
            letterSpacing: "0.06em",
            color: "#4a4f66",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          jjcx.dev
        </div>
      </div>
    ),
    size
  );
}
