import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-col justify-center items-center content-center flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;