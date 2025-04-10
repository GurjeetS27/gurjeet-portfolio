function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 👤 Profile Image */}
        <img
          src="/gurjeet-profile.jpg"
          alt="Gurjeet Singh"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover transition-transform duration-300 hover:scale-105"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Gurjeet Singh</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
          Junior Software Engineer | AI Enthusiast
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-8">
          Building intelligent, real-world solutions that solve real problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="/resume-sofware-engineer.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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

        <p className="text-sm text-gray-500 italic">
          Also available:{" "}
          <a
            href="/resume-data-analyst.pdf"
            download
            className="text-blue-600 hover:underline"
          >
            Data Analyst Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
