import Header from "../components/sections/Header";
import BackButton from "../components/buttons/BackButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex justify-center">
      <Header />
      <div className="pt-40 px-4 flex flex-col max-w-5xl w-full">
        <div className="pb-12">
          <BackButton text="back to blog entries" href="../blog" />
        </div>
        {children}
      </div>
    </section>
  );
}
