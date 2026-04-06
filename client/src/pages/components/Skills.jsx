import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return (
        <div className="mb-20 lg:mb-36 mt-20 lg:mt-36 h-[200px] lg:h-[500px] skills-container">
            <h1 
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            className="text-5xl lg:text-7xl text-purple-300 mb-10 hover:text-purple-200 transition-colors">My Skills</h1>
            <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"ReactJS"} value={40} />
            <SkillsCard title={"JavaScript"} value={30} />
            <SkillsCard title={"HTML"} value={60} />
            <SkillsCard title={"CSS"} value={65} />
            <SkillsCard title={"Node.js"} value={20} />
            <SkillsCard title={"Python"} value={25} />
            </div>
        </div>
    )
}

export default Skills;