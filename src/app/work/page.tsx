export const metadata = {
  title: "Case Studies — JJCX Inc.",
  description: "Annotation operations and HITL program leadership — real problems, real fixes.",
};

const cases = [
  {
    slug: "when-the-feedback-loop-is-missing",
    title: "When the feedback loop is missing",
    label: "Annotation Operations",
  },
  {
    slug: "the-productivity-problem-that-wasnt",
    title: "The productivity problem that wasn't",
    label: "Annotation Operations",
  },
  {
    slug: "building-the-plane-while-flying-it",
    title: "Building the plane while flying it",
    label: "Annotation Operations",
  },
];

export default function WorkPage() {
  return (
    <main className="articles-page">
      <div className="container">

        <div className="articles-hero">
          <p className="section-label">JJCX Inc. &nbsp;·&nbsp; Case Studies</p>
          <h1 className="articles-heading">
            Real annotation programs,<br />
            real problems, <span className="articles-heading-accent">real fixes.</span>
          </h1>
        </div>

        <div className="articles-list">
          {cases.map(({ slug, title, label }, i) => (
            <a key={slug} href={`/work/${slug}`} className="article-row">
              <span className="article-row-num">0{i + 1}</span>
              <span className="article-row-body">
                <span className="article-row-title">{title}</span>
                <span className="article-row-label">{label}</span>
              </span>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
