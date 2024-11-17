import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const menus = [
  {
    id: "employees",
    title: "Employees",
    icon: "./assets/icons/menu/employees.svg",
    selectedIcon: "./assets/icons/menu/selected-employees.svg",
    content: "employees",
  },
  {
    id: "departments",
    title: "Departments",
    icon: "./assets/icons/menu/departments.svg",
    selectedIcon: "./assets/icons/menu/selected-departments.svg",
    content: "departments",
  },
  {
    id: "shifts",
    title: "Shifts",
    icon: "./assets/icons/menu/shifts.svg",
    selectedIcon: "./assets/icons/menu/selected-shifts.svg",
    content: "shifts",
  },
  {
    id: "users",
    title: "Users",
    icon: "./assets/icons/menu/users.svg",
    selectedIcon: "./assets/icons/menu/selected-users.svg",
    content: "users",
  },
];

const DashboardPage = () => {
  const navigate = useNavigate()
  const sidebarRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(menus[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (!user?.token) {
      navigate('/auth')
    }
  },[user]);

  return (
    <div className="h-screen w-full flex bg-slate-100">
      <img
        className={`size-6 md:hidden absolute top-4 z-30 ${
          isSidebarOpen ? "left-[120px]" : "left-4"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        src={
          isSidebarOpen
            ? "./assets/icons/menu/close.svg"
            : "./assets/icons/menu/hamburger.svg"
        }
        alt="Open Sidebar"
      />
      <div
        ref={sidebarRef}
        className={`h-screen fixed md:static transform md:transform-none transition-transform duration-300 ${
          isSidebarOpen ? "z-20 translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar
          username={user?.name}
          menus={menus}
          selectedMenu={selectedMenu}
          isSidebarOpen={isSidebarOpen}
          setSelectedMenu={setSelectedMenu}
          setIsSidebarOpen={setIsSidebarOpen} // Pass down to close sidebar on selection
        />
      </div>
      <div className="flex-1 flex flex-col space-y-2 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
