// Icons
import JavascriptIcon from "../svg/icons/Skills/JavascriptIcon"
import TypescriptIcon from "../svg/icons/Skills/TypescriptIcon";
import JavaIcon from "../svg/icons/Skills/JavaIcon";
import CIcon from "../svg/icons/Skills/CIcon"
import HTMLIcon from "../svg/icons/Skills/HTMLIcon";
import CSSIcon from "../svg/icons/Skills/CSSIcon";
import ReactIcon from "../svg/icons/Skills/ReactIcon";
import NodeIcon from "../svg/icons/Skills/NodeIcon";
import ExpressIcon from "../svg/icons/Skills/ExpressIcon";
import TailwindCSSIcon from "../svg/icons/Skills/TailwindCSSIcon";
import PostgreSQLIcon from "../svg/icons/Skills/PostgreSQLIcon";
import FigmaIcon from "../svg/icons/Skills/FigmaIcon";
import PythonIcon from "../svg/icons/Skills/PythonIcon";
import SharePointIcon from "../svg/icons/Skills/SharePointIcon";

// Interface
interface SkillsProps {
    skill: string;
}

// Map
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Javascript: JavascriptIcon,
    Typescript: TypescriptIcon,
    Java: JavaIcon,
    C: CIcon,
    HTML: HTMLIcon,
    CSS: CSSIcon,
    React: ReactIcon,
    Node: NodeIcon,
    Express: ExpressIcon,
    TailwindCSS: TailwindCSSIcon,
    PostgreSQL: PostgreSQLIcon,
    Figma: FigmaIcon,
    Python: PythonIcon,
    SharePoint: SharePointIcon,
};

const Skill: React.FC<SkillsProps> = ({ skill }) => {
    // Getting icon
    const IconComponent = iconMap[skill.replace(" ", "")];

    return (
        <div className="flex flex-col items-center w-full md:w-24 lg:w-28 xl:w-24 2xl:w-28 gap-2 text-xs md:text-base">
            <div className="aspect-square h-20">
                {IconComponent ? <IconComponent height='100%' width='100%' /> : <></>}
            </div>
            <span className="font-body">{skill}</span>
        </div>
    )
}

export default Skill