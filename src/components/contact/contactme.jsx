export function ContactMe() {
  return (
    <section
      id="contact"
      className="py-20 mb-20 contact-section w-full flex flex-col items-start justify-start text-left px-4"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

      <p className="text-lg mb-6">
        Have a project or question? Reach out — I&apos;d love to hear from you.
      </p>

      <form className="w-full max-w-xl bg-white shadow-sm rounded-lg p-6 grid grid-cols-1 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Name</span>
          <input
            type="text"
            name="name"
            className="border rounded px-3 py-2"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Email</span>
          <input
            type="email"
            name="email"
            className="border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Message</span>
          <textarea
            name="message"
            rows="5"
            className="border rounded px-3 py-2"
            placeholder="Tell me about your project..."
          ></textarea>
        </label>

        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Email Me
          </a>
        </div>
      </form>
    </section>
  );
}
