import { FC } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const Intro: FC = () => (
    <div className="mx-auto h-2/3">
        <p className="animate-bounce text-5xl text-sky-200">
            Karrthik Arya
        </p>
        <p className="text-2xl text-gray-50 my-2">
            A momentary speck within an indiffernet universe
        </p>
        <p className="text-xl text-gray-400 my-6 opacity-70">
            Building cool stuff while coding my way through life
        </p>

        <div className="flex flex-col justify-between mt-20 gap-3">
            <div className="flex flex-row gap-4 items-center group hover:cursor-pointer">
                <div className="transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5" />
                <p className="transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5">
                    ABOUT
                </p>
            </div>
            <div className="flex flex-row gap-4 items-center group  hover:cursor-pointer">
                <div className="transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5" />
                <p className="transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5">
                    EXPERIENCE
                </p>
            </div>
            <div className="flex flex-row gap-4 items-center group  hover:cursor-pointer">
                <div className="transition ease-in-out bg-sky-100 w-14 h-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-x-150 group-hover:translate-x-3.5" />
                <p className="transition ease-in-out text-md tracking-wider text-sky-100 opacity-70 group-hover:opacity-100 group-hover:translate-x-5">
                    PROJECTS
                </p>
            </div>
        </div>

        <div className="mt-60 flex flex-row gap-6">
            <p className="text-2xl text-gray-100 opacity-70">
                <FaGithub />
            </p>
            <p className="text-2xl text-gray-100 opacity-70">
                <FaTwitter />
            </p>
            <p className="text-2xl text-gray-100 opacity-70">
                <FaLinkedin />
            </p>
        </div>
    </div>
)

export default Intro