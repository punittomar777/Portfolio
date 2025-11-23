export function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and Tailwind.",
    },
    {
      title: "Task Manager API",
      desc: "REST API with Node.js, Express and MongoDB.",
    },
    {
      title: "E-commerce Store",
      desc: "Full-stack app with payments and product management.",
    },
  ];

  return (
    <section id="projects" className="py-20 mb-20 projects-section w-full flex flex-col items-start justify-start text-left px-4">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <p className="w-full max-w-full text-lg mb-6">
        Here are some of the projects I've worked on recently. Feel free to
        check them out!
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <article key={i} className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-lg mb-4">{p.desc}</p>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Live
              </a>
              <a
                href="#"
                className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
