import React, { useState } from "react";
import { Search } from "../assets";
import { propertyInfo } from "../constants";
const propertyDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-wrap gap-5 justify-between items-center bg-white/80 backdrop-blur-sm px-5 py-5 my-12 rounded-2xl max-w-[940px]">
      <div className="flex flex-wrap gap-4">
        {propertyInfo.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-between items-center md:px-[20px] gap-4 ${
                index !== propertyInfo.length - 1
                  ? "sm:border-r border-solid border-[#0D1117]/[.05]"
                  : ""
              }`}
            >
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#025595]/[.05] rounded-full">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg tracking-[-0.22px] text-primary pb-2">
                  {item.title}
                </h3>
                <p className="font-syne font-bold text-md tracking-[-0.22px] text-primary opacity-50">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <form className="relative">
        <input
          type="text"
          id="search"
          className={`bg-[#025595] text-white caret-slate-200 pl-12 md:w-10 w-full md:focus:w-full transition-all duration-1000 ease-in-out py-3 rounded-xl outline-none border-none`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Search}
          alt="search"
          className="absolute w-6 h-6 left-2 top-3"
        />
      </form>
    </div>
  );
};
export default propertyDetails;
