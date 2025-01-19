import { NavLink } from "react-router-dom";
import {
  RiDashboardLine,
  RiAccountCircleLine,
  RiFileListLine,
  RiSettings4Line,
  RiMoneyDollarCircleLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    icon: <RiDashboardLine className="mr-3" />,
    path: "/portal",
  },
  {
    name: "Accounts",
    icon: <RiAccountCircleLine className="mr-3" />,
    path: "accounts",
  },
  {
    name: "Report",
    icon: <RiFileListLine className="mr-3" />,
    path: "report",
  },
  {
    name: "Settings",
    icon: <RiSettings4Line className="mr-3" />,
    path: "settings",
  },
  {
    name: "Budget",
    icon: <RiMoneyDollarCircleLine className="mr-3" />,
    path: "budget",
  },
];

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 px-2 bg-white border-r transition-transform duration-300 transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-xl tracking-widest font-mono text-green-500 font-medium text-center py-4">
          <span className="text-green-500">Le</span>
          Wallet
        </h1>

        <nav className="space-y-4">
          {menuItems.map(({ name, icon, path }) => (
            <NavLink
              end
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-700 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white"
                }`
              }
            >
              {icon}
              {name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
