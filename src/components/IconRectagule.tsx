import React from 'react'

interface IconRectaguleProps {
    color?: string;
    scale?: number;
    className?: string;
}
export default function IconRectagule({color='#E2E2E2', scale=1, className=''}: IconRectaguleProps) {
  return (
    <svg className={className} width={100 * scale} height={72 * scale} viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="3.42578" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="3.42578" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="40.8164" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="40.8164" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="78.2051" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="78.2051" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="3.42578" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="3.42578" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="40.8164" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="40.8164" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="78.2051" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="78.2051" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="22.1211" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="22.1211" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="59.5117" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="59.5117" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="96.9004" cy="2.92889" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="96.9004" cy="46.7133" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="22.1211" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="22.1211" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="59.5117" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="59.5117" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="96.9004" cy="24.821" rx="2.5" ry="2.62469" fill={color}/>
        <ellipse cx="96.9004" cy="68.6052" rx="2.5" ry="2.62469" fill={color}/>
    </svg>
  )
}
