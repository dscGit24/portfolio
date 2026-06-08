import { motion } from "framer-motion";
import {
  cardClass,
  textPrimary,
  textSecondary,
} from "../theme/themeClasses";

export default function Projects() {
  const features = [
    "Student Registration",
    "Attendance Tracking",
    "Course Management",
    "Academic Records",
    "Search & Filtering",
    "Responsive User Interface",
  ];

  const technologies = [
    "Spring Boot",
    "React",
    "PostgreSQL",
    "REST API",
    "Tailwind CSS",
  ];

  return (
    <section id="project" className="py-32 bg-white dark:bg-slate-950 px-6">
      {" "}
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Featured Project
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            ● Completed Project
          </div>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            Student Management System
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg mt-6 max-w-3xl leading-relaxed">
            A full-stack web application built using Spring Boot, React and
            PostgreSQL for managing student records, attendance, courses and
            academic information through a centralized and user-friendly
            platform.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <a
              href="/assets/images/dashboard.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/dashboard.png"
                alt="Dashboard"
                className="rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
              />
            </a>

            <a
              href="/assets/images/dashboard.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/students.png"
                alt="Students"
                className="rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
              />
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">Problem</h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Managing student records manually can be time-consuming,
              error-prone, and difficult to maintain as data grows.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-10 mb-4">
              Solution
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Developed a centralized student management platform that
              simplifies student registration, attendance tracking, course
              management, and academic record maintenance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Key Features
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="bg-slate-50 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-800 rounded-xl p-4 text-slate-700"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Technology Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
              px-4 py-2
              rounded-full
              border
              border-blue-200
              dark:border-slate-800
              bg-blue-50
              text-blue-700
              dark:bg-slate-800
              dark:text-slate-300
              font-medium
            "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/dscGit24/StudentManagementSystemFigmaDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="
          inline-flex
          items-center
          bg-blue-600
          text-white
          px-7
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
        "
          >
            View Source Code
          </a>
        </motion.div>
      </div>
    </section>
  );
}
