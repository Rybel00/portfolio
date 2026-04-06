import React from "react";

const PortfolioCard = () => {
    return (
        <div 
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="px-5 lg:p-5 text-white mt-20 w-[80vw] w-[30vw] my-20 lg:my-[20] hover:scale-105 transition-transform hover:border-white
         duration-300 portfolio-card"> 

            <h3 className="text-4xl font-bold lg:text-5xl py-3 border-2 border-transparent
            border-b-gray-300">My Portfolio</h3>
            <h3 className="text-xl lg:text-2xl py-3 border-2 border-transparent
            border-b-gray-300">Bryle Adam Mallorca</h3>
            <h3 className="text-lg lg:text-xl py-3">Student Web Developer</h3>
        </div> 
    );
}

export default PortfolioCard;