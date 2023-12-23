import React from "react";
import { properties } from "../constants";
import { GoShareAndroid } from "react-icons/go";
import { RiHotelBedLine } from "react-icons/ri";
import { LuBath } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
const Property = () => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
      {properties.map((property, index) => {
        const { imgUrl, price, title, bedroom, bathroom, parking, location } =
          property;
        return (
          <div key={index} className="bg-white rounded-2xl shadow p-5">
            <div>
              <img src={imgUrl} alt={title} />
            </div>
            <div className="flex justify-between items-center py-3">
              <p className="font-syne font-bold text-lg sm:text-xl text-[#025595]">{`$${price}`}</p>
              <div className="w-9 h-9 flex justify-center items-center bg-[#025595]/5 rounded-md">
                <GoShareAndroid className="w-5 h-5 text-[#025595]" />
              </div>
            </div>
            <h3 className="font-syne font-bold text-lg sm:text-xl text-primary">
              {title}
            </h3>
            <div className="flex justify-start gap-5 py-3">
              <div className="flex items-center gap-3">
                <RiHotelBedLine className="w-5 h-5" />
                <p className="font-syne font-normal text-sm sm:text-base text-primary">
                  {bedroom}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <LuBath className="w-5 h-5" />
                <p className="font-syne font-normal text-sm sm:text-base text-primary">
                  {bathroom}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoCarSportOutline className="w-5 h-5" />
                <p className="font-syne font-normal text-sm sm:text-base text-primary">
                  {parking}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GrLocation className="w-5 h-5" />
              <p className="font-syne font-normal text-sm sm:text-base text-primary">
                {location}
              </p>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default Property;
