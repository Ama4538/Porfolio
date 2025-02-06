// Imports
import { useState } from "react";

// Components
import Overlay from "./Overlay";

// Interface
interface ProjectCardProps {
    id: string;
    name: string;
    coverLocation: string;
    extra?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, coverLocation, extra }) => {
    // State
    const [isMouseInside, setIsMouseInside] = useState(false);

    return (
        <div
            className={`relative grid place-items-center aspect-video cursor-pointer ${extra ? extra : ""}`}
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            onClick={() =>  setIsMouseInside(!isMouseInside)}
        >
            <Overlay opacity={isMouseInside ? 50 : 20} extra="duration-[400ms] transition-opacity" />
            <img
                className="absolute w-full h-full object-center object-cover"
                src={`/ProjectImages/${id}/${coverLocation}`}
                alt={`Project card cover image for ${name}`}
            />
            <span className={`z-10 font-subtitle text-white text-xl md:text-4xl 2xl:text-5xl transition-opacity duration-[400ms] ease-in-out pointer-events-none ${isMouseInside ? 'opacity-100' : 'opacity-0'}`}>
                {name}
            </span>
        </div>
    )
}


export default ProjectCard;