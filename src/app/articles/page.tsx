export const metadata = {
  title: "Articles — JJCX Inc.",
  description: "Annotation operations, HITL programs, and AI PM — practitioner takes from Justin Chambers.",
};

const articles = [
  {
    slug: "binary-passfail-scoring",
    title: "Binary Pass/Fail Scoring Artificially Inflates Annotation Failure Rates",
    date: "Apr 11, 2026",
    label: "Annotation Operations",
  },
  {
    slug: "instruction-debt",
    title: "Instruction Debt",
    date: "Apr 8, 2026",
    label: "Annotation Operations",
  },
];

export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <div className="container">

        <div className="articles-hero">
          <p className="section-label">JJCX Inc. &nbsp;·&nbsp; Articles</p>
          <h1 className="articles-heading">
            Practitioner takes on annotation<br />
            operations, HITL, and <span className="articles-heading-accent">AI PM.</span>
          </h1>
        </div>

        <div className="articles-list">
          {articles.map(({ slug, title, date, label }, i) => (
            <a key={slug} href={`/articles/${slug}`} className="article-row">
              <span className="article-row-num">0{i + 1}</span>
              <span className="article-row-body">
                <span className="article-row-title">{title}</span>
                <span className="article-row-label">{label}</span>
              </span>
              <span className="article-row-date">{date}</span>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
