import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#0f0f0f] p-6 rounded-lg hover:bg-[#0F2433] transition-colors">
      <div className="text-[#4A80DE] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex gap-4">
        <button className="text-gray-400 hover:text-[#39FF14] transition-colors">
          Read More
        </button>
        <button className="text-[#00E7FF] hover:text-[#32E512] transition-colors">
          Get started
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;