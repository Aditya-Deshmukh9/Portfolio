import React from "react";
import { Link } from "react-scroll";

// Project component
const UserProject = ({ title, image, description, githubLink, liveLink }) => (
  <div className="h-[400px] my-4 sm:my-1 rounded-lg bg-gray-200 ">
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-indigo-100 shadow-sm">
      <div className="border-4 border-white-600">
        <img alt={title} src={image} className="h-56 p-1 w-full object-fill" />
      </div>

      <div className="p-4 sm:px-6 sm:my-1">
        <Link to="home">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">
          {description}
        </p>

        <div className="flex flex-row justify-end gap-4">
          <a
            href={githubLink}
            className="group mt-4 inline-flex gap-1 text-sm font-medium text-black border-2 p-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href={liveLink}
            className="group mt-4 inline-flex gap-1 text-sm font-medium text-white bg-indigo-700 p-2 hover:bg-indigo-500 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live here
          </a>
        </div>
      </div>
    </article>
  </div>
);

export default UserProject;
