'use client";';
import { FC, useState } from "react";
import Image from "next/image";

interface TopbarProps {
  onToggleSubmenu: () => void;
}

const Topbar: FC<TopbarProps> = ({ onToggleSubmenu }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-neutral-50 flex items-center justify-between relative shadow-sm">
      <div className="flex items-center px-4 py-1 gap-4">
        <button
          onClick={onToggleSubmenu}
          className="text-xl font-bold bg-neutral-100 px-2 py-1 rounded hover:bg-neutral-200 text-neutral-800"
        >
          <i className="ri-menu-2-line"></i>
        </button>
      </div>

      {/* Profile Button */}
      <div className="relative mr-2">
        <div
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="cursor-pointer bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 h-full p-2 pr-4 flex items-center gap-3 transition"
        >
          <Image
            src="/img/profile1.png"
            alt="User Profile Picture"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold text-white leading-tight">
              John Doe
            </span>
            <span className="text-xs text-white">Admin</span>
          </div>
          <i className="ri-arrow-down-s-line ri-lg text-white ml-auto"></i>
        </div>

        {/* Dropdown */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-neutral-200 shadow-lg rounded-lg z-50 text-sm overflow-hidden animate-fadeIn">
            <ul className="flex flex-col text-neutral-600">
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-neutral-500 mb-2">
                  User Preference
                </p>
                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-100 cursor-pointer transition">
                  <i className="ri-user-fill text-base"></i>
                  <span>Profile</span>
                </li>
                <li className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-100 cursor-pointer transition">
                  <i className="ri-settings-fill text-base"></i>
                  <span>Settings</span>
                </li>
              </div>
              <div className="border-t border-neutral-200"></div>
              <li className="flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 cursor-pointer transition">
                <i className="ri-logout-circle-r-line text-base"></i>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
