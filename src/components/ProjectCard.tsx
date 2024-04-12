import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectCardProps = {
    title: string
    subtitle: string
    description: string
    url?: string
}

const ProjectCard: FC<ProjectCardProps> = ({title, subtitle, description, url}) => {
    return (<div onClick={()=>url && window.open(url, '_blank')} className={`w-full group m-2 p-2 rounded-lg ${url? 'hover:cursor-pointer':''} hover:shadow-lg hover:bg-white/5 hover:backdrop-opacity-5 transition ease-in-out flex flex-col`}>
        <p className="text-gray-200 opacity-90 text-lg">
                {title}
        </p>
        <p className="text-gray-200 opacity-70 text-[20] mt-1">
                {subtitle}
        </p>
        <p className="text-gray-300 opacity-60 text-[16] mt-5">
                {description}
        </p>
        <div className="flex flex-row mt-3 gap-1">
       {url &&<> <p className="transition ease-in-out text-gray-200 opacity-90 text-lg group-hover:text-green-300">
            View Project
        </p>
         <FiArrowUpRight className="transition ease-in-out w-5 h-5 my-auto text-gray-300 opacity-90 group-hover:text-green-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}
        </div>
    </div>)
}

export default ProjectCard;