import React, { ReactNode } from 'react';

interface mainProps {
  children: ReactNode;
  id: string;
  style?: string;
}

const Content: React.FC<mainProps> = ({ children, id }) => {
  return (
    <div id={id}>
      {children}
    </div>
  );
};

export default Content;