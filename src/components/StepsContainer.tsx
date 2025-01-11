import React from 'react'
import CircleNumber from './CircleNumber'

interface StepsContainerProps {
    number: number;
    title: string;
    description: string;
    className?: string;
  }

export default function StepsContainer({number, title, description, className=''}: StepsContainerProps) {

    const formattedNumber = number.toString().padStart(2, '0');

  return (
    <div className={`flex flex-col gap-3 max-w-[520px] ${className}`}>
        <CircleNumber text={formattedNumber} />
        <div className="space-y-3">
            <h4 className="font-bold md:text-2xl">{title}</h4>
            <p className="text-sm md:text-base">{description}</p>
        </div>
    </div>
  )
}
