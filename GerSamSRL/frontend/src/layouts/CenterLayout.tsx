import React, { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

const CenterLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
        {children}
    </div>
  );
};

export default CenterLayout;
