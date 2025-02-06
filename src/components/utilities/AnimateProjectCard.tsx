// Imports
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Components
import Overlay from "./Overlay";

// Interface
interface AnimateProjectCardProps {
    id: string;
    name: string;
    coverLocation: string;
    imagesLocation: string[];
}

const AnimateProjectCard: React.FC<AnimateProjectCardProps> = ({ id, name, coverLocation, imagesLocation }) => {
    // States
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

    // UseEffects for animation loop
    useEffect(() => {
        let animationLoop: number | undefined = undefined;

        if (isMouseInside) {
            animationLoop = setInterval(() => {
                setCurrentAnimationIndex(prev => (prev + 1) % imagesLocation.length);
            }, 900);
        } else if (!isMouseInside && animationLoop) {
            clearInterval(animationLoop);
        }

        return () => { clearInterval(animationLoop); };
    }, [isMouseInside, imagesLocation]);

    return (
        <Link
            className="relative grid place-items-center aspect-video"
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            onClick={()=> setIsMouseInside(!isMouseInside)}
            to={`/projects/${name.replace(" ", "-").toLowerCase()}`}
        >
            <Overlay opacity={isMouseInside ? 50 : 20} extra="duration-[400ms] transition-opacity" />
            <img
                className={`absolute w-full h-full object-center object-cover duration-100 ${isMouseInside && imagesLocation.length > 0 ? "opacity-0" : "opacity-100"}`}
                src={`/ProjectImages/${id}/${coverLocation}`}
                alt={`Project card cover image for ${name}`}
            />
            <AnimatePresence>
                {imagesLocation?.map((image, index) => (
                    <motion.img
                        key={`Project_${name}_animation_img_${index}`}
                        className="absolute w-full h-full object-center object-cover"
                        src={`/ProjectImages/${id}/${image}`}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: index === currentAnimationIndex && isMouseInside ? 1 : 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, type: "tween" }}
                    />
                ))}
            </AnimatePresence>
            <span className={`z-10 font-subtitle text-white text-xl md:text-4xl 2xl:text-5xl transition-opacity duration-[400ms] ease-in-out pointer-events-none ${isMouseInside ? 'opacity-100' : 'opacity-0'}`}>
                {name}
            </span>
        </Link>
    )
}

export default AnimateProjectCard;