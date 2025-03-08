import SidebarItem from "./SidebarItem";
// import Salesway from "../assets/Salesway.svg"
import useLocalStorage from "../hooks/useLocalStorage";
import ClickOutside from "./ClickOutside";
import Aventisia from "../icons/Aventisia";
import SettingIcon from "../icons/SettingIcon";
import ModelIcon from "../icons/ModelIcon";
import TestIcon from "../icons/TestIcon";
import OriginalSettingIcon from "../icons/OriginalSettingIcon";
import SupportIcon from "../icons/SupportIcon";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuItems=[
  {
    name: "Model Library",
    items: [
      {
        icon: (
         <SettingIcon/>
        ),
        label: "Settings",
        route: "/",
      },

    ]
  },
  {
    name: "Extraction Builder",
    items: [
      {
        icon: (
          <SettingIcon/>
        ),
        label: "Label Data",
        route: "/labeldata",
      }, {
        icon: (
     <ModelIcon/>
        ),
        label: "Model",
        route: "/model",
      }, {
        icon: (
          <TestIcon/>
        ),
        label: "Test",
        route: "/test",
      }
    ]
  }, {
    name: "Help",
    items: [
      {
        icon: (
       <OriginalSettingIcon/>
        ),
        label: "Setting",
        route: "/setting",
      }, {
        icon: (
         <SupportIcon/>
        ),
        label: "Support",
        route: "/support",
      },
    ]
  }
]
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "Settings");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 text-primary bg-white flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 bg-bg-primary ">
          <div  className="flex items-center gap-4">
           <Aventisia />
            <span className="text-[28px] font-semibold  tracking-normal text-[#312E53] leading-[100%]">Aventisia</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className=" px-4 pb-4  lg:px-6 flex flex-col gap-4 pt-5">
            {menuItems.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-[6px]">
                <h3 className="py-2 ml-4 text-sm font-semibold text-[11.6px] leading-[100%] tracking-normal text-[#626262]">
                  {group.name}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
