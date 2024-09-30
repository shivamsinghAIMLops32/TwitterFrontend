import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiMoney } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import FeedCard from "@/components/FeedCard";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenu: TwitterSideBarButton[] = [
  { title: "Home", icon: <BiHomeCircle /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notifications", icon: <BsBell /> },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "Bookmarks", icon: <BiBookmark /> },
  { title: "Twitter Blue", icon: <BiMoney /> },
  { title: "User", icon: <BiUser /> },
  { title: "More Options", icon: <MdMoreHoriz /> },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-12 h-screen w-screen px-16">
        {/* Sidebar */}
        <div className="col-span-3 pt-4">
          <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-6 text-xl pr-4">
            <ul>
              {sideBarMenu.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-700 rounded-full px-4 py-3 transition-all cursor-pointer mt-2 ml-2"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] transition-all px-4 py-2 font-bold rounded-full w-full text-lg text-white shadow-md">
                Tweet
              </button>
            </div>
          </div>
        </div>

        {/* Feed Section */}
        <div className="col-span-5 border-x border-gray-600 h-screen overflow-y-auto">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Right Sidebar (can add more content here later) */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
