
import image1 from "../assets/imgs/web1.jpg";
import image2 from "../assets/imgs/web2.jpg";
import image3 from "../assets/imgs/web3.jpg";
import image4 from "../assets/imgs/web4.jpg";
import image5 from "../assets/imgs/web5.jpg";
import { motion } from "motion/react";

const projectData = [
  {
    image: image1,
    title: "Slides",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fugiat anim id fugiat non harum dolore non reprehenderit consequat iusto nulla irure dolor autem id consequat sunt imperdiet atque excepteur quo eligendi vero ea do expedita in aut consequat aut laborum optio repellendus provident in occaecat imperdiet blanditiis mollit occaecat in",
    technologies: ["HTML", "CSS", "JavaScript", "MySql"],
  },
  {
    image: image2,
    title: "WEBSITE",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fugiat anim id fugiat non harum dolore non reprehenderit consequat iusto nulla irure dolor autem id consequat sunt imperdiet atque excepteur quo eligendi vero ea do expedita in aut consequat aut laborum optio repellendus provident in occaecat imperdiet blanditiis mollit occaecat in",
    technologies: ["HTML", "CSS", "JavaScript", "MySql", "Tailwind"],
  },
  {
    image: image3,
    title: "Landing Page",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fugiat anim id fugiat non harum dolore non reprehenderit consequat iusto nulla irure dolor autem id consequat sunt imperdiet atque excepteur quo eligendi vero ea do expedita in aut consequat aut laborum optio repellendus provident in occaecat imperdiet blanditiis mollit occaecat in",
    technologies: ["HTML", "CSS", "JavaScript", "MySql", "Bootstrap"],
  },
  {
    image: image4,
    title: "Red Lamding Paagfe",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fugiat anim id fugiat non harum dolore non reprehenderit consequat iusto nulla irure dolor autem id consequat sunt imperdiet atque excepteur quo eligendi vero ea do expedita in aut consequat aut laborum optio repellendus provident in occaecat imperdiet blanditiis mollit occaecat in",
    technologies: ["HTML", "CSS", "JavaScript", "MySql", "Laravel"],
  },
  {
    image: image5,
    title: "Natire Landing Page",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit fugiat anim id fugiat non harum dolore non reprehenderit consequat iusto nulla irure dolor autem id consequat sunt imperdiet atque excepteur quo eligendi vero ea do expedita in aut consequat aut laborum optio repellendus provident in occaecat imperdiet blanditiis mollit occaecat in",
    technologies: ["HTML", "CSS", "TypeScript", "MySql", "React"],
  },
];



const ScrollReveal = ({children}) => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.5}}
    >
        {children}
    </motion.div>
  )
}





const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div id="projects" className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 scroll-mt-75">
      <img
        src={project.image}
        alt=""
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-75"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className=" rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </ScrollReveal>
  );
};



const Projects = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <ScrollReveal>
      <h1 className="text-3xl md:text-5xl font-light text-white">
        Projects
      </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-250 flex-col gap-16 text-white">
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }

      </div>
    </div>
  );
};

export default Projects;
