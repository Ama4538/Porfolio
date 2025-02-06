// Interface
interface ButtonProp {
    label: string;
    action?: CallableFunction;
    large?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProp> = ({ label, action, large = true, className }) => {
    return (
        <button
            className={`bg-white font-subtitle text-black rounded-md cursor-pointer duration-[0.30s] transition-all ease-in-out hover:translate-y-[-5%] hover:bg-acent hover:text-white ${large ? 'text-xl md:text-2xl xl:text-xl 2xl:text-2xl w-full md:w-max py-2 xl:py-1.5 2xl:py-2 px-24 xl:px-32' : ''} ${className ? className : ''}`}
            onClick={() =>{action?.()}}
        >{label}</button>
    )
}

export default Button