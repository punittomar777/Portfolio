export function HeroSection() {
  return (
    <>
      <section className="mt-0 mb-20 hero-section py-30 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Punit 🖐️</h1>
        <p className="mt-4 text-lg">
          Software Engineer specializing in React, Node.js, and scalable <br />
          backend systems.
        </p>
        <div className="mt-6 flex flex-row items-center justify-center space-x-4">
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition cursor-pointer"
          >
            View Projects
          </a>
        </div>
        <div className="mt-4 flex flex-row items-center justify-center space-x-6">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222 0 1.604-.014 2.896-.014 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25-11.268c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 11.268h-2.5v-5.5c0-1.381-.025-3.156-1.922-3.156-1.925 0-2.223 1.504-2.223 3.053v5.603h-2.5v-10h2.397v1.367h.034c.334-.632 1.148-1.298 2.363-1.298 2.525 0 2.992 1.664 2.992 3.828v6.103z" />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-red-600 hover:text-red-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 13.065l-11.2-7.2v11.135c0 1.657 1.343 3 3 3h16.4c1.657 0 3-1.343 3-3v-11.135l-11.2 7.2zM12 10.935l11.2-7.2c0-1.657-1.343-3-3-3h-16.4c-1.657 0-3 1.343-3 3l11.2 7.2z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
