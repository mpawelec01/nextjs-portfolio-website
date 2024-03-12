"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    descripion: "Next.js, TailwindCss",
    image: "/images/projects/portfolio-project.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/mpawelec01/nextjs-portfolio-website",
    previewUrl: "https://nextjs-portfolio-website-blue.vercel.app",
  },
  {
    id: 2,
    title: "Car rental website",
    descripion: "Next.js, TailwindCss",
    image: "/images/projects/car-rental.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/mpawelec01/car-rental-website",
    previewUrl: "https://car-rental-website-blue.vercel.app",
  },
  {
    id: 3,
    title: "Backend CRUD REST API",
    descripion: "Node.js, Express, MongoDB, Mongoose",
    image: "/images/projects/backend-app.jpg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/mpawelec01/NODE-REST_API",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Phonebook Manager",
    descripion: "React, ChakraUI, Redux",
    image: "/images/projects/phonebook-manager.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/mpawelec01/goit-react-hw-08-phonebook",
    previewUrl: "https://mpawelec01.github.io/goit-react-hw-08-phonebook/",
  },
  {
    id: 5,
    title:
      "Bookshelf - Group project during the course (participated as Scrum Master and DEV)",
    descripion: "HTML, SCSS",
    image: "/images/projects/bookshelf.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/gointoorbit/goit-project-js-group-2",
    previewUrl: "https://gointoorbit.github.io/goit-project-js-group-2/",
  },
  {
    id: 6,
    title:
      "Ice cream - Group project during the course (participated as Team Leader and DEV)",
    descripion: "HTML, SCSS",
    image: "/images/projects/ice-cream.jpg",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/mpawelec01/project_grupa_06",
    previewUrl: "https://mpawelec01.github.io/project_grupa_06/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="scroll-mt-40" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul
        ref={ref}
        className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.descripion}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
