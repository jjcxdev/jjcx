export const metadata = {
  title: "Articles — JJCX Inc.",
  description: "Annotation operations, HITL programs, and AI PM — practitioner takes from Justin Chambers.",
};

const articles = [
  {
    slug: "instruction-debt",
    title: "Instruction Debt",
    date: "Apr 8, 2026",
  },
];

export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <div className="container">
        <p className="section-label">Articles</p>
        <p className="articles-desc">
          Practitioner takes on annotation operations, HITL programs, and AI PM.
        </p>
        <div className="articles-list">
          {articles.map(({ slug, title, date }) => (
            <a key={slug} href={`/articles/${slug}`} className="article-row">
              <span className="article-row-title">{title}</span>
              <span className="article-row-date">{date}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
