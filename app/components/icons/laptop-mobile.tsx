const LaptopMobileIcon = ({
    color,
    width = '24',
    height = '24',
}: {
    color: string;
    width?: string;
    height?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={color}
    >
        <path d="M2,15c0,.55,.45,1,1,1H11c.55,0,1,.45,1,1s-.45,1-1,1H3c-1.65,0-3-1.35-3-3,0-1.3,.84-2.4,2-2.82V5C2,2.24,4.24,0,7,0h10c2.76,0,5,2.24,5,5v1c0,.55-.45,1-1,1s-1-.45-1-1v-1c0-1.65-1.35-3-3-3H7c-1.65,0-3,1.35-3,3v7h4.5c.27,0,.52,.11,.71,.29l.71,.71h1.09c.55,0,1,.45,1,1s-.45,1-1,1h-1.5c-.27,0-.52-.11-.71-.29l-.71-.71H3c-.55,0-1,.45-1,1Zm22-2v7c0,2.21-1.79,4-4,4h-2c-2.21,0-4-1.79-4-4v-7c0-2.21,1.79-4,4-4h2c2.21,0,4,1.79,4,4Zm-2,0c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v7c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-7Z" />
    </svg>
);
export default LaptopMobileIcon;
