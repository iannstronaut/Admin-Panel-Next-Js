import { FC, useState } from "react";
import { menu } from "./menu";
import Link from "next/link";

interface SidebarProps {
  showSubmenu: boolean;
}

const Sidebar: FC<SidebarProps> = ({ showSubmenu }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const active = menu.find((item) => item.key === activeMenu);

  const onSubMenuClick = (key: string) => {
    const menuKey = key.split(".")[0];
    setActiveSubMenu(key);
    setActiveMenu(menuKey);
  };

  return (
    <div className="flex bg-white text-neutral-800 transition-all duration-300 drop-shadow-sm overflow-hidden">
      {/* Sidebar Utama */}
      <div className="flex flex-col items-center p-3 gap-3">
        <i className="ri-centos-line ri-2x text-blue-500 border-b pb-1"></i>
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveMenu(item.key)}
            className={`flex flex-col items-center gap-1 rounded-lg p-2 w-14 transition-all duration-200 ${
              activeMenu === item.key
                ? "bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md"
                : "text-neutral-400 hover:bg-blue-100 hover:text-blue-600"
            }`}
          >
            <i className={`${item.icon} ri-lg`}></i>
            <span
              className={`text-[11px] ${
                activeMenu === item.key ? "font-semibold" : ""
              }`}
            >
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Submenu */}
      <div
        className={`transition-all duration-300 ${
          showSubmenu ? "w-[200px] opacity-100" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-neutral-50 p-4 h-full border-l border-neutral-200">
          <h2 className="text-base font-semibold text-neutral-700 mb-3">
            {active?.title}
          </h2>
          <ul className="flex flex-col gap-2">
            {active?.submenus.map((submenu) => (
              <li key={submenu.key}>
                <Link
                  href={submenu.route}
                  onClick={() => onSubMenuClick(submenu.key)}
                  className={`flex items-center gap-2 text-xs rounded px-2 py-2 transition-all duration-200 ${
                    activeSubMenu === submenu.key
                      ? "text-blue-600 font-semibold bg-blue-50"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-blue-500"
                  }`}
                >
                  <i className="ri-subtract-line"></i>
                  {submenu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
