// Icons
import JavascriptIcon from "../icons/Skills/JavascriptIcon"
import TypescriptIcon from "../icons/Skills/TypescriptIcon";
import JavaIcon from "../icons/Skills/JavaIcon";
import CIcon from "../icons/Skills/CIcon"
import HTMLIcon from "../icons/Skills/HTMLIcon";
import CSSIcon from "../icons/Skills/CSSIcon";
import ReactIcon from "../icons/Skills/ReactIcon";
import NodeIcon from "../icons/Skills/NodeIcon";
import ExpressIcon from "../icons/Skills/ExpressIcon";
import TailwindCSSIcon from "../icons/Skills/TailwindCSSIcon";
import PostgreSQLIcon from "../icons/Skills/PostgreSQLIcon";
import SQLIcon from "../icons/Skills/SQLIcon";

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
    SQL: SQLIcon,
};

const Skill: React.FC<SkillsProps> = ({ skill }) => {
    const IconComponent = iconMap[skill.replace(" ", "")];

    return (
        <div className="flex flex-col items-center w-28 gap-2">
            <div className="aspect-square h-20">
                {IconComponent ? <IconComponent height='100%' width='100%' /> : <></>}
            </div>
            <span className="font-body">{skill}</span>
        </div>
    )
}

export default Skill