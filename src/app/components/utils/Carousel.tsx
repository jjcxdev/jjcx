import { useState, useRef, useEffect } from "react";

export const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    { title: "JJCX", project: "website", img: "/jjcx_web.jpg" },
    { title: "Seminar On The Seas", project: "website", img: "/sem.png" },
    { title: "PixlPal", project: "website", img: "/pp.jpg" },
    { title: "PixlPal", project: "macOS App", img: "pixlpal_logo_new.png" },
  ];

  const totalCards = cards.length;

  const nextSlide = () => {
    setCurrent(current === totalCards - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalCards - 1 : current - 1);
  };

  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const cardWidth = 336; // Update this according to your actual card width
      const initialOffset = (containerWidth - cardWidth) / 2;

      setInitialOffset(initialOffset);

      const scrollTo = initialOffset + current * cardWidth; // Now scrollTo is always positive

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div className="flex mx-10 flex-row items-center w-full">
      <button onClick={prevSlide}>Previous</button>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar"
        style={{
          width: "100%",
          maxHeight: "100vh",
          overflowY: "hidden",
        }}
      >
        {/* Add a spacer to center the first card */}
        <div style={{ width: `${initialOffset}px`, flexShrink: 0 }}></div>

        {cards.map((card, index) => {
          return (
            <div
              className={index === current ? "scale-100 z-10" : "scale-90 z-0"}
              key={index}
            >
              <WorkCard
                title={card.title}
                project={card.project}
                img={card.img}
              />
            </div>
          );
        })}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

interface WorkCardProps {
  title: string;
  project: string;
  img: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({ title, project, img }) => {
  return (
    <div className="relative w-[336px] h-[504px]">
      <img
        src={img}
        alt={`${title} screenshot`}
        className="absolute inset-0 object-cover min-h-full rounded-md z-0"
      />
      <div className="absolute inset-0 border border-red-600 flex flex-col items-center justify-center p-4 rounded-md z-10">
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        <div>
          <h4 className="text-xs">{project}</h4>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
