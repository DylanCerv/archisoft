import React from 'react'

interface SectionHeaderProps {
    subtitle?: string;
    title: string;
    className?: string;
  }

export default function SectionHeader({title, subtitle, className=''}:SectionHeaderProps) {
  return (
    <div className={`${className}`}>
        {subtitle &&
            <h3 className="md:text-2xl text-blue-500">{subtitle}</h3>
        }
        <h2 className="font-bold text-2xl md:text-4xl">{title}</h2>
    </div>
  )
}
