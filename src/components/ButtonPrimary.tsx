import { FC, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  onClick,
  children,
  className = "",
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    onClick(event);
  };

  return (
    <button
      className={twMerge(
        "flex gap-[10px] bg-secondary border-[#554DCF] px-3 py-2 text-[#B8B4E2] rounded-md cursor-pointer items-center",
        !onClick && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
