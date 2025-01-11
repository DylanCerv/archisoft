import React from 'react'


interface CircleGradientProps {
    colorTop?: string;
    colorBottom?: string;
    className?: string;
    size?: string;
}

export default function CircleGradient({ colorTop='#fff', colorBottom='#000', size='20px', className }: CircleGradientProps) {
    return (
        <div
            className={`absolute rounded-full ${className}`}
            style={{
                width: `${size}`,
                height: `${size}`,
                background: `linear-gradient(to bottom, ${colorTop}, ${colorBottom})`,
            }}
        />
    );
}
