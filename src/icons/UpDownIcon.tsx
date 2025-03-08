const UpDownIcon = () => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="13" fill="url(#pattern0_1_119)" />
      <defs>
        <pattern
          id="pattern0_1_119"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_119"
            transform="matrix(0.0222222 0 0 0.0205128 0 -0.0025641)"
          />
        </pattern>
        <image
          id="image0_1_119"
          width="45"
          height="49"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default UpDownIcon;
