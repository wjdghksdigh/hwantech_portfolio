import Image from 'next/image';

// Type
import { ProjectType } from '@/type/project';

// handler
import { handleGithubLinkClick, handleYoutubeLinkClick, handleAddressLinkClick } from '@/utils/handler';

// icons
import { CiLink } from "react-icons/ci";

interface ProjectModalProps {
  data: ProjectType;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md max-h-full overflow-y-auto">
        <Image
          alt="content"
          className="object-cover object-center h-full w-full"
          src={data.imageUrl}
          width={400} 
          height={200} 
        />
        <h1 className="text-gray-900 text-2xl font-bold mb-1 mt-8">{data.title}</h1>
        {data.hashtags && data.hashtags.length > 0 && (
          <div className="flex flex-wrap ">
            {data.hashtags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-4"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-900 mb-4">{data.description}</p>
        <p className="text-gray-400 mb-2">{data.date}</p>
        <button
          className="text-gray-400 text-xs flex items-center justify-center gap-2 hover:text-blue-400"
          onClick={() => handleGithubLinkClick(data.githubUrl)}
        >
          <CiLink />
          GitHub
        </button>
       <button
         className="text-gray-400 text-xs flex items-center justify-center gap-2 hover:text-blue-400"
         onClick={() => handleYoutubeLinkClick(data.youtubeUrl)}
        >
          <CiLink />
          Youtube
        </button>
        <button
          className="text-gray-400 text-xs flex items-center justify-center gap-2 hover:text-blue-400"
          onClick={() => handleAddressLinkClick(data.address)}
        >
          <CiLink />
          Release Address
        </button>
        <button
          className="text-gray-900 flex items-center justify-center px-4 py-2 mt-4 mx-auto"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
