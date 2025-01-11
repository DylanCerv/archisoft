import React from 'react'


interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionContainer({children, className='', id=''}: SectionContainerProps) {
  return (
    <section className={`px-6 py-14 md:py-24 space-y-8 max-w-[1240px] mx-auto ${className}`} id={id}>
      {children}
    </section>
  )
}
