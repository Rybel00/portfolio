import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const Contacts  = () => {
    return (
        <div className="flex lg:items-center mb-20 lg:mb-36 gap-5 lg:gap-10">
            <span data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="uppercase text-3xl lg:text-2xl font-bold mb-8 lg:mb-0 text-purple-500 -rotate-90 hover:text-purple-400">Get in Touch</span>
            <div className="flex flex-col lg:flex-row lg:ml-5">
                <div className="mb-5 lg:mb-0">
                    <h1
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="text-2xl lg:text-4xl mb-5 lg:mb-10 text-purple-300 hover:text-purple-200">Contact Me</h1>
                    <div 
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className="flex gap-5">
                        <a href="https://github.com/dashboard" className="flex text-gray-300 hover:text-white font-mono mb-3"> <FaGithub/> <span className="ml-2">Rybel00/MallorcaB</span> </a>
                    </div>
                    <div 
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className="flex gap-5">
                        <a href="mailto:bryleadammallorca@gmail.com" className="flex text-gray-300 hover:text-white font-mono mb-3"> <SiGmail /> <span className="ml-2">bryleadammallorca@gmail.com</span> </a>
                    </div>
                    <div 
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                    className="flex gap-5">
                        <a href="https://www.facebook.com/bryle.adam.mallorca" className="flex text-gray-300 hover:text-white font-mono mb-3"> <FaFacebook /> <span className="ml-2">Bryle Adam Mallorca</span> </a>

                    </div>
                    </div>
                </div>
            </div>
    );
}

export default Contacts;