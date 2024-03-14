"use client";

import { useEffect, useState, useMemo } from "react";
import BrowserTab from "./BrowserTab";
import BrowserNavBar from "./BrowserNavBar";
import BrowserPane from "./BrowserPane";
import { useActiveTabDetails } from "../portfolio/ActiveTabContext";

export default function BrowserWindow() {
  const [activeTab, setActiveTab] = useState("VimKeyboard");
  const [activeUrl, setActiveUrl] = useState("vim-keyboard.vercel.app");
  const [activeGithubUrl, setActiveGithubUrl] = useState(
    "https://www.github.com/jjcxdev/vim",
  );
  const [activeImage, setActiveImage] = useState(
    "/images/projects/full/vimkeyboard.webp",
  );

  const { setActiveDesc, setActiveTech } = useActiveTabDetails();

  const tabs = useMemo(() => [
    {
      name: "VimKeyboard",
      href: "",
      url: "vim-keyboard.vercel.app",
      image: "/images/projects/full/vimkeyboard.webp",
      github: "https://www.github.com/jjcxdev/vim",
      desc: "An interactive site I created to aid in learning Vim Motions",
      tech: "Next14 Typescript TailwindCSS",
    },
    {
      name: "PixlPal",
      href: "",
      url: "pixlpal.vercel.app",
      image: "/images/projects/full/pixlpal_web.webp",
      github: "https://www.github.com/jjcxdev/pixlpal_web",
      desc: "Website for PixlPal, a macOS app I created for capturing screen color data.",
      tech: "Next13 Typescript TailwindCSS",
    },
    {
      name: "Sharaoke",
      href: "",
      url: "sharaoke.vercel.app",
      image: "/images/projects/full/sharaoke.webp",
      github: "https://www.github.com/jjcxdev/karaoke",
      desc: "A fun little app to make a playlist of YouTube karaoke songs and sing along, using any connected audio input device",
      tech: "Next14 Typescript TailwindCSS YouTubeV3API OpenAIAPI",
    },
    {
      name: "Seminar on the Seas",
      href: "",
      url: "sots.vercel.app",
      image: "/images/projects/full/sots.webp",
      github: "https://www.github.com/jjcxdev/sots",
      desc: "Commissioned site for Seminar on the Seas, a training experience for the lighting industry.",
      tech: "Next13 Typescript TailwindCSS",
    },
    /*
    {
      name: "Handmade Code",
      href: "",
      url: "https://www.backintime.ca",
      image: "/images/projects/full/handmade.webp",
      github: "https://www.github.com/jjcxdev/handmadecode",
      desc: "",
      tech: "",
    },
    */
    {
      name: "Hue-Rotate",
      href: "",
      url: "hue-rotate.vercel.app",
      image: "/images/projects/full/huerotate.webp",
      github: "https://www.github.com/jjcxdev/hue-rotate",
      desc: "Hue Rotate is a React application that allows users to select an initial color and a desired color, then calculates the CSS hue-rotate filter value required to transition between these colors.",
      tech: "Next14 Typescript TailwindCSS",
    },
    {
      name: "Rest is BINGO",
      href: "",
      url: "therestisbingo.vercel.app",
      image: "/images/projects/full/therestisbingo.webp",
      github: "https://www.github.com/jjcxdev/therestisbingo",
      desc: "I decided to make a bingo game to play along with a podcast that I like to listen to called 'The Rest is Football'",
      tech: "Next14 Typescript TailwindCSS",
    },
  ], []);

  useEffect(() => {
    const initialTab = tabs.find(tab => tab.name === activeTab);
    if (initialTab) {
      setActiveDesc(initialTab.desc);
      setActiveTech(initialTab.tech);
    }
  }, [activeTab, setActiveDesc, setActiveTech, tabs]);

  const handleTabClick = (
    tabName: string,
    url: string,
    image: string,
    github: string,
    desc: string,
    tech: string,
  ) => {
    setActiveTab(tabName);
    setActiveUrl(url);
    setActiveImage(image);
    setActiveGithubUrl(github);
    setActiveDesc(desc);
    setActiveTech(tech);
  };

  return (
    <div>
      <div className="flex w-full px-1.5">
        <div className="flex items-center space-x-1 px-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>
        </div>
        <div className="flex w-full">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tab rounded-t-md relative mt-1.5 ${activeTab === tab.name ? "bg-smoke" : "bg-coal"}`}
              onClick={() =>
                handleTabClick(
                  tab.name,
                  tab.url,
                  tab.image,
                  tab.github,
                  tab.desc,
                  tab.tech,
                )
              }
            >
              <BrowserTab href={tab.href} tabName={tab.name} />
            </div>
          ))}
        </div>
      </div>
      <BrowserNavBar activeUrl={activeUrl} activeGithubUrl={activeGithubUrl} />
      <BrowserPane activeImage={activeImage} />
    </div>
  );
}
