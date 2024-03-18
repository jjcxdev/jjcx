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
      <div className="font-normal pt-40 flex flex-col items-center">
        <div className="w-full max-w-[800px] pb-12 flex">
          <BackButton text="back" href="/" />
        </div>
        {children}
      </div>
    </section>
  );
}
