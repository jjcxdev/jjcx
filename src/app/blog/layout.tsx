import BackButton from "../components/buttons/BackButton";
import Header from "../components/sections/Header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="pt-40 flex flex-col items-center">
        <div className="w-full max-w-5xl pb-12 px-4 flex">
          <BackButton text="back" href="/" />
        </div>
        {children}
      </div>
    </section>
  );
}
