
// Components
import SkillsGraph from "./skillsGraph";

// Data
import { SkillBars } from "@/data/about";


const SkillsTab = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen lg:px-[200px]">
      <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0">
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">Skills</h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-8 bg-sky-lightBlue rounded-lg">
          {SkillBars.map((skill, index) => (
            <SkillsGraph key={index} data={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTab;