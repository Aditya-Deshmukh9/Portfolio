import React from "react";
import { Link } from "react-scroll";
import drumKit from "../assets/DrumbKitGame.png";

// Project component
const Project = ({ title, image, description, githubLink, liveLink }) => (
  <div className="h-[400px] my-4 rounded-lg bg-gray-200">
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="border-4 border-white-600">
        <img alt={title} src={image} className="h-56 p-1 w-full object-cover" />
      </div>

      <div className="p-4 sm:p-6 sm:my-2">
        <Link to="home">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>

        <div className="flex flex-row justify-end gap-4">
          <a
            href={githubLink}
            className="group mt-4 inline-flex gap-1 text-sm font-medium text-black border-2 p-2 rounded-lg"
          >
            Github
          </a>
          <a
            href={liveLink}
            className="group mt-4 inline-flex gap-1 text-sm font-medium text-white bg-indigo-600 p-2 rounded-lg"
          >
            Live here
          </a>
        </div>
      </div>
    </article>
  </div>
);

// Projects component using Project component
const Projects = () => {
  const projectData = [
    {
      title: "Drum Kit Game",
      image: drumKit,
      description:
        'Using Html, Css and JavaScript, "Crafted an engaging Drum Kit Game for my portfolio using HTML, CSS, and JavaScript. Users can play virtual drums, enhancing interactivity and showcasing frontend development skills. Check it out!"',
      githubLink: "https://github.com/Aditya-Deshmukh9/Drum-Kit-Project", // Replace with your GitHub link
      liveLink: "https://aditya-deshmukh9.github.io/Drum-Kit-Project/", // Replace with your live link
    },
    {
      title: "Drum Kit Game",
      image: drumKit,
      description:
        'Using Html, Css and JavaScript, "Crafted an engaging Drum Kit Game for my portfolio using HTML, CSS, and JavaScript. Users can play virtual drums, enhancing interactivity and showcasing frontend development skills. Check it out!"',
      githubLink: "https://github.com/Aditya-Deshmukh9/Drum-Kit-Project", // Replace with your GitHub link
      liveLink: "#", // Replace with your live link
    },
    {
      title: "Drum Kit Game",
      image: drumKit,
      description:
        'Using Html, Css and JavaScript, "Crafted an engaging Drum Kit Game for my portfolio using HTML, CSS, and JavaScript. Users can play virtual drums, enhancing interactivity and showcasing frontend development skills. Check it out!"',
      githubLink: "https://github.com/Aditya-Deshmukh9/Drum-Kit-Project", // Replace with your GitHub link
      liveLink: "#", // Replace with your live link
    },
    // Add more project data as needed
  ];

  return (
    <section
      id="projects"
      className="dark:bg-gray-900 dark:text-white dark:border-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center lg:mt-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Kickstart Projects</h2>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
