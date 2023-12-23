import React from "react";
import styles from "../styles";

import { SectionHeading, WorkDetails } from "../components";
const Services = () => {
  return (
    <section id="service" className={`${styles.paddingY}`}>
      <SectionHeading
        title="How it Works"
        content="Using it can make you sound like you have been studying english 
for a long time. Here’s the challenge"
      />
      <WorkDetails />
    </section>
  );
};
export default Services;
