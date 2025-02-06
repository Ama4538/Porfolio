// components
import AnimateProjectCard from "../components/utilities/AnimateProjectCard"

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// Data
import { projects } from "../data/ProjectData.json"

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="grid gap-3 mb-4 lg:mb-6 md:px-12 lg:grid-cols-2 lg:px-16 2xl:px-36 lg:gap-2">
                {projects.map((project) => (
                    <AnimateProjectCard
                        key={`Home_${project.name}_Card`}
                        id={project.id}
                        name={project.name}
                        coverLocation={project.coverImageLocation}
                        imagesLocation={project.additionalImageLocation}
                    />
                ))}
                
            </main>
            <Footer />
        </div>
    )
}

export default Home