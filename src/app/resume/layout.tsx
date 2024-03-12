import Header from "../components/sections/Header";
import BackButton from "../components/buttons/BackButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="pt-40 pb-20 flex flex-col items-center px-4">
        <div className="w-full max-w-5xl pb-12">
          <BackButton text="back" href="/" />
        </div>
        {children}
      </div>
    </section>
  );
}
