import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Icons
import GithubIcon from "../icons/GithubIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import EmailIcon from "../icons/EmailIcon"

const Nav = () => {
    const navLinks = [{label: 'Projects', location: '/'}, {label: 'About', location: '/about'}, {label: 'Contact', location: '/contact'}]
    const location = useLocation();
    
    return (
        <nav className="flex justify-between w-full px-36 mb-7">
            <ul className="flex gap-10 font-subtitle">
                {navLinks.map((link) => (
                    <li key={`Nav_Link_${link.label}`}>
                        <Link className={`relative text-3xl before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:block hover:before:w-full before:transition-[width] before:duration-[0.30s] before:ease-in-out ${link.location === location.pathname ? 'text-white before:bg-white' : 'text-acent before:bg-acent'}`} to={link.location}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-10">
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><GithubIcon height={`100%`} width={`100%`}/></li>
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><LinkedInIcon height={`100%`} width={`100%`}/></li>
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:translate-y-[-5%] ease-in-out"><EmailIcon height={`100%`} width={`100%`}/></li>
            </ul>
        </nav>
    )
}

export default Nav