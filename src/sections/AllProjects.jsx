import { myProjects } from "../constants";

const AllProjects = () => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-16 bg-default-color text-white">
      <h2 className="text-center text-4xl font-bold mb-12 text-heading">
        All Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map(
          ({ id, title, description, subDescription, image, tags, href }) => (
            <div
              key={id}
              className="rounded-xl border border-white/10 bg-primary hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{description}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                  {subDescription.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) =>
                    tag.icon ? (
                      <tag.icon
                        key={tag.name}
                        title={tag.name}
                        className="w-6 h-6 text-white"
                      />
                    ) : (
                      <img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        className="w-6 h-6"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AllProjects;
