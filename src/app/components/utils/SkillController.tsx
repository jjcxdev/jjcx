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

  useEffect(() => {
    // Fetch the SVG content
    fetch(icon)
      .then((response) => response.text())
      .then((content) => {
        setSvgContent(content);
      });
  }, [icon]);

  const radius = 46; // SVG circle radius
  const circumference = 2 * Math.PI * radius;
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
      <div className="relative md:w-28 md:h-28 w-14 h-14">
        <svg className="absolute top-0 left-0 w-full h-full">
          {/* Clipping mask for the fill */}
          <defs>
            <clipPath id="circle-clip">
              <circle
                r={radius}
                cx="50%"
                cy="50%"
                className="fill-none"
                strokeWidth="8"
              />
            </clipPath>
          </defs>
          <circle
            r={radius}
            cx="50%"
            cy="50%"
            className="text-dark stroke-current fill-none w-full h-full"
            strokeWidth="8"
          />
          {/* Apply fill color and animation based on hover state */}
          <circle
            r={radius}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:w-12 md:h-12 w-6 h-6 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: svgContent ? svgContent : "" }}
          style={{ fill: color || "currentColor" }}
        />
      </div>
      <div className="font-poppins text-clamp-xs text-center">{title}</div>
    </div>
  );
};

export default SkillController;
