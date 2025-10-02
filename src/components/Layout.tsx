import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">{children}</div>
    </div>
  );
};

export default Layout;
