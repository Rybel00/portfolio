import React from "react";


const Navbar = () => {
    return (
        <div className=" flex backdrop-blur-lg shadow-xl  navbar">
            <ul className="flex gap-10 text-gray-300 font-bold text-lg ml-[35%]">
                <li className="hover:scale-105 transition-transform duration-300 hover:text-white">
                    <a href="#Home">Home</a></li>
                <li className="hover:scale-105 transition-transform duration-300 hover:text-white">
                    <a href="#About">About</a></li>
                <li className="hover:scale-105 transition-transform duration-300 hover:text-white">
                    <a href="#Skills">Skills</a></li>
                <li className="hover:scale-105 transition-transform duration-300 hover:text-white">
                    <a href="#Projects">Projects</a></li>
                <li className="hover:scale-105 transition-transform duration-300 hover:text-white">
                    <a href="#Contacts">Contact</a></li>
            </ul>

        </div>
    );
}

export default Navbar;