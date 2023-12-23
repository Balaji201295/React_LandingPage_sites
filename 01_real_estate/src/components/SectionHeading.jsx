import React from "react";
import styles from "../styles";
const SectionHeading = ({ title, content }) => (
  <div className="flex flex-col items-center justify-center pb-12">
    <h3 className={`${styles.heading} pb-[10px] max-w-lg text-center`}>
      {title}
    </h3>
    <p className={`${styles.paragraph} text-primary/50 max-w-xl text-center`}>
      {content}
    </p>
  </div>
);
export default SectionHeading;
