import React from "react";
import { SectionHeading } from "../components";
import styles from "../styles";
import { Customer, Image_1, Image_2, Image_3 } from "../assets";
import { FaStar } from "react-icons/fa";

const Customers = () => {
  const customerContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout.`;

  const stars = Array(5)
    .fill()
    .map((_, index) => (
      <FaStar key={index} color="#FFDC08" className="w-[25px] h-[25px]" />
    ));

  const images = [Image_1, Image_2, Image_3];

  return (
    <section className={`${styles.paddingY} max-w-5xl mx-auto`}>
      <SectionHeading
        title="What our customers say’s"
        content={customerContent}
      />
      <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-0 relative">
        <div className="flex-[.75] md:flex-[.25] -mt-8">
          <img src={Customer} alt="Customer" className="md:w-[350px] h-auto" />
        </div>
        <div className="sm:absolute -z-10 bg-[#025595]/5 right-0 top-0 w-[90%] h-[100%] rounded-2xl"></div>
        <div className="flex-1 flex flex-col py-6 md:py-8 px-4 sm:px-6 sm:max-w-[60vw] ml-auto rounded-2xl">
          <div className="flex gap-[3px]">{stars}</div>
          <p className={`${styles.paragraph} py-3`}>{customerContent}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-3">
            <div className="flex flex-col">
              <h3 className="font-syne font-bold text-md md:text-xl text-primary">
                Kety Willions
              </h3>
              <p className="font-syne font-normal text-base text-[#12181D]/50">
                California, United State
              </p>
            </div>
            <div className="flex gap-[10px]">
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
