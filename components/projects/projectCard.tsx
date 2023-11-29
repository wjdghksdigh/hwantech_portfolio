import Image from 'next/image';

// Type
import { ProjectType } from "@/type/project";

interface ProjectCardProps {
  data: ProjectType;
  onClick: () => void;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ data, onClick }) => {
  return (
    <>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 cursor-pointer" onClick={onClick}>
          <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={data.imageUrl}
            width={600} 
            height={400} 
          />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{data.title}</h2>
          <p className="text-base text-gray-900 leading-relaxed mt-2">
            {data.description}
          </p>
          <a className="text-sm inline-flex items-center ">
            {data.date}
          </a>
          <a className="#cbd5e1 inline-flex items-center text-baby-sky mt-2">
            Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
    </>
  );
};

export default ProjectCard;
