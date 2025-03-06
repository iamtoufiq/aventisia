const CalendarIcon = () => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="18" height="20" fill="url(#pattern0_1_126)" />
      <defs>
        <pattern
          id="pattern0_1_126"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_126"
            transform="matrix(0.015625 0 0 0.0140625 0 -0.00625)"
          />
        </pattern>
        <image
          id="image0_1_126"
          width="64"
          height="72"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CalendarIcon;
