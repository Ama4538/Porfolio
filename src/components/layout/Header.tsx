// Components
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="flex flex-col text-white">
            <div className="flex flex-col py-10 gap-2 justify-center items-center select-none">
                <h1 className="font-title font-semibold text-9xl uppercase">Kevin Ly</h1>
                <h2 className="font-body text-2xl">Software Engineering Intern</h2>
            </div>
            <Nav />
        </header>
    )
}

export default Header