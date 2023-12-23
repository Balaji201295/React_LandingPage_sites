import React from "react";
import { PropertyDetails } from "../components";
import styles from "../styles";

const Header = () => (
  <header id="about" className={`${styles.padding} bg-header`}>
    <div className="flex flex-col items-start justify-start gap-5 max-w-[599px]">
      <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl text-white sm:text-primary">
        Discover a place you will love to live
      </h1>
      <p className={`${styles.paragraph} text-white sm:text-[#16100D]/[.5]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        voluptatum voluptate quia minima fugiat voluptas harum perspiciatis
        excepturi at aspernatur.
      </p>
    </div>
    <PropertyDetails />
    <div className="flex flex-col xs:flex-row justify-start items-center gap-12 text-white sm:text-primary">
      {[
        { count: "2000+", description: "Property Ready" },
        { count: "500+", description: "Happy Customer" },
      ].map(({ count, description }, index) => (
        <div key={index}>
          <h3 className="font-syne font-bold text-3xl">{count}</h3>
          <p className="font-syne font-normal text-base">{description}</p>
        </div>
      ))}
    </div>
  </header>
);

export default Header;
