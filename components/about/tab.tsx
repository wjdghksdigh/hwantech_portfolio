import React, { useState } from 'react';

interface TabProps {
  selectTab: string;
  onTabClick: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ selectTab, onTabClick }) => {

  const getTabStyle = (tab: string): string => {
    return selectTab === tab
      ? 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-baby-sky text-baby-sky tracking-wider rounded-t'
      : 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider';
  };

  return (
    <div className="flex mx-auto flex-wrap mb-20 cursor-pointer">
      {/* Info */}
      <a className={getTabStyle('Info')} onClick={() => onTabClick('Info')}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Info
      </a>
      {/* Experience */}
      <a className={getTabStyle('Experience')} onClick={() => onTabClick('Experience')}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        Experience
      </a>
      {/* Skills */}
      <a className={getTabStyle('Skills')} onClick={() => onTabClick('Skills')}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        Skills
      </a>
      {/* Hobby */}
      <a className={getTabStyle('Hobby')} onClick={() => onTabClick('Hobby')}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
        Hobby
      </a>
    </div>
  );
};

export default Tab;
