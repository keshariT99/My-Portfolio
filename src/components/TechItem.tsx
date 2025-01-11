interface TechItemProps {
    name: string;
    children: React.ReactNode;
  }
  
  export const TechItem = ({ name, children }: TechItemProps) => (
    <div className="bg-[#0B1512] rounded-xl p-3 flex items-center gap-2">
      <div className="text-lg">{children}</div>
      <span className="text-white text-sm">{name}</span>
    </div>
  );