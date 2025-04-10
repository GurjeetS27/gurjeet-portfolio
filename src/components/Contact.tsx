function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-8 border-t">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let’s Connect
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          I’m actively looking for junior software engineering and AI
          engineering roles. Feel free to reach out or download my resume!
        </p>

        {/* Resume Download */}
        <a
          href="/resume-sofware-engineer.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
        >
          Download Resume
        </a>

        {/* Contact Info */}
        <div className="flex justify-center gap-6 mt-6 text-blue-600 text-lg">
          <a
            href="mailto:sgurjeet627@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://github.com/GurjeetS27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gurjeetsinghcs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
