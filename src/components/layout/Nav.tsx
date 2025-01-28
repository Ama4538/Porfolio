// Icons
import GithubIcon from "../icons/GithubIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import EmailIcon from "../icons/EmailIcon"

const Nav = () => {
    const navLinks = [{label: 'Projects', location: '/'}, {label: 'About', location: '/'}, {label: 'Contact', location: '/'}]

    return (
        <nav className="flex justify-between w-full px-36 mb-6">
            <ul className="flex gap-10 font-subtitle">
                {navLinks.map((link) => (
                    <li key={`Nav_Link_${link.label}`}>
                        <a className={`relative text-3xl duration-[0.30s] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:block hover:before:w-full before:transition-[width] before:duration-200 before:ease-in-out ${link.label === 'Projects' ? 'text-white before:bg-white' : 'text-acent before:bg-acent'}`} href={link.location}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-10">
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:scale-[107.5%]"><GithubIcon height={`100%`} width={`100%`}/></li>
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:scale-[107.5%]"><LinkedInIcon height={`100%`} width={`100%`}/></li>
                <li className="aspect-square h-8 cursor-pointer duration-[0.30s] hover:scale-[107.5%]"><EmailIcon height={`100%`} width={`100%`}/></li>
            </ul>
        </nav>
    )
}

export default Nav