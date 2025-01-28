// Interface
interface OverlayProps {
    opacity?: number;
    extra?: string;
}

const Overlay: React.FC<OverlayProps> = ({ opacity = 20, extra }) => {
    return (
        <div
            className={`z-10 absolute w-full h-full bg-black ${extra ? extra : ''}`}
            style={{ opacity: opacity / 100 }}
        />
    )
}

export default Overlay;