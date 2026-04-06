import react from "react";
import Hulab from "../../assets/hulabLogo2.jpg";

const ProjectCard = () => {
    return (
        <div 
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        
        className="p-4 -m-4">
            <div className="h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:scale-105 
            transition-transform hover:border-white duration-300 shadow-lg shadow-lg backdrop-blur-lg project-card">
                <a href="">
                    <img src={Hulab} alt="project-img"
                    className="lg:h-fill w-full object-cover object-center"/>
                </a>
                <div className="p-4 flex flex-col lg:gap-3">
                    <h2 className="tracking-widest text-2xl text-white font-bold">Hulab</h2>
                    <h1 className="text-lg lg:text-lg text-gray-300">A website that manages equipment and logs student activities whoever borrows them. </h1>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;