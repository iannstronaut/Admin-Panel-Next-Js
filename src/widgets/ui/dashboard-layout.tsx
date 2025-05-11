"use client";

import Sidebar from "@/widgets/ui/sidebar";
import Topbar from "@/widgets/ui/topbar";
import { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar showSubmenu={showSubmenu} />
      <div className="flex-1 flex flex-col">
        <Topbar onToggleSubmenu={() => setShowSubmenu(!showSubmenu)} />
        <main className="p-4 bg-gray-100 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
