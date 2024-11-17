import React from "react";
import SidebarItem from "./SidebarItem";
import { useDispatch } from "react-redux";

const Sidebar = ({
  username,
  menus,
  selectedMenu,
  setSelectedMenu,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div
      className={`h-full ${
        isSidebarOpen ? "fixed top-0 left-0" : ""
      } z-20 w-40 md:w-20 lg:w-40 bg-white flex flex-col justify-between`}
    >
      <div>
        <div className="mb-10">{username}</div>
        <div className="flex flex-col space-y-4">
          {menus.map((menu) => (
            <SidebarItem
              key={menu.id}
              menu={menu}
              selectedMenu={selectedMenu}
              setSelectedMenu={(id) => {
                setSelectedMenu(id);
                setIsSidebarOpen(false); // Close sidebar after selection
              }}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 relative flex items-center cursor-pointer" onClick={handleLogout}>
        <img
          className="size-6  ml-4"
          src="/assets/icons/logout.svg"
          alt="logout"
        />
        <span className="ml-1 text-[12px] lg:text-[16px] font-semibold ">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
