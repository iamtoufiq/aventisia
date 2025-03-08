import { FC } from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "../icons/SearchIcon";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Optional since you provide a default value
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div   className={twMerge(
      "relative",
      className
    )}>
      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <SearchIcon />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search"}
        className="w-full rounded-sm focus:text-gray-700 bg-[#F2F2FB] py-3 pl-12 pr-4 outline-0 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-500 placeholder:text-[#D2D6E2]"
        {...props}
      />
    </div>
  );
};

export default SearchInput;