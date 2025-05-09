const HTMLIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ height, width, fill, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            height={height ? height : "50px"}
            width={width ? width : "50px"}
            fill={fill ? fill : "#FBFBFB"}
            className={className ? className : ''}
        >
            <path d="M9,7l3,34l14,4l14-4c1-11.33,2-22.67,3-34H9z M33.76,35l-7.77,2l-7.76-2l-0.39-5h3.86l0.18,2L26,32.62L30.17,32l0.41-5	H17.59l0.96-12H34l0.7,6H31l-0.23-2h-8.36l-0.32,4h12.66L33.76,35z" />
        </svg>
    )
}

export default HTMLIcon