import React, { useState } from "react";
import { navItems } from "../constants";
import { Close, Logo, Menu } from "../assets";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const renderNavItems = () => {
    return (
      <ul className="hidden sm:flex flex-1 justify-center items-center gap-[30px]">
        {navItems.map((nav, index) => (
          <li key={index} className="font-satoshi text-base text-primary">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  const renderResponsiveNav = () => {
    return (
      <div className="flex sm:hidden flex-1 justify-end items-center">
        <img
          src={toggle ? Close : Menu}
          alt="Icon"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={handleToggle}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#025595] absolute top-20 right-0 mx-4 my-2 min-w-[175px] rounded-xl shadow-2xl sidebar`}
          onClick={handleToggle}
        >
          <ul className="sm:hidden flex flex-col">
            {navItems.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-satoshi font-normal cursor-pointer text-[16px] ${
                  index === navItems.length - 1 ? "mb-0" : "mb-5"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`flex justify-between items-center py-3 ${styles.paddingX}`}
    >
      <a href="/" className="flex justify-start items-center">
        <img src={Logo} alt="logo" className="w-[70%] sm:w-[100%] h-[100%]" />
      </a>
      {renderNavItems()}
      <div className="hidden sm:flex justify-end items-center">
        <button
          type="button"
          className="font-satoshi text-base text-white px-5 py-3 rounded-2xl bg-[#025595] min-w-24 border border-solid border-transparent hover:bg-white hover:text-[#025595] hover:border-[#025595] transition-all duration-300 ease-linear"
        >
          Login
        </button>
      </div>
      {renderResponsiveNav()}
    </nav>
  );
};

export default Navbar;
