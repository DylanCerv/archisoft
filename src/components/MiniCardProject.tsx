import Image from 'next/image';
import React from 'react'

interface MiniCardProjectProps {
    name: string;
    description: string;
    imageUrl: string;
    width: number;
    height: number;
  }

export default function MiniCardProject({ name, description, imageUrl, width, height }: MiniCardProjectProps) {
  return (
    <div
      className={`relative md:grid md:grid-cols-2 border border-black/5 md:items-start md:shadow-lg md:bg-white md:rounded-3xl md:!w-full max-w-[400px]`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      
      <ProjectDescription
        name={name}
        description={description}
        className="md:hidden"
      />
      <div className='absolute z-[1] rounded-3xl bg-black/[15%] w-full h-full shadow-md md:hidden' />
      <Image
        className={`absolute rounded-3xl w-full h-full object-cover md:relative md:rounded-none md:rounded-l-3xl`}
        src={imageUrl}
        width={width}
        height={height}
        alt={name}
      />
      <ProjectDescription
        name={name}
        description={description}
        className="hidden md:block"
      />
    </div>
  )
}

const ProjectDescription = ({name, description, className=''}: {name: string; description: string; className: string}) => {
  return (
    <div className={`absolute z-10 bottom-3 left-5 text-white md:static md:text-foreground md:flex-1 md:p-6 md:space-y-4 ${className}`}>
      <p className='font-bold'>{name}</p>
      <p>{description}</p>
    </div>
  )
}
