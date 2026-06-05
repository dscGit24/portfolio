import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      value: "1+",
      label: "Projects Built",
    },
    {
      value: "Java",
      label: "Specialization",
    },
    {
      value: "MCA",
      label: "2026 Graduate",
    },
    {
      value: "Ahmedabad",
      label: "Gujarat",
    },
  ];

  return (
    <section id="about" className="py-32 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-10">
            Building software with purpose.
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}

            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am an MCA student and Java Full Stack Developer passionate
                about building scalable web applications using Spring Boot,
                React and PostgreSQL.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                My primary interest lies in backend engineering, clean
                architecture and designing practical software solutions that
                solve real-world problems.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Beyond development, I enjoy exploring Artificial Intelligence,
                modern software practices and continuously improving my
                technical skills.
              </p>
            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  p-8
                  hover:shadow-lg
                  transition-all
                "
                >
                  <h3 className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </h3>

                  <p className="text-slate-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
