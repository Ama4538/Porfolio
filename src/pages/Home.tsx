// components
import ProjectCard from "../components/utilities/ProjectCard"

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const Home = () => {
    const locations = ['cart.png', 'edit.png', 'product.png','recommendation.png', 'search.png', 'wishlist.png']

    return (
        <>
            <Header />
            <main className="px-36 grid grid-cols-2 grid-rows-3 gap-2">
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
                    <ProjectCard name="Petal Vogue" coverLocation="main.jpg" imagesLocation={locations} />
            </main>
            <Footer />
        </>
    )
}

export default Home