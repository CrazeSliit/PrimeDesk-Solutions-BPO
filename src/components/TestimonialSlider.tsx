import React from 'react';
import { Users, Clock, TrendingUp, Star } from 'lucide-react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-[#FF6600] bg-opacity-10 rounded-full">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">{number}</div>
      <div className="text-[#6c757d] font-medium">{label}</div>
    </div>
  );
};

export const TestimonialSlider = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-[#FFF7F0] via-[#FFF] to-[#F0F4FF]">
      {/* Statistics Section */}
      {/* Our Work Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1A1A1A] mb-4 tracking-tight">
          Our Work
        </h2>
        <p className="text-center text-[#6c757d] max-w-xl mx-auto mb-12">
          Explore our portfolio of successful projects and innovative solutions that have helped businesses grow and thrive.
        </p>
        
        {/* Add your work showcase content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Work items will go here */}
        </div>
      </div>
      {/* Decorative Divider */}
      <div className="w-2/3 mx-auto h-1 rounded-full bg-gradient-to-r from-[#FF6600] via-[#FFD580] to-[#FF6600] opacity-60 mb-8" />
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1A1A1A] mb-4 tracking-tight">
      
      </h2>
      <p className="text-center text-[#6c757d] max-w-xl mx-auto mb-8">
      We pride ourselves on delivering exceptional results and building lasting relationships. Here’s what our clients have to say about working with us.
      </p>

    </div>
  );
};