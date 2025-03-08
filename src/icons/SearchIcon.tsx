const SearchIcon = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="18" height="19" fill="url(#pattern0_1_184)" />
      <defs>
        <pattern
          id="pattern0_1_184"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_184"
            transform="matrix(0.0150794 0 0 0.0142857 -0.00515873 0)"
          />
        </pattern>
        <image
          id="image0_1_184"
          width="67"
          height="70"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SearchIcon;
