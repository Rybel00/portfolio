import React from "react";
import ProjectsCard from "./ProjectCard";
import ProjectsCard2 from "./ProjectCard2";
import ProjectsCard3 from "./ProjectCard3";

const Projects = () => {
    return (
        <div className="mb-20 lg:mb-36">
            <h1 
            data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            className="text-5xl lg:text-5 text-purple-300 hover:text-purple-200 mb-10 font-bold">My Projects</h1>
            <div 
            className="flex gap-15 overflow-x-scroll lg:p-3 scroll-hide">
            <ProjectsCard />
            <ProjectsCard2 />
            <ProjectsCard3 />
            </div>
        </div>
    );
}

export default Projects;