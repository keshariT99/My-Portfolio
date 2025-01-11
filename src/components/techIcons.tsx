
export const getIconForTech = (tech: string): React.ReactNode => {
    const icons: { [key: string]: React.ReactNode } = {
      'TypeScript': <span className="text-blue-500 font-mono">TS</span>,
      'JavaScript': <span className="text-yellow-400 font-mono">JS</span>,
      'Tailwind': <span className="text-cyan-400">〜</span>,
      'Next.js': <span className="text-white font-mono">N</span>,
      'Prismic': <span className="text-pink-500">⬡</span>,
      // Add more tech icons as needed
    };
  
    return icons[tech] || <span className="text-gray-400">•</span>;
  };