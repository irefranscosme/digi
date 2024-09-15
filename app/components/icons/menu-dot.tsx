import Box from 'next-auth/providers/box';
import * as React from 'react';
const MenuDotIcon = ({
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
        id="Isolation_Mode"
        data-name="Isolation Mode"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={color}
    >
        <circle cx="21.517" cy="12.066" r="2.5" />
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="2.5" cy="12" r="2.5" />
    </svg>
);
export default MenuDotIcon;
