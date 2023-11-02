interface SkillProps {
  title: string;
  value: number;
  icon: string;
  color?: string;
}

import React, { useState, useEffect } from "react";

const SkillController: React.FC<SkillProps> = ({
  title,
  icon,
  value,
  color,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgHeight, setSvgHeight] = useState<number>(0);

  useEffect(() => {
    // Fetch the SVG content
    fetch(icon)
      .then((response) => response.text())
      .then((content) => {
        //Extract viewbox dimensions
        const viewBoxMatch = content.match(
          /viewBox="(\d+) (\d+) (\d+) (\d+)"/i
        );
        if (viewBoxMatch) {
          setSvgWidth(Number(viewBoxMatch[3]));
          setSvgHeight(Number(viewBoxMatch[4]));
        }
        setSvgContent(content);
      });
  }, [icon]);

  // Determine the scaling factor based on SVG dimensions
  const scaleFactor = Math.min(svgWidth, svgHeight) / 175;
  const scaledRadius = 100 * scaleFactor;

  //Update the circumference based on scale radius
  const circumference = 2 * Math.PI * scaledRadius;
  const progress = ((100 - value) / 100) * circumference; // Clockwise progress

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className="relative"
        style={{
          width: `${scaledRadius * 2.25}px`,
          height: `${scaledRadius * 2.25}px`,
        }}>
        <svg className="absolute top-0 left-0 w-full h-full">
          {/* Clipping mask for the fill */}
          <defs>
            <clipPath id="circle-clip">
              <circle
                r={scaledRadius}
                cx="50%"
                cy="50%"
                className="fill-none"
                strokeWidth="8"
              />
            </clipPath>
          </defs>
          <circle
            r={scaledRadius}
            cx="50%"
            cy="50%"
            className="text-dark stroke-current fill-none w-full h-full"
            strokeWidth="8"
          />
          {/* Apply fill color and animation based on hover state */}
          <circle
            r={scaledRadius}
            cx="50%"
            cy="50%"
            className={`text-accent stroke-current fill-none w-full h-full transform -rotate-90 origin-center transition-stroke-dashoffset duration-300 ${
              isHovered ? "" : ""
            }`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={isHovered ? progress : circumference}
            clipPath="url(#circle-clip)" // Apply the clipping mask
          />
        </svg>
        <div
          className="absolute w-12 h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          dangerouslySetInnerHTML={{ __html: svgContent ? svgContent : "" }}
          style={{
            width: `${scaledRadius}px`,
            height: `${scaledRadius}px`,
            fill: color || "currentColor",
          }}
        />
      </div>
      <div className="font-poppins text-center">{title}</div>
    </div>
  );
};

export default SkillController;
