import React, { use, useEffect } from "react";
import PortfolioCard from "./components/PortfolioCard";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 1000,

        });
    }, []);
    return (
        <div>
            <div>
            <Navbar />
            </div>
            <div className="w-[80vw] mx-auto mt-[150px]">
            <section id="Home">
            <PortfolioCard />
            <HomeCard />
            </section>
            <section id="About">
            <AboutCard />
            </section>
            <section id="Skills">
            <Skills />
            </section>
            <section id="Projects">
            <Projects />
            </section>
            <section id="Contacts">
            <Contacts />
            </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;