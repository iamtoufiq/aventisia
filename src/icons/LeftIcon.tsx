interface LeftIconProps {
    isFlip?: boolean;
  };

  const LeftIcon: React.FC<LeftIconProps> = ({ isFlip = false }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ transform: isFlip ? "rotate(180deg)" : "rotate(0deg)" }} // Rotates the icon
    >
      <rect width="28" height="28" fill="url(#pattern0_1_20)" />
      <defs>
        <pattern
          id="pattern0_1_20"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_20" transform="scale(0.00970874)" />
        </pattern>
        <image
          id="image0_1_20"
          width="103"
          height="103"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LeftIcon;
