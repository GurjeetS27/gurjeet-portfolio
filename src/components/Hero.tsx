function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Gurjeet Singh</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
          Junior Software Engineer | AI Enthusiast
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-8">
          Building intelligent, real-world solutions that solve real problems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            download
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
