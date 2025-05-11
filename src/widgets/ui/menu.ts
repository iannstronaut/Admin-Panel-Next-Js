type MenuItem = {
  key: string;
  title: string;
  icon: string;
  submenus: SubMenu[];
};

type SubMenu = {
  key: string;
  title: string;
  route: string;
};

export const menu: MenuItem[] = [
  {
    key: "master",
    title: "Master",
    icon: "ri-archive-stack-fill",
    submenus: [
      {
        key: "master.category",
        title: "Category",
        route: "/dashboard/category",
      },
      {
        key: "master.product",
        title: "Product",
        route: "/dashboard/product",
      },
    ],
  },
  {
    key: "table",
    title: "Table",
    icon: "ri-table-fill",
    submenus: [
      {
        key: "master.category",
        title: "Category",
        route: "/dashboard/category",
      },
      {
        key: "master.user",
        title: "User",
        route: "/dashboard/user",
      },
    ],
  },
  // {
  //   key: "settings",
  //   title: "Settings",
  //   icon: "⚙️",
  //   submenus: [
  //     { title: "Account", route: "" },
  //     { title: "Preferences", route: "" },
  //     { title: "Security", route: "" },
  //   ],
  // },
  // {
  //   key: "profile",
  //   title: "Profile",
  //   icon: "👤",
  //   submenus: [
  //     { title: "My Info", route: "" },
  //     { title: "Photos", route: "" },
  //     { title: "Activity", route: "" },
  //   ],
  // },
];
