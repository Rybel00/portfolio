import React from "react";
import myImg from "../../assets/portfolio_pic.png";

const HomeCard = () => {
    return (
        <div 
        className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:p-5 justify-between items-center mb-20 lg:mb-36  home-card">
            <div className="flex flex-col gap-5 lg:w-[50%]">
            <h1 
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-purple-300 text-5xl lg:text-6xl font-bold mb-10 hover:text-purple-200">What's Up!</h1>
            <p 
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-gray-300 text-xl lg:text-xl hover:text-white">I'm <span className="text-gray-300 hover:text-purple-300">Bryle Adam Mallorca</span>, a student 
            developer. I have a passion for coding and creating innovative solutions. I am currently learning and exploring various programming languages and 
            technologies to enhance my skills and knowledge in the field of software development.</p>
                <p 
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="text-gray-300 text-xl lg:text-xl hover:text-white">Feel free to check out my portfolio to see some of the projects I've worked on and the
                     skills I've acquired. I'm always eager to learn and grow as a developer, and I'm excited to see where my journey in the world of coding takes me!
                    </p>
                    </div>
                    <div
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <img src={myImg} alt="profile" className="rounded-full object-cover w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]
                        mx-auto hover:scale-102 transition-transform hover:border-gray-300 duration-300 border-3 border-transparent"/>
                    </div>
            </div>
    )
}

export default HomeCard;