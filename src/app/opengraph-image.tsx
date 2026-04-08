import { ImageResponse } from "next/og";

export const alt = "JJCX Inc. — Annotation Operations & AI PM Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchInterFont(weight: number): Promise<ArrayBuffer> {
  // Satori requires TTF/OTF — NOT woff2. Use a legacy UA so Google Fonts
  // returns the truetype format URL instead of woff2.
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
    {
      headers: {
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)",
      },
    }
  ).then((r) => r.text());

  const match = css.match(/src: url\(([^)]+)\) format\('(truetype|opentype)'\)/);
  if (!match) throw new Error(`Inter TTF URL not found for weight ${weight}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [interLight, interSemiBold] = await Promise.all([
    fetchInterFont(300),
    fetchInterFont(600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0e0e12",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter",
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

        {/* Teal glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,135,138,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Grid texture */}
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

        {/* JJCX Logo */}
        <svg
          viewBox="0 0 1558 485"
          style={{ height: "52px", width: "166px", position: "relative" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.65839 397.369L74.8308 311.868H124.233C184.335 311.868 209.269 302.099 209.269 270.002V99.5587H312.539V262.001C312.539 352.339 249.74 397.369 124.233 397.369H7.65839Z" fill="#00878A" />
          <path d="M341.474 397.369L408.646 311.868H458.049C518.151 311.868 543.084 302.099 543.084 270.002V99.5587H646.355V262.001C646.355 352.339 583.555 397.369 458.049 397.369H341.474Z" fill="#00878A" />
          <path d="M870.759 397.369C766.186 397.369 689.152 331.964 689.152 245.533C689.152 158.265 766.186 99.5587 870.759 99.5587H1084.46L1018.59 186.362H870.759C823.125 186.362 792.422 201.527 792.422 245.533C792.422 290.005 823.125 311.868 870.759 311.868H1084.46L1018.59 397.369H870.759Z" fill="#00878A" />
          <path d="M1409.81 397.369L1319.01 305.635L1224.67 397.369H1096.47L1190.43 308.798C1237.6 264.327 1252.77 252.697 1259.84 247.859C1252.67 242.091 1237.6 230.926 1196.67 191.293L1100.93 99.5587H1243.84L1329.34 186.362L1415.67 99.5587H1548.81L1449.08 192.595C1414.84 224.6 1400.14 236.695 1390.74 243.766C1403.67 252.232 1422.37 268.234 1464.15 309.635L1554.95 397.369H1409.81Z" fill="#00878A" />
        </svg>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f0f0f2",
            }}
          >
            The operational layer
          </span>

          {/* Line 2: flex row so space is layout-controlled, not whitespace-dependent */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              lineHeight: 1.08,
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: "#f0f0f2",
                paddingRight: "18px",
              }}
            >
              behind your
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#00b4b8",
              }}
            >
              generative AI.
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interLight,    weight: 300, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}
