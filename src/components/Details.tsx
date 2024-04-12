import { FC } from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const Details : FC = () => (
    <div className="h-full p-5 md:p-20">
        <p id='about' className="text-lg text-gray-200 opacity-70">
           I'm just your friendly neighborhood tech enthusiast! Been tinkering with code for about eight years now, dabbling in everything from web and app development to the wild worlds of ML/AI and robotics. There's nothing I love more than diving into mind-bending challenges that make me go, "Whoa." And when I'm not deep in the digital realm, you'll catch me out and about, exploring new places, meeting cool folks, and soaking up all the good vibes.
        </p>

        <p id='experience' className="text-2xl text-sky-100 mt-20">
            Experience
        </p>
            <Experience />

        <p id='projects' className="text-2xl text-sky-100 mt-20">
            Projects
        </p>
        <Projects />
        {/* <div className="h-96"></div> */}
    </div>
)

export default Details