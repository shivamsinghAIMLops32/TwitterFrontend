import React from "react";
import { BiHeart, BiMessageRounded, BiUpload } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import Image from "next/image";
import { FaPoll } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/44976328?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Shivam singh</h5>
          <p>
            Lorem ipsum dolor, sit amet consectemaiores officiis earum
            cupiditate voluptatibus delectus, modi repellendus dolorum impedit.
          </p>

          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
            <AiOutlineRetweet />
            </div>
            <div>
            <BiHeart />
            </div>
            <div>
            <FaPoll />
            </div>
            <div>
            <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
