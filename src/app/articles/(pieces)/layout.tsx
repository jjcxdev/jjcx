export default function ArticlePieceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="article-page">
      <div className="container">
        <div className="article-content">
          {children}
        </div>
      </div>
    </div>
  );
}
