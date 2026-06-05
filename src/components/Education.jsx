import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  cardClass,
  textPrimary,
  textSecondary,
} from "../theme/themeClasses";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      duration: "2024 - 2026",
      description:
        "Focused on Full Stack Development, Software Engineering, Database Systems and emerging technologies including Artificial Intelligence.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2021 - 2024",
      description:
        "Built strong foundations in programming, databases, web development and software design principles.",
    },
  ];

  return (
    <section id="education" className="py-32 bg-slate-50 dark:bg-slate-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-16">
            My Academic Journey.
          </h2>

          <div className="relative max-w-4xl">
            {/* Timeline Line */}

            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-blue-200 dark:bg-blue-900" />

            {education.map((item) => (
              <div key={item.degree} className="relative flex gap-8 mb-12">
                {/* Timeline Dot */}

                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="
                    w-10 h-10
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-md
                  "
                  >
                    <FaGraduationCap />
                  </div>
                </div>

                {/* Content Card */}

                <div
                  className="
                  bg-slate-50
                  dark:bg-slate-900
                  border
                  border-slate-200
                  rounded-2xl
                  p-8
                  w-full
                  hover:shadow-lg
                  transition-all
                "
                >
                  <span
                    className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-blue-100
                    dark:bg-blue-500/10
                    text-blue-700
                    dark:text-blue-400
                    text-sm
                    font-medium
                    mb-4
                  "
                  >
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {item.degree}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
