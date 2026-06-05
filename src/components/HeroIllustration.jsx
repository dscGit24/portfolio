import developer from "../assets/developer.svg";
import { motion } from "framer-motion";
import {
  cardClass,
  textPrimary,
  textSecondary,
} from "../theme/themeClasses";

export default function HeroIllustration() {
  return (
    <div className="relative flex justify-center items-center">

      <motion.img
        src={developer}
        alt="Developer Illustration"
        className="w-full max-w-2xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Floating Cards */}

      <motion.div
        className="absolute top-10 left-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-400 shadow-lg px-4 py-3 rounded-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        💼 Open To Work
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-400 shadow-lg px-4 py-3 rounded-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🎓 MCA 2026
      </motion.div>

      <motion.div
        className="absolute top-24 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-400 shadow-lg px-4 py-3 rounded-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        ☕ Spring Boot
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-slate-400 shadow-lg px-4 py-3 rounded-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        📍 Ahmedabad
      </motion.div>

    </div>
  );
}