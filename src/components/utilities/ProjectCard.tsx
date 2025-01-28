import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Overlay from "./Overlay"

// Interface
interface ProjectCardProps {
    name: string,
    coverLocation: string,
    imagesLocation: string[],
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, coverLocation, imagesLocation }) => {
    // State used to play animation
    const [isMouseInside, setIsMouseInside] = useState(false)
    const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0)

    // Folder location of all related images
    const imageFolder = name.replace(" ", "_");

    // Animation Loop
    useEffect(() => {
        // Used to only play animation when mouse is inside
        let animationLoop: number | undefined = undefined;

        // Set interval when inside
        if (isMouseInside) {
            animationLoop = setInterval(() => {
                setCurrentAnimationIndex(prev => (prev + 1) % imagesLocation.length)
            }, 1000)
        } else if (!isMouseInside && animationLoop) {
            clearInterval(animationLoop);
        }

        return () => { clearInterval(animationLoop) };
    }, [isMouseInside, imagesLocation.length])

    return (
        <a
            className="relative grid place-items-center bg-red-100 aspect-video group"
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            href=""
        >
            <Overlay opacity={isMouseInside ? 50 : 20} extra="duration-[400ms] transition-opacity" />
            <img className='absolute w-full h-full object-center object-cover' src={`/ProjectImages/${imageFolder}/${coverLocation}`} alt={`Project card cover image for ${name}`} />
            <AnimatePresence>
                {imagesLocation.map((image, index) => (
                    <motion.img
                        key={`Project_${name}_animation_img_${index}`}
                        className="absolute w-full h-full object-center object-cover"
                        src={`/ProjectImages/${imageFolder}/${image}`}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: index === currentAnimationIndex && isMouseInside ? 1 : 0
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.50,
                            type: "tween"
                        }}
                    />
                ))}
            </AnimatePresence>
            <span className={`z-10 font-subtitle text-white text-5xl transition-opacity duration-[400ms] ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none`}>{name}</span>
        </a>
    )
}

export default ProjectCard