// Imports
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Icons
import GithubIcon from "../svg/icons/GithubIcon"
import LinkedInIcon from "../svg/icons/LinkedInIcon"
import EmailIcon from "../svg/icons/EmailIcon"

// Interface
interface NavProps {
    extra?: string;
}

const Nav: React.FC<NavProps> = ({ extra }) => {
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
        <nav className={`flex justify-between w-full px-16 2xl:px-36 mb-6 ${extra ? extra : ''}`}>
            <ul className="flex gap-10 font-subtitle">
                {navLinks.map((link) => (
                    <li key={`Nav_Link_${link.label}`}>
                        <Link className={`relative text-2xl 2xl:text-3xl before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:block hover:before:w-full before:transition-[width] before:duration-[0.30s] before:ease-in-out ${link.location === formattedLocation ? 'text-white before:bg-white' : 'text-acent before:bg-acent'}`} to={link.location}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-10">
                <li className="aspect-square h-7 2xl:h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="https://github.com/Ama4538" target='_blank'><GithubIcon height={`100%`} width={`100%`} /></a></li>
                <li className="aspect-square h-7 2xl:h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="https://www.linkedin.com/in/kevin-ly-6b98ba203/" target='_blank'><LinkedInIcon height={`100%`} width={`100%`} /></a></li>
                <li className="aspect-square h-7 2xl:h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><a href="mailto:Voldableprism09@outlook.com" target='_blank'><EmailIcon height={`100%`} width={`100%`} /></a></li>
            </ul>
        </nav>
    )
}

export default Nav