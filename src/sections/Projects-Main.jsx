import React from "react";
import { myProjects } from "/constants"

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-16 bg-default-color">
      <h2 className="text-center text-3xl font-semibold mb-12 text-heading">
        My Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map(({ id, title, description, subDescription, image, tags, href }) => (
          <a
            key={id}
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-secondary-color"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-heading">{title}</h3>
              <p className="mb-3 text-gray-300">{description}</p>
              <ul className="list-disc list-inside mb-3 text-gray-400 text-sm">
                {subDescription.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {tags.map(({ id, name, path }) => (
                  <img
                    key={id}
                    src={path}
                    alt={name}
                    title={name}
                    className="h-6 w-6 object-contain"
                  />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
