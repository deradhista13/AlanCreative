import React, { FC } from "react";
import { Header, Menu } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <Header />
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
