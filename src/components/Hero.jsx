import image from "../assets/imgs/hero_pic.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className="px-8 md:px-32 py-32 flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col gap-10 justify-center items-center text-white">
        <motion.div
        initial={{y:-50, opacity: 0}}
        animate={{y:0, opacity: 1 }}
        transition={{duration: 0.4, delay: 0.2}}
        >
          <img
            src={image}
            alt=""
            className="w-50 md:w-60 rounded-full cursor-pointer shadow-xl shadow-indigo-900 
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
          />
        </motion.div>

        <motion.div 
        initial={{y:50, opacity: 0}}
        animate={{y:0, opacity: 1 }}
        transition={{duration: 0.4, delay: 0.2}}

        className="flex flex-col items-center justify-center gap-3 text-center">
          <h1
            className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
            text-2xl md:text-5xl font-light"
          >
            Jose Ryan Acosta
          </h1>
          <h3
            className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
            text-l md:text-2xl "
          >
            Web Developer
          </h3>
          <p className="text-sm md:text-base text-pretty text-gray-400 max-w-[50ch]">
            lorem ipsum dolor sit amet consectetur adipiscing elit non
            voluptatum cupidatat omnis ad dolor aute temporibus et minim
            imperdiet nam pariatur id dolorem ut ullamco quod ut aliqua
            adipiscing quas voluptatum id non expedita facere at eiusmod velit
            quidem dolores excepturi sit
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
