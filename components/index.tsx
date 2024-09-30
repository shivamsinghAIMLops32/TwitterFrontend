import React from "react";
import { BiHeart, BiMessageRounded, BiUpload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import Image from "next/image";
import { FaPoll } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-b border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/44976328?v=4"
            alt="user-image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5 className="font-bold text-lg">Shivam Singh</h5>
          <p className="text-gray-300">
            Lorem ipsum dolor, sit amet consectemaiores officiis earum
            cupiditate voluptatibus delectus, modi repellendus dolorum impedit.
          </p>

          <div className="flex justify-between mt-4 text-2xl items-center">
            <div className="hover:text-blue-400 transition-all">
              <BiMessageRounded />
            </div>
            <div className="hover:text-blue-400 transition-all">
              <AiOutlineRetweet />
            </div>
            <div className="hover:text-red-500 transition-all">
              <BiHeart />
            </div>
            <div className="hover:text-blue-400 transition-all">
              <FaPoll />
            </div>
            <div className="hover:text-blue-400 transition-all">
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
