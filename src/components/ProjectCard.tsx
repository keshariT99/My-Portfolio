import { TechStack } from './TechStack';
import { Link as LucideLink } from 'lucide-react';
import { Link as RouterLink } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string[];
  demo: string[];
  caseStudy?: string;
}

const ProjectCard = ({ title, description, image, stack, link, demo, caseStudy }: ProjectCardProps) => {
  return (
    <div className="bg-blue-800/10 border border-cyan-800 rounded-lg overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        {caseStudy && (
          <RouterLink
            to={caseStudy}
            className="inline-block mt-3 mb-4 text-cyan-400 hover:underline text-sm"
          >
            Read More →
          </RouterLink>
        )}

        <div className="border border-cyan-800 mb-3"></div>

        <div className="mb-6">
          <TechStack technologies={stack} />
        </div>

        {/* Spacer ensures consistent alignment */}
        <div className="flex-1"></div>

        <div className="flex justify-between items-center">
          <a href={demo[0]}>
            <button className="bg-[#4ADFFF] text-black px-6 py-2 m-3 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors">
              Demo
            </button>
          </a>
          <a href={link[0]}>
            <button className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
              <LucideLink size={24} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
