import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Let's Build Something Together.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}

            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                "
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  border
                  border-slate-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  resize-none
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                "
                />

                <button
                  type="submit"
                  className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  shadow-lg
                  hover:shadow-xl
                "
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}

            <div className="flex flex-col gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 dark:bg-slate-900 dark:border-slate-800">
                <h3 className="text-2xl text-slate-900 dark:text-white font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:chotaidisha24@gmail.com"
                    className="flex items-center gap-4"
                  >
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <span className="flex items-center gap-4 text-slate-700 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-300 transition">
                      chotaidisha24@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:+917600436771"
                    className="flex items-center gap-4"
                  >
                    <FaPhone className="text-blue-600 text-xl" />
                    <span className="flex items-center gap-4 text-slate-700 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-300 transition">
                      +91 76004 36771
                    </span>
                  </a>

                  <a
                    href="https://github.com/dscGit24"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4"
                  >
                    <FaGithub className="text-blue-600 text-xl" />
                    <span className="flex items-center gap-4 text-slate-700 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-300 transition">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com/in/disha-chotai-164350341"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4"
                  >
                    <FaLinkedin className="text-blue-600 text-xl" />
                    <span className="flex items-center gap-4 text-slate-700 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-300 transition">
                      LinkedIn
                    </span>
                  </a>

                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <span className="text-slate-700 dark:text-slate-300">Ahmedabad, Gujarat</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Open To Opportunities
                </h3>

                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li>✓ Java Developer Roles</li>
                  <li>✓ Full Stack Development</li>
                  <li>✓ Internship Opportunities</li>
                  <li>✓ Freelance Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
