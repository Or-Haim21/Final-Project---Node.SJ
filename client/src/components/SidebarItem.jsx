import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ menu, selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate();
  const isSelected = selectedMenu === menu.id;

  const handleClick = () => {
    setSelectedMenu(menu.id);
    navigate(`/${menu.content}`); // Navigate to the page based on `menu.content`
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full bg-transparent flex flex-row md:flex-col lg:flex-row border-r-4 px-2 py-1 gap-2 items-center cursor-pointer hover:
          ${
            isSelected
              ? "bg-slate-50 text-primary border-primary"
              : "border-transparent"
          }`}
    >
      <img
        className="size-6"
        src={isSelected ? menu.selectedIcon : menu.icon}
        alt={menu.title}
      />
      <span className="text-[12px] lg:text-[16px] font-semibold ">
        {menu.title}
      </span>
    </div>
  );
};

export default SidebarItem;
