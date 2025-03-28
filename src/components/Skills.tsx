function Skills() {
  const categories = [
    {
      title: "Languages",
      items: ["JavaScript", "Python", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Tools & DevOps",
      items: ["Git", "GitHub", "Postman", "Netlify", "Render"],
    },
    {
      title: "AI & Cloud",
      items: ["OpenAI GPT", "MongoDB", "AWS Cognito"],
    },
    {
      title: "Certifications",
      items: ["AWS Cloud Practitioner", "Global Tech Experience"],
    },
  ];

  return (
    <section id="skills" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Tools
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 bg-gray-100 px-3 py-1 rounded-md inline-block mr-2 mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
