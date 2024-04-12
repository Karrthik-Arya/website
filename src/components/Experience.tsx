import { FC } from "react"
import ExperienceCard from "./ExperienceCard"

const Experience: FC = () => {
    return (
        <div className="h-max my-2 flex flex-col">
            <ExperienceCard url='https://www.fijit.club/' title="Founding Member" duration="Oct 2022-Present" company="Fijit" location="Remote" description="Engaged in the development of an innovative hypercasual gaming app infused with memes. Utilizing React Native, I am actively involved in crafting an application featuring a diverse arcade of games built on the Unity platform. From integrating Unity games seamlessly into the platform to implementing analytics, I have tackled a diverse array of challenges at Fijit" />
            <ExperienceCard title="Software Development Intern" duration="May 2023 - July 2023" company="Amazon" location="Hyderabad, India" description="Successfully implemented a data vending pipeline for a data lake using AWS services such as Athena, Glue, Lambda etc. Employing AWS CDK, I orchestrated the entire infrastructure, including tables and crawlers, for simplified future maintenance." />
            <ExperienceCard title="MLOps Intern" duration="May 2022 - Sep 2022" company="Marsh McLennan" location="Mumbai, India" description="Architected a comprehensive end-to-end CI/CD MLOps Pipeline on AWS SageMaker, incorporating open-source tools like DeepChecks and Explainable AI. Explored distributed data parallelism techniques, including Parameter Server and Uber's Horovod Ring Reduce, and implemented distributed training on an AWS EMR Cluster using Spark DataFrame for diverse algorithm types." />
        </div>
    )
}

export default Experience