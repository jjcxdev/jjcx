"use client";

import Header from "../components/sections/Header";
import BackButton from "../components/buttons/BackButton";
import { useActiveTabDetails } from "./portfolio/ActiveTabContext";


function getTechStyle(tech: string) {
  console.log("Tech:", tech);
  switch (tech) {
    case 'Next13':
      return { color: "white", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'Next14':
      return { color: "white", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'Typescript':
      return { color: "#3178C6", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'TailwindCSS':
      return { color: "#06B6D4", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'YouTubeV3API':
      return { color: "#FF0000", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'Javascript':
      return { color: "#F7DF1E", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    case 'OpenAIAPI':
      return { color: "#74AA9C", border: "1px solid #3D3D3D", background: "#2A2828", borderRadius: "0.25rem", paddingRight: "4px", paddingLeft: "4px", margin: "4px" };
    default:
      return { color: "white" };
  }
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeDesc, activeTech } = useActiveTabDetails();

  const renderTechStyles = (techString: string) => {
    const techs = techString.split(' ');
    return techs.map((tech: string, index: number) => (
      <div key={index} style={getTechStyle(tech.trim())}>
        {tech}{index < techs.length - 1 ? '' : ''}
      </div>
    ));
  };

  return (
    <section>
      <Header />
      <div className="pt-40 pb-20 flex flex-col items-center px-4">
        <div className="w-full max-w-[800px] pb-12">
          <BackButton text="back" href="/" />
        </div>
        {children}
        <div className="w-full max-w-5xl p-4 flex flex-col items-center">
          <div>{activeDesc}</div>

          <div className="flex flex-col md:flex-row pt-2">{renderTechStyles(activeTech)}</div>

        </div>
      </div>
    </section>
  );
}
