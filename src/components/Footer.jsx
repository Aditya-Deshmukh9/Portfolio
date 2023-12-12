import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        id="Footer"
        className="bg-gray-50 dark:bg-gray-900 dark:text-white "
      >
        <div className="mx-auto max-w-screen-xl py-6 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <Link
                to="Home"
                className="mt-2 text-3xl font-bold text-indigo-500 cursor-pointer"
              >
                AD
              </Link>
            </div>

            <p className="mt-2 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; {year}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
