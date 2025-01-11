
import { Users, BarChart3, Headphones, RefreshCw, Laptop, Shield, BookOpen, Users2 } from 'lucide-react';
import { Feature } from '../types/Feature';

type FeatureCardProps = {
  feature: Feature;
};

const iconMap = {
  Users,
  BarChart3,
  Headphones,
  RefreshCw,
  Laptop,
  Shield,
  BookOpen,
  Users2,
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <div className="bg-blue-800/10 rounded-xl p-6 hover:bg-[#0C1A24] transition-colors">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-[#112533]">
          <IconComponent className="w-6 h-6 text-[#4ADFFF]" />
        </div>
        <h3 className="text-[#4ADFFF] text-lg font-medium">{feature.title}</h3>
      </div>
    </div>
  );
}