import { FC, useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Intro: FC = () => {
    const [activeSection, setActiveSection] = useState(0)
    const about = document.getElementById('about')
    const exp = document.getElementById('experience')
    const proj = document.getElementById('projects')
    const isMobile = window.screen.width < 600
    return(
    <div className="mx-auto h-2/3 px-5 mt-20 md:my-auto">
        <p className="animate-bounce text-5xl text-sky-200">
            Karrthik Arya
        </p>
        <p className="text-2xl text-gray-50 my-2">
            A momentary speck within an indiffernet universe
        </p>
        <p className="text-xl text-gray-400 my-6 opacity-70">
            Building cool stuff while coding my way through life
        </p>

        {!isMobile && <div className="flex flex-col justify-between mt-20 gap-3">
            <div onClick={()=>{setActiveSection(0); about?.scrollIntoView({ behavior: 'smooth' })}} className="flex flex-row gap-4 items-center group hover:cursor-pointer">
                <div className={`transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5  group-active:scale-x-[1.75] group-active:translate-x-5 ${activeSection===0? 'opacity-100 scale-x-150 translate-x-3.5': ''}`} />
                <p className={`transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5 group-active:translate-x-7 ${activeSection===0? 'opacity-100 text-white translate-x-5': ''}`}>
                    ABOUT
                </p>
            </div>
            <div onClick={()=>{setActiveSection(1); exp?.scrollIntoView({ behavior: 'smooth' })}} className="flex flex-row gap-4 items-center group  hover:cursor-pointer">
                <div className={`transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5  group-active:scale-x-[1.75] group-active:translate-x-5 ${activeSection===1? 'opacity-100 scale-x-150 translate-x-3.5': ''}`} />
                <p className={`transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5 group-active:translate-x-7  ${activeSection===1? 'opacity-100 translate-x-5': ''}`}>
                    EXPERIENCE
                </p>
            </div>
            <div onClick={()=>{setActiveSection(2); proj?.scrollIntoView({ behavior: 'smooth' })}} className="flex flex-row gap-4 items-center group  hover:cursor-pointer">
                <div className={`transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5  group-active:scale-x-[1.75] group-active:translate-x-5 ${activeSection===2? 'opacity-100 scale-x-150 translate-x-3.5': ''}`} />
                <p className={`transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5 group-active:translate-x-7  ${activeSection===2? 'opacity-100 translate-x-5': ''}`}>
                    PROJECTS
                </p>
            </div>
        </div>}

        <div className="md:bottom-10 md:absolute flex flex-row gap-6">
            <a href="https://github.com/Karrthik-Arya" target="_blank" className="text-2xl text-gray-100 opacity-70 hover:cursor-pointer hover:opacity-100" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://twitter.com/arya_karrthik" target="_blank" className="text-2xl text-gray-100 opacity-70 hover:cursor-pointer hover:opacity-100" rel="noreferrer">
                <FaTwitter />
            </a>
            <a  href="https://www.linkedin.com/in/karrthik-arya-30997320b/" target="_blank" className="text-2xl text-gray-100 opacity-70 hover:cursor-pointer hover:opacity-100" rel="noreferrer">
                <FaLinkedin />
            </a>
        </div>
    </div>
)}

export default Intro