import { FC } from "react";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
    return (
        <div className="my-2 flex flex-col gap-5">
            <ProjectCard url="https://devpost.com/software/spear-the-future-of-socializing" title="Spear: The Future of Socializing" subtitle="DeveloperWeek Hackathon" description="Working on an app that helps people wanting to go to an event connect with other like-minded people, allowing them to form groups and experience together. The project includes a frontend developed with React Native and backend infrastructure comprising a Postgres database with Prisma and a Nest.JS service. User authentication is streamlined with Firebase and Google OAuth, with security ensured through auth guards and TypeORM within Nest.JS for secure communication with the database." />
            <ProjectCard title="CodeWars" subtitle="Web and Coding Club, IIT Bombay" description="A simulation was developed utilizing B+ Trees to manage a Limit Order Book, feeding changes to a Hawkes Process. The simulation was transferred to the client's side, featuring State-dependent Market Movement based on Gaussian Models. The server was constructed using Express.js with MongoDB to facilitate communication with clients using RSA-based encryption. Additionally, a straightforward and user-friendly dashboard was created using React.js to showcase the leaderboard and other statistics." />
            <ProjectCard title="Parkin: Parking Spaces Finder" subtitle="Seasons of Code 2022, IIT Bombay" description="Mentored a team of 10 students to create a parking app using React-Native for frontend and Nest.js for backend. Developed a REST API with Nest.js for MongoDB to handle CRUD operations on parking spaces data. Integrated an interface on React-Native for users to input parking spaces, leveraging the Google Maps API." />
        </div>
    )
}

export default Projects;