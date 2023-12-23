import React from "react";
import { Logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const renderFooterLinks = () => {
    return footerLinks.map((footerLink, index) => (
      <div key={index} className="min-w-36">
        <h3 className="font-syne font-bold text-xl tracking-[.4px] text-primary pb-5">
          {footerLink.title}
        </h3>
        <ul>
          {footerLink.links.map((item, idx) => (
            <li
              key={idx}
              className={`font-syne font-normal text-base tracking-[.32px] text-primary ${
                idx !== footerLink.links.length - 1 ? "pb-4" : ""
              }`}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const renderSocialMediaIcons = () => {
    return socialMedia.map((media, index) => {
      const IconImg = media.icon;
      return (
        <a
          key={index}
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex justify-center items-center text-white hover:text-[#025595] bg-[#025595] rounded-full border border-solid border-[#025595] hover:bg-[#025595]/10 transition-all duration-300 ease-in-out"
        >
          <IconImg className="w-4 h-4" />
        </a>
      );
    });
  };

  return (
    <footer className="flex flex-col py-[30px]">
      <div className="flex flex-wrap gap-12">
        <div className="sm:flex-[.75] flex flex-col sm:min-w-80">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[60px] h-[50px]" />
          </a>
          <p
            className={`font-syne font-normal text-sm sm:text-base text-[#12181D]/50 w-full sm:max-w-72 pt-6`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>
        <div className="flex-1 flex sm:justify-between md:justify-around">
          {renderFooterLinks()}
        </div>
        <div className="sm:flex-[.75] flex flex-col sm:min-w-80">
          <h3 className="font-syne font-bold text-xl tracking-[.4px] text-primary pb-5">
            Our Location
          </h3>
          <p className="font-syne font-normal text-base tracking-[.32px] text-primary pb-4">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <div className="flex gap-2 sm:gap-4">{renderSocialMediaIcons()}</div>
        </div>
      </div>
      <hr className="my-8" />
      <div></div>
    </footer>
  );
};

export default Footer;
