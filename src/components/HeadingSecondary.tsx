import { FC } from "react";

interface HeadingSecondaryProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
}

const HeadingSecondary: FC<HeadingSecondaryProps> = ({ text, className = "", ...props }) => {
  return (
    <h4
      className={`font-semibold text-lg hidden md:block leading-[20.94px] text-[#4C4E55] ${className}`}
      {...props}
    >
      {text}
    </h4>
  );
};

export default HeadingSecondary;
