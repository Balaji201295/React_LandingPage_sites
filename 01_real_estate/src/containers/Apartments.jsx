import React from "react";
import { SectionHeading } from "../components";
import styles from "../styles";
import { dreamHouse } from "../constants";
import { RiHotelBedLine } from "react-icons/ri";
import { LuBath } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const Apartments = () => {
  const renderApartment = (item, index) => {
    const { imgUrl, price, area, bathroom, bedroom, parking, location } = item;
    const isLast = index === dreamHouse.length - 1;

    const flexDirection = isLast
      ? "flex-col-reverse sm:flex-row-reverse"
      : "flex-col-reverse sm:flex-row";

    const alignPosition = isLast ? "mr-auto" : "ml-auto";

    return (
      <div key={index} className={`w-full flex items-center ${flexDirection}`}>
        <div className="flex-col p-5 max-w-72 sm:absolute bg-white/90 rounded-2xl backdrop-blur-sm">
          <h5 className="font-syne font-normal text-sm sm:text-base text-primary mb-3">{`$${price}/month`}</h5>
          <h3 className="font-syne font-bold text-md sm:text-lg text-primary">
            {area}
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
        <div className={`sm:flex-[.9] ${alignPosition}`}>
          <img src={imgUrl} alt="Apartment" />
        </div>
      </div>
    );
  };

  return (
    <section className={`${styles.paddingY}`}>
      <SectionHeading
        title="We will help you to find Dream Home"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
      />
      <div className="py-12 flex flex-col gap-6 sm:gap-12">
        {dreamHouse.map((item, index) => renderApartment(item, index))}
      </div>
    </section>
  );
};

export default Apartments;
