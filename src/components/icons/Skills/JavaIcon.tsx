const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ height, width, fill, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            height={height ? height : "50px"}
            width={width ? width : "50px"}
            fill={fill ? fill : "#FBFBFB"}
            className={className ? className : ''}
        >
            <path d="M 28.1875 -0.00390625 C 30.9375 6.359375 18.320313 10.289063 17.152344 15.59375 C 16.074219 20.460938 24.640625 26.121094 24.644531 26.121094 C 23.34375 24.105469 22.402344 22.441406 21.097656 19.304688 C 18.890625 14 34.53125 9.203125 28.1875 -0.00390625 Z M 36.550781 8.8125 C 36.550781 8.8125 25.503906 9.511719 24.941406 16.582031 C 24.691406 19.730469 27.84375 21.410156 27.9375 23.703125 C 28.007813 25.570313 26.050781 27.128906 26.050781 27.128906 C 26.050781 27.128906 29.601563 26.460938 30.714844 23.605469 C 31.945313 20.4375 28.328125 18.273438 28.691406 15.738281 C 29.042969 13.3125 36.550781 8.8125 36.550781 8.8125 Z M 39.230469 25.144531 C 38.074219 25.09375 36.789063 25.476563 35.625 26.3125 C 37.90625 25.824219 39.835938 27.21875 39.835938 28.828125 C 39.835938 32.453125 34.597656 35.878906 34.597656 35.878906 C 34.597656 35.878906 42.707031 34.953125 42.707031 29 C 42.707031 26.539063 41.152344 25.234375 39.230469 25.144531 Z M 19.183594 25.152344 C 19.183594 25.152344 9.0625 25.015625 9.0625 27.878906 C 9.0625 30.871094 22.316406 31.082031 31.78125 29.238281 C 31.78125 29.238281 34.308594 27.507813 34.980469 26.863281 C 28.777344 28.128906 14.621094 28.296875 14.621094 27.203125 C 14.621094 26.191406 19.183594 25.152344 19.183594 25.152344 Z M 16.738281 30.722656 C 15.1875 30.722656 12.871094 31.921875 12.871094 33.078125 C 12.871094 35.402344 24.5625 37.195313 33.21875 33.796875 L 30.222656 31.960938 C 24.355469 33.839844 13.539063 33.238281 16.738281 30.722656 Z M 18.179688 35.921875 C 16.050781 35.921875 14.671875 37.234375 14.671875 38.203125 C 14.671875 41.1875 27.378906 41.488281 32.414063 38.453125 L 29.214844 36.417969 C 25.453125 38.007813 16.007813 38.222656 18.179688 35.921875 Z M 11.089844 38.625 C 7.621094 38.554688 5.367188 40.113281 5.367188 41.40625 C 5.363281 48.28125 40.890625 47.949219 40.890625 40.921875 C 40.890625 39.757813 39.515625 39.203125 39.019531 38.9375 C 41.921875 45.65625 9.96875 45.136719 9.96875 41.171875 C 9.96875 40.269531 12.3125 39.382813 14.492188 39.808594 L 12.644531 38.757813 C 12.101563 38.675781 11.582031 38.632813 11.089844 38.625 Z M 44.636719 43.25 C 39.234375 48.367188 25.546875 50.234375 11.78125 47.074219 C 25.542969 52.703125 44.566406 49.535156 44.636719 43.25 Z"/>
        </svg>
    )
}

export default JavaIcon