import SearchIcon from "../icons/Search"

interface classNameProps {
  className?: string;
  inputClass?: string;
  placeholder?: string;
}
const Search: React.FC<classNameProps> = ({
  className = "",
  inputClass = "",
  placeholder,
}) => {
  return (
    <div id="_search" className={`${className} relative`}>
    <SearchIcon/>
      <input
        type="text"
        placeholder={placeholder || "Search"}
        className={`${inputClass} w-full rounded-sm bg-placeholder py-3 pl-12 pr-4 outline-0 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-500 placeholder:text-[#D2D6E2]`}
      />
    </div>
  );
};

export default Search;
