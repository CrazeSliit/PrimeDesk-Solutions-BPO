import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  image: string;
}
export const TestimonialCard = ({
  quote,
  name,
  company,
  image
}: TestimonialCardProps) => {
  return <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="text-[#FF6600] text-4xl font-serif mb-4">"</div>
      <p className="text-[#1A1A1A] text-lg mb-6">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-[#6c757d]">{company}</p>
        </div>
      </div>
    </div>;
};