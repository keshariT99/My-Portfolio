import { TechItem } from './TechItem';
import { getIconForTech } from './techIcons'

interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => (
  <div className="space-y-4">
    <div className="bg-[#0B1512] rounded-xl p-4">
      <span className="text-gray-400 text-sm">Stack</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {technologies.map((tech, index) => (
        <TechItem key={index} name={tech}>
          {getIconForTech(tech)}
        </TechItem>
      ))}
    </div>
  </div>
);