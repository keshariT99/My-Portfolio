

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  
}

const CourseCard = ({ title, description, image }: CourseCardProps) => {
  return (
    <div className="bg-blue-800/10 border border-cyan-800 rounded-lg overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="border border-cyan-800 mb-3"></div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
      </div>
    </div>
  );
};

export default CourseCard;
