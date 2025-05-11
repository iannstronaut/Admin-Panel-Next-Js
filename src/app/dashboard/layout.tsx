"use client";

import DashboardLayout from "@/widgets/ui/dashboard-layout";
import Sidebar from "@/widgets/ui/sidebar";
import Topbar from "@/widgets/ui/topbar";
import { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(true);

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
