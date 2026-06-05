import { FaServer, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  cardClass,
  textPrimary,
  textSecondary,
} from "../theme/themeClasses";

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
    <section id="skills" className="py-32 bg-slate-50 dark:bg-slate-950 px-6">
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

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Technologies I work with.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="
                bg-white
                dark:bg-slate-900
                rounded-2xl
                p-10
                shadow-sm
                border
                border-slate-200
                dark:border-slate-800
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl">{group.icon}</div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
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
                      dark:bg-slate-800
                      border
                      border-slate-200
                      text-slate-700
                      dark:text-slate-300
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
