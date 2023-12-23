import React from "react";
import { Property, PropertyDetails, SectionHeading } from "../components";
const Properties = () => {
  return (
    <section>
      <SectionHeading
        title="Our most trending properties"
        content="It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout. The point of using."
      />
      <Property />
    </section>
  );
};
export default Properties;
