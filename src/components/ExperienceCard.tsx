import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ExperienceCardProps = {
    duration: string
    title: string
    company: string
    location: string
    description: string
}

const ExperienceCard: FC<ExperienceCardProps> = ({title, duration, company, location, description}) => {
    return (
        <div className="group w-full m-2 p-2 rounded-lg hover:cursor-pointer hover:shadow-lg hover:bg-white/5 hover:backdrop-opacity-5 transition ease-in-out flex flex-row gap-10">
            <p className="w-1/4 text-slate-300 opacity-40 text-md my-1">
                {duration}
            </p>
            <div className="flex flex-col w-2/3">
                <div className="flex gap-2">
                    <p className="text-gray-200 opacity-90 text-lg group-hover:text-green-300">
                        {title}
                    </p>
                    <p className="text-gray-200 opacity-90 text-lg -mt-1 group-hover:text-green-300">
                        .
                    </p>
                    <p className="text-gray-200 opacity-90 text-lg group-hover:text-green-300">
                        {company}
                    </p>
                    <FiArrowUpRight className="-ml-1 transition ease-in-out w-5 h-5 my-auto text-gray-300 opacity-90 group-hover:text-green-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-gray-200 opacity-60 text-[20]">
                        {location}
                </p>
                <p className="text-gray-300 opacity-60 text-[16] mt-5">
                        {description}
                </p>
            </div>

        </div>
    )
}
export default ExperienceCard