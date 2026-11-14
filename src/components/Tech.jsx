import { DiJavascript } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { motion } from "motion/react";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-light text-white"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap gap-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiPhp
            className="text-indigo-400 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <IoLogoHtml5
            className="text-orange-500 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <IoLogoCss3
            className="text-blue-700 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <DiJavascript
            className="text-yellow-400 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <RiTailwindCssFill
            className="text-blue-500 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaLaravel
            className="text-orange-700 cursor-pointer text-[40px] transition-all duration-300
          hover:-translate-y-5 sm:text-[60px] md:text-[80px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
