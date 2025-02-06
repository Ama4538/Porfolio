// Imports
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Icons
import GithubIcon from "../svg/icons/GithubIcon"
import LinkedInIcon from "../svg/icons/LinkedInIcon"
import EmailIcon from "../svg/icons/EmailIcon"
import MenuIcon from '../svg/icons/MenuIcon';
import CancelIcon from '../svg/icons/CancelIcon';

// Interface
interface NavProp {
    extra?: string;
}

const MobileNav: React.FC<NavProp> = ({ extra }) => {
    // State Used to manage active
    const [isActive, setIsActive] = useState(false);

    // Array containing all nav items
    const navLinks = [{ label: 'Projects', location: '/' }, { label: 'About', location: '/about' }, { label: 'Contact', location: '/contact' }]
    const location = useLocation();

    // Formatting location
    let formattedLocation = ""

    // Checking if location is a subset of a existing nav location
    if (location.pathname.lastIndexOf("/") == 0) {
        formattedLocation = location.pathname;
    } else if (location.pathname.includes('projects')) {
        formattedLocation = '/';
    }

    return (
        <>
            <button className={`${isActive ? 'fixed px-9 md:px-16' : 'relative'} z-30 aspect-square right-0 h-6 md:h-8 ${extra ? extra : ''}`} onClick={() => { setIsActive(!isActive) }}>
                <CancelIcon className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 transition-all ease-in-out ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}`} height={'100%'} />
                <MenuIcon className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 transition-all ease-in-out ${isActive ? 'opacity-0 invisible' : 'opacity-100 visible'}`} height={'100%'} />
            </button>
            <nav className={`z-20 flex flex-col fixed left-0 bottom-0 h-screen w-screen duration-300 transition-all bg-black ${isActive ? "visible opacity-100" : "invisible opacity-0"} ${extra ? extra : ''}`}>

                <ul className="flex flex-col flex-1 justify-center items-center gap-14 md:gap-16 font-subtitle">
                    {navLinks.map((link) => (
                        <li key={`Nav_Link_${link.label}`}>
                            <Link className={`relative text-4xl lg:text-3xl before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:block hover:before:w-full before:transition-[width] before:duration-[0.30s] before:ease-in-out ${link.location === formattedLocation ? 'text-white before:bg-white' : 'text-acent before:bg-acent'}`} to={link.location}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="mt-auto flex pb-8 justify-center gap-12 md:gap-16">
                    <li className="aspect-square h-8 md:h-10 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="https://github.com/Ama4538" target='_blank'><GithubIcon height={`100%`} width={`100%`} /></a></li>
                    <li className="aspect-square h-8 md:h-10 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="https://www.linkedin.com/in/kevin-ly-6b98ba203/" target='_blank'><LinkedInIcon height={`100%`} width={`100%`} /></a></li>
                    <li className="aspect-square h-8 md:h-10 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="mailto:Voldableprism09@outlook.com" target='_blank'><EmailIcon height={`100%`} width={`100%`} /></a></li>
                </ul>
            </nav>
        </>

    )
}

export default MobileNav