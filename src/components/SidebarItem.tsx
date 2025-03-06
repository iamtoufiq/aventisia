import { JSX } from "react";

// Define the type for a menu item
interface MenuItem {
  icon?: JSX.Element;
  label: string;
  route: string;
  children?: MenuItem[];
}

// Define the props interface
interface SidebarItemProps {
  item: MenuItem;
  pageName: string;
  setPageName: (name: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, pageName, setPageName }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setPageName(item.label.toLowerCase());
  };

  const isActive = pageName === item.label.toLowerCase();

  return (
    <li>
      <button
        onClick={handleClick}
        className={`${isActive ? "bg-[#1c184b] text-[#ACABBA] cursor-default" : "cursor-pointer"}
          group relative flex w-full items-center gap-4.5 rounded-sm px-4 py-3
          font-medium text-bodydark1 duration-300 ease-in-out hover:opacity-85`}
      >
        {item.icon}
        <span className="text-[#676767] text-[14.1px] leading-[100%] tracking-normal">{item.label}</span>

      </button>
    </li>
  );
};

export default SidebarItem;
