import React from "react";

const AboutCard = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:p-5 h-[280px] justify-between lg:items-center mb-360 lg:mb-360 about-card">
            <span data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000" 
            className="upperCase text-3xl lg:text-2xl text-purple-300 font-bold mb-8 lg:mb-0 -rotate-90 hover:text-purple-200"> About Me </span>
            <p data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" 
             className="text-gray-300 text-3xl lg:text-4xl hover:text-white lg:w-[85%]"> I am a passionate developer with experience in creating web applications.
                I enjoy solving complex problems and learning new technologies.</p>
        </div>
    )
}

export default AboutCard;