import React from "react";
import { services } from "../constants";
import styles from "../styles";
const WorkDetails = () => (
  <div className=" flex flex-wrap justify-center gap-5">
    {services.map((service, index) => {
      const { icon, title, content } = service;
      const isEven = index % 2 === 0;
      const backgroundColorClass = isEven ? "bg-white" : "bg-[#025595]";
      const headingColorClass = isEven ? "text-primary" : "text-white";
      const textColorClass = isEven ? "text-primary/50" : "text-white";
      return (
        <div
          key={index}
          className={`p-5 max-w-[320px] rounded-2xl ${backgroundColorClass}`}
        >
          <img src={icon} alt={title} className="w-10 h-10" />
          <h3
            className={`font-syne font-bold text-xl pt-5 pb-2 ${headingColorClass}`}
          >
            {title}
          </h3>
          <p className={`${styles.paragraph}  ${textColorClass}`}>{content}</p>
        </div>
      );
    })}
  </div>
);
export default WorkDetails;
