function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Smart AI Task Manager
            </h3>
            <p className="text-gray-700 mb-4">
              A full-stack productivity app powered by OpenAI GPT. It suggests
              the best time to complete tasks based on your past habits.
              Features include voice-based task creation, secure authentication
              (Cognito), and task analytics via charts.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                React
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Node.js
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                MongoDB
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                AWS Cognito
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                OpenAI
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://main.d2e138pubfs3hg.amplifyapp.com/"
                className="text-blue-600 hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Gurudwara Website
            </h3>
            <p className="text-gray-700 mb-4">
              A full-stack platform built for the Nashville Gurudwara to manage
              announcements, donations, and gallery images. Features include an
              admin dashboard with token-based access, AWS S3 image uploads with
              preview and drag-drop, real-time announcements, and a mobile-first
              UI. Deployed with a custom domain and CI/CD pipeline.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                React
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Node.js
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                MongoDB
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Tailwind CSS
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                AWS S3
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                JWT Auth
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Netlify
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                Render
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://nashvillegurdwara.com/"
                className="text-blue-600 hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
