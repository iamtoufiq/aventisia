import CalendarIcon from "../icons/CalendarIcon";
import FilterIcon from "../icons/FilterIcon";
import Search from "./Search";

const Filter = () => {
  return (
    <div className="flex justify-between gap-[10px] items-center text-[#99999B]">
      <Search className="w-full flex-1 " placeholder="Search by Name, ID" />
      <div
        id="_filter"
        className="bg-placeholder flex items-center border-[#FEFEFE] border py-3 rounded-md px-4 gap-2 cursor-pointer"
      >
       <FilterIcon/>
        <span>Filters</span>
      </div>
      <div
        id="_date-picker"
        className="bg-placeholder flex items-center border-[#FEFEFE] border py-3 rounded-md px-4 gap-2 cursor-pointer"
      >
       <CalendarIcon/>
        <span>April 11-April 2</span>
      </div>
    </div>
  );
};

export default Filter;
