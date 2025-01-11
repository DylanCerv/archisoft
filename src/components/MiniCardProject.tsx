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
    <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="absolute z-10 bottom-3 left-5 text-white">
        <p className='font-bold'>{name}</p>
        <p>{description}</p>
      </div>
      <div className='absolute z-[1] rounded-3xl bg-black/[15%] w-full h-full shadow-md' />
      <Image
        className={`absolute rounded-3xl w-full h-full object-cover `}
        src={imageUrl}
        width={width}
        height={height}
        alt={name}
      />
    </div>
  )
}
