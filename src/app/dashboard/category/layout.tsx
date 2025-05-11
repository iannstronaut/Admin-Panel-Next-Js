import Breadcrumb from "@/widgets/components/breadcrumb";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Category - Master",
  description: "Admin Panel",
};

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb
        title="Category"
        route="Master/Category"
        icon="ri-archive-stack-fill"
      ></Breadcrumb>
      <div className="border-b border-blue-400"></div>
      {children}
    </div>
  );
};

export default Layout;
