import Link from 'next/link'
import React from 'react'


interface ButtonCallToActionProps {
    className?: string;
    text: string;
    href: string;
}


export default function ButtonCallToAction({className='', text, href=''}: ButtonCallToActionProps) {
  return (
    <Link href={href} scroll={true} >
      <p className={`bg-foreground text-background text-sm px-6 py-4 rounded-full w-fit ${className}`}>
        {text}
      </p>
    </Link>
  )
}
