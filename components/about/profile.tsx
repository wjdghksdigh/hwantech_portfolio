import React, { useState } from 'react';

// Component
import Tab from "./tab";
import InfoTab from "./infoTab";
import ExperienceTab from "./experienceTab";
import SkillsTab from "./skillsTab";
import HobbyTab from "./hobbyTab";

const Profile = () => {
  const [selectTab, setSelectTab] = useState<string>('Info');

  const handleTabClick = (tab: string): void => {
    setSelectTab(tab);
  };

  const renderTabContent = () => {
    switch (selectTab) {
      case 'Experience':
        return <ExperienceTab />;
      case 'Skills':
        return <SkillsTab />;
      case 'Hobby':
        return <HobbyTab />;
      // Default case for 'Info' tab
      default:
        return <InfoTab />;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-36 mx-auto flex flex-wrap flex-col ">
        <Tab selectTab={selectTab} onTabClick={handleTabClick} />
        {renderTabContent()}
      </div>
    </section>
  );
};

export default Profile;
