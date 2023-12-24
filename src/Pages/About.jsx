import React from "react";
import about from "../assets/about.jpg";

function About() {
  const progressValue = {
    HTML: "80",
    CSS: "70",
    JAVASCRIPT: "50",
    REACT_JS: "70",
    GITHUB: "90",
  };

  return (
    <section id="about" className="dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-1">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-20">
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl ">Skills</h2>
            {/* First Progess */}
            <div className="mt-2">
              <p className="font-bold text-indigo-900 dark:text-white p-1">
                HTML
              </p>
              <div
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={progressValue.HTML}
                className="block rounded-full bg-gray-200"
              >
                <div
                  className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                  style={{ width: `${progressValue.HTML}%` }}
                >
                  <span className="font-bold text-white">
                    {`${progressValue.HTML}%`}{" "}
                  </span>
                </div>
              </div>
            </div>
            {/* secind Progess */}
            <div className="mt-2">
              <p className="font-bold text-indigo-900 dark:text-white p-1">
                CSS
              </p>
              <div
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={progressValue.CSS}
                className="block rounded-full bg-gray-200"
              >
                <div
                  className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                  style={{ width: `${progressValue.CSS}%` }}
                >
                  <span className="font-bold text-white">
                    {`${progressValue.CSS}%`}{" "}
                  </span>
                </div>
              </div>
            </div>

            {/* Third Progess */}
            <div className="mt-2">
              <p className="font-bold text-indigo-900 dark:text-white p-1">
                JAVASCRIPT
              </p>
              <div
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={progressValue.JAVASCRIPT}
                className="block rounded-full bg-gray-200"
              >
                <div
                  className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                  style={{ width: `${progressValue.JAVASCRIPT}%` }}
                >
                  <span className="font-bold text-white">
                    {`${progressValue.JAVASCRIPT}%`}{" "}
                  </span>
                </div>
              </div>
            </div>
            {/* Fourth ProgessBar */}
            <div className="mt-2">
              <p className="font-bold text-indigo-900 dark:text-white p-1">
                REACT JS
              </p>
              <div
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={progressValue.REACT_JS}
                className="block rounded-full bg-gray-200"
              >
                <div
                  className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                  style={{ width: `${progressValue.REACT_JS}%` }}
                >
                  <span className="font-bold text-white">
                    {`${progressValue.REACT_JS}%`}{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <p className="font-bold text-indigo-900 dark:text-white 0 p-1">
                GITHUB
              </p>
              <div
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow={progressValue.GITHUB}
                className="block rounded-full bg-gray-200"
              >
                <div
                  className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                  style={{ width: `${progressValue.GITHUB}%` }}
                >
                  <span className="font-bold text-white">
                    {`${progressValue.GITHUB}%`}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
            <img
              alt="Party"
              src={about}
              className="absolute inset-0 h-100px w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
