import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import HeroIllustration from "./HeroIllustration";
import {
  cardClass,
  textPrimary,
  textSecondary,
} from "../theme/themeClasses";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/30 blur-3xl rounded-full " />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full dark:block hidden"/>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-6 py-32 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for Opportunities
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Disha Chotai
            </h1>

            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mt-6">
              Java Full Stack Developer
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mt-8 max-w-xl leading-relaxed">
              Building scalable web applications using Java,
              Spring Boot, React and PostgreSQL.

              Passionate about backend engineering,
              clean architecture and modern web technologies.

              Currently completed MCA and building
              full-stack applications with Java ecosystem.
            </p>

            {/* Tech Pills */}

            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Java",
                "Spring Boot",
                "React",
                "PostgreSQL",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#project"
                className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-blue-600 dark:border-blue-400 dark:text-blue-400 text-blue-600 px-7 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-50 transition"
              >
                <FaDownload />
                Resume
              </a>

            </div>

            {/* Social Links */}

            <div className="flex gap-6 mt-10 text-xl text-slate-600">

              <a
                href="https://github.com/dscGit24"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition dark:text-slate-400 dark:hover:text-blue-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/disha-chotai-164350341"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition dark:text-slate-400 dark:hover:text-blue-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:chotaidisha24@gmail.com"
                className="hover:text-blue-600 transition dark:text-slate-400 dark:hover:text-blue-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <HeroIllustration />

        </div>

      </div>
    </section>
  );
}