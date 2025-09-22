import React from 'react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}
export const ServiceCard = ({
  icon,
  title,
  description,
  link
}: ServiceCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group">
      <div className="text-[#1A1A1A] group-hover:text-[#FF6600] transition-colors mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#6c757d] mb-4">{description}</p>
      <Link to={link} className="text-[#FF6600] font-medium hover:underline inline-flex items-center">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </div>;
};