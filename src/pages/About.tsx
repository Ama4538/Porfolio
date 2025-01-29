// Components
import Skill from "../components/utilities/Skill"
import Button from "../components/utilities/Button"

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// Data
import data from "../data/AboutData.json"

const About = () => {
    return (
        <>
            <Header />
            <main className="px-36 font-body text-white text-lg">
                <section className="flex gap-16">
                    <div className="w-[40%] flex">
                        <div className="h-full w-full bg-[url('/picture_of_myself.jpg')] bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    <article className="flex flex-col gap-6 flex-1">
                        <h3 className="font-subtitle text-3xl">About Me</h3>
                        <p>{data.about}</p>
                        <h3 className="font-subtitle text-3xl">Experience</h3>
                        <ul className="flex flex-col gap-4">
                            {(data.experience).map((exp, index) => (
                                <li key={`Experience_${index}`} className="grid grid-cols-3">
                                    <span>{exp.title} </span>
                                    <em className="text-center border-x-1">{exp.company}</em>
                                    <span className="text-end">{exp.startData} - {exp.endData}</span>
                                </li>
                            ))}
                        </ul>
                        <h3 className="font-subtitle text-3xl">Education</h3>
                        <div className="grid grid-cols-2 gap-0.5">
                            <span>{data.education.school}</span>
                            <span className="text-end">{data.education.startDate} - {data.education.endData}</span>
                            <span>{data.education.degree}</span>
                        </div>
                    </article>
                </section>
                <section className="flex flex-col mt-12 gap-6">
                    <h3 className="font-subtitle text-3xl">Skills</h3>
                    <div className="flex flex-wrap gap-6">
                        {data.skills.map(skill => (
                            <Skill key={`${skill}_box`} skill={skill} />
                        ))}
                    </div>
                </section>
                <div className="flex justify-center mt-8">
                    <Button label="Resume" />
                </div>

            </main>
            <Footer />
        </>
    )
}

export default About