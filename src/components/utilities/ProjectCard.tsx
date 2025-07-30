// Imports
import { useState } from "react";

// Components
import Overlay from "./Overlay";

// Interface
interface ProjectCardProps {
    id: string;
    name: string;
    coverLocation: string;
    imageType: boolean;
    extra?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, coverLocation, imageType, extra }) => {
    // State
    const [isMouseInside, setIsMouseInside] = useState(false);
    console.log(imageType);
    
    return (
        <div
            className={`relative grid place-items-center w-full ${imageType ? '' : 'aspect-video'} cursor-pointer ${extra ? extra : ""}`}
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            onClick={() => setIsMouseInside(!isMouseInside)}
        >
            <Overlay opacity={isMouseInside ? 50 : 0} extra="duration-[400ms] transition-opacity" />
            <img
                className={`object-center ${imageType ? 'h-auto object-contain' : 'absolute w-full h-full object-cover'}`}
                src={`/ProjectImages/${id}/${coverLocation}`}
                alt={`Project card cover image for ${name}`}
            />
            <span className={`absolute z-10 font-subtitle text-white text-xl md:text-4xl 2xl:text-5xl transition-opacity duration-[400ms] ease-in-out pointer-events-none ${isMouseInside ? 'opacity-100' : 'opacity-0'}`}>
                {name}
            </span>
        </div>
    )
}


export default ProjectCard;