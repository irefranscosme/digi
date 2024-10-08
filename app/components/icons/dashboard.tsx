const DashboardIcon = ({
    color,
    width = '24',
    height = '24',
}: {
    color: string;
    width?: string;
    height?: string;
}) => (
    <svg
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        fill={color}
    >
        <path d="m12 1a11.995 11.995 0 0 0 -6.888 21.818l.259.182h13.258l.259-.182a11.995 11.995 0 0 0 -6.888-21.818zm5.988 20h-11.976a10 10 0 1 1 11.976 0zm2.012-8a7.939 7.939 0 0 1 -2.406 5.715l-1.4-1.43a5.945 5.945 0 0 0 1.595-5.833l1.575-1.575a7.968 7.968 0 0 1 .636 3.123zm-14 0a5.951 5.951 0 0 0 1.8 4.285l-1.4 1.43a8 8 0 0 1 8.717-13.08l-1.569 1.575a5.977 5.977 0 0 0 -7.548 5.79zm7.926-.512a2.033 2.033 0 1 1 -1.414-1.414l4.281-4.281 1.414 1.414z" />
    </svg>
);
export default DashboardIcon;
