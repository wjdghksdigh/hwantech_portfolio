
//Type
import { SkillBarProps } from '@/type/about';

const SkillsGraph: React.FC<SkillBarProps> = ({ data }) => {
  const percentageStyle = {
    width: `${data.percentage}%`,
  };

  return (
    // <div className=" w-720 p-4 border border-solid border-sky-blue">
      <div className="container w-600 mb-2 bg-white">
          <div className="p-2 text-xs md:text-sm bg-sky-blue text-white" style={percentageStyle}>
            <h1 className="text-white sm:text-xs">{data.label}</h1>
        </div>
      </div>
    // </div>
  );
};

export default SkillsGraph;