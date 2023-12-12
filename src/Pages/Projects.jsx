import React from "react";
import { Link } from "react-scroll";
import drumKit from "../assets/DrumbKitGame.png";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="dark:bg-gray-900 dark:text-white dark:border-white "
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center lg:mt-20">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart Projects
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-[400px] my-4 rounded-lg bg-gray-200">
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt="Office"
                  src={drumKit}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6 sm:my-2">
                  <Link to="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Drum Kit Game
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Using Html, Css and JavaScript, "Crafted an engaging Drum
                    Kit Game for my portfolio using HTML, CSS, and JavaScript.
                    Users can play virtual drums, enhancing interactivity and
                    showcasing frontend development skills. Check it out!"
                  </p>

                  <div className="flex flex-row justify-end gap-4">
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-black border-2 p-2 rounded-lg"
                    >
                      Github
                    </button>
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-white bg-indigo-600 p-2 rounded-lg"
                    >
                      Live here
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="h-[400px] my-4 rounded-lg bg-gray-200">
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt="Office"
                  src={drumKit}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6 sm:mb-2">
                  <Link to="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Drum Kit Game
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Using Html, Css and JavaScript, "Crafted an engaging Drum
                    Kit Game for my portfolio using HTML, CSS, and JavaScript.
                    Users can play virtual drums, enhancing interactivity and
                    showcasing frontend development skills. Check it out!"
                  </p>

                  <div className="flex flex-row justify-end gap-4">
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-black border-2 p-2 rounded-lg"
                    >
                      Github
                    </button>
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-white bg-indigo-600 p-2 rounded-lg"
                    >
                      Live here
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="h-[400px] my-4 rounded-lg bg-gray-200">
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt="Office"
                  src={drumKit}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <Link to="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Drum Kit Game
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Using Html, Css and JavaScript, "Crafted an engaging Drum
                    Kit Game for my portfolio using HTML, CSS, and JavaScript.
                    Users can play virtual drums, enhancing interactivity and
                    showcasing frontend development skills. Check it out!"
                  </p>

                  <div className="flex flex-row justify-end gap-4">
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-black border-2 p-2 rounded-lg"
                    >
                      Github
                    </button>
                    <button
                      href="#"
                      className="group mt-4 inline-flex gap-1 text-sm font-medium text-white bg-indigo-600 p-2 rounded-lg"
                    >
                      Live here
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default projects;
