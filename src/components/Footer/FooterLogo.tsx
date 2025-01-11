
import { User } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <User className="w-8 h-8 text-[#00E7FF]" />
      <span className="text-xl font-bold">Portfolio</span>
    </div>
  );
};

export default FooterLogo;