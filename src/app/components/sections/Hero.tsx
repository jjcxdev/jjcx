export default function Hero() {
  return (
    <div className="flex flex-col justify-center text-center" id="home">
      <div className="flex justify-between">
        <div></div>
        <div className="flex flex-col w-full items-center text-center">
          <h1 className="font-poppins text-3xl sm:text-6xl md:text-8xl text-center font-extrabold uppercase text-white">
            Justin<span className="font-thin">Chambers</span>
          </h1>
          <h2 className="font-poppins text-xl sm:text-3xl md:text-4xl text-center font-light uppercase text-white">
            Frontend Developer
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
