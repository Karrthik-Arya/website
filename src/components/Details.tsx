import { FC } from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const Details : FC = () => (
    <div className=" p-5 md:p-20">
        <p id='about' className="text-lg text-gray-200 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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