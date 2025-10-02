import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="max-w-5xl mx-auto p-4">{children}</div>;
};

export default Layout;
