import Image from 'next/image';
import React from 'react'

interface CardTestimonialProps {
    imageUrl: string;
    name: string;
    position: string;
    testimonial: string;
}

export default function CardTestimonial({ imageUrl, name, position, testimonial }: CardTestimonialProps) {
  return (
    <div className="rounded-3xl bg-background p-6 space-y-4 max-w-[380px] shadow-xl">
      <div className="flex flex-row gap-6 items-center">
        <Image
          className="w-20 h-20 object-cover rounded-full"
          src={imageUrl}
          width={300}
          height={300}
          alt={name}
        />
        <div>
          <h6 className="text-lg md:text-xl font-semibold">{name}</h6>
          <p className="text-xs md:text-sm">{position}</p>
        </div>
      </div>
      <p className="text-sm md:text-base">{testimonial}</p>
    </div>
  )
}
