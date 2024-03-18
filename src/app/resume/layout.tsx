import Header from "../components/sections/Header";
import BackButton from "../components/buttons/BackButton";
import PrintButton from "../components/buttons/PrintButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="pt-40 pb-20 flex flex-col items-center px-4">
        <div className="w-full max-w-[800px] flex justify-between pb-12">
          <BackButton text="back" href="/" />
          <PrintButton text="PDF" href="/justinchambersresume.pdf" />
        </div>
        {children}
      </div>
    </section>
  );
}
