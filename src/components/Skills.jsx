import { FaServer, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Expertise
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-16">
            Technologies I work with.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="
                bg-white
                rounded-2xl
                p-10
                shadow-sm
                border
                border-slate-200
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-600 text-2xl">{group.icon}</div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {group.title}
                  </h3>
                </div>

                <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-50
                      border
                      border-slate-200
                      text-slate-700
                    "
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
