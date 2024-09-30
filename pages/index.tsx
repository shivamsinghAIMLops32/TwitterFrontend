import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiMoney } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import React, { useLayoutEffect } from "react";
import { title } from "process";
import FeedCard from "@/components";
import { MdMoreHoriz } from "react-icons/md";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenu: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    title:"TwitterBlue",
    icon: <BiMoney/>
  },
  {
    title:"User",
    icon:<BiUser />
  },
  {
    title:"More Options",
    icon:<MdMoreHoriz />
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3  pt-1  ">
          <div className="text-2xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl  pr-4">
            <ul>
              {sideBarMenu.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2"
                key= {item.title}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] px-4 py-2 font-semibold rounded-full w-full  text-lg">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px]  border-gray-600  h-screen overflow-scroll">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
