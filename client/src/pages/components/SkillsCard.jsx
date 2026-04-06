import React from "react";

const SkillsCard = ({title, value}) => {
    return (
        <div 
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"

        className="flex justify-between items-center mt-5 backdrop-blur-xl border-2 border-gray-400 rounded-lg  skills-card">
        <div>
            <h3 className="font-bold text-xl text-white">{title}</h3>
        </div>
        <div><progress max="100" value={value} items-center className="progressbar mt-5 mr-5"></progress>
        </div>
        
        </div>
    )
}

export default SkillsCard;