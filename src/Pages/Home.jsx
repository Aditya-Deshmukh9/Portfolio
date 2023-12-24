import React from "react";
import logo from "../assets/mf-avatar.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <section
        id="Home"
        className="dark:bg-gray-900 dark:text-white w-full h-full "
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 sm:mx-14 lg:px-8 lg:py-16 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  mt-20">
            <div className="h-auto flex justify-center  overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img alt="Party" src={logo} />
            </div>

            <div className="lg:py-24">
              <span className="font-bold">Hi' I am</span>
              <h1 className="text-3xl font-bold lg:pb-2 uppercase font-secondary sm:text-5xl">
                Aditya Deshmukh
              </h1>
              <span className="text-3xl font-bold uppercase font-tertiary">
                I am a{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Blogger",
                  2000,
                ]}
                speed={60}
                className="text-indigo-600 text-3xl font-bold uppercase"
                wrapper="span"
                repeat={Infinity}
              />

              <p className="mt-4 text-gray-600 dark:text-white">
                My future goal is create Exitsing Project that use for Industry
                Development
              </p>

              <a
                href="https://github.com/Aditya-Deshmukh9"
                className="mt-8 inline-block rounded bg-indigo-600 text-white px-8 py-2 text-bg font-medium  transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-900 cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
