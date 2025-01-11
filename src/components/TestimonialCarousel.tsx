import React from 'react'
import CardTestimonial from './CardTestimonial';
import { DATA } from '@/data/data';

export default function TestimonialCarousel() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            {/* Sin carrusel en pantallas medianas y mayores */}
            <div className="hidden lg:grid grid-cols-3 gap-10">
                {DATA.testimonialSection.testimonials.map((testimonial, index) => (
                    <CardTestimonial
                        key={index}
                        imageUrl={testimonial.imageUrl}
                        name={testimonial.name}
                        position={testimonial.position}
                        testimonial={testimonial.text}
                    />
                ))}
            </div>
        </div>
    )
}
