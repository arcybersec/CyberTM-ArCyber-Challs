import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default BasicLayout;
