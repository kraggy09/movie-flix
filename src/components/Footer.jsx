import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "./ContentWrapper";

const icons = "mx-3 hover:text-red-500 hover:cursor-pointer text-lg";
const Footer = () => {
  return (
    <footer className="flex  bg-slate-200 bottom-0 w-[100%]">
      <div className="mx-3 md:mx-6 lg:mx-16">
        <ul className="flex w-[100%] my-6 px-8 md:px-16 lg:px-36 pt-10 items-center  justify-around mt-3">
          <li className="hover:text-red-400 hover:cursor-pointer">
            Terms Of Use
          </li>
          <li className="hover:text-red-400 hover:cursor-pointer">
            Privacy-Policy
          </li>
          <li className="hover:text-red-400 hover:cursor-pointer">About</li>
          <li className="hover:text-red-400 hover:cursor-pointer">Blog</li>
          <li className="hover:text-red-400 hover:cursor-pointer">FAQ</li>
        </ul>
        <div className="mx-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="flex w-[100%] items-center justify-center mt-6 pb-6">
          <span className={icons}>
            <FaFacebookF />
          </span>
          <span className={icons}>
            <FaInstagram />
          </span>
          <span className={icons}>
            <FaTwitter />
          </span>
          <span className={icons}>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
