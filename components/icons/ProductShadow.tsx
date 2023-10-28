export const ProductShadow = () => {
  return (
    <svg
    class="absolute w-[10rem] md:w-auto top-[calc(100%-3rem)] left-1/2 transform -translate-x-1/2"
      width="209"
      height="106"
      viewBox="0 0 209 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_0_8409)">
        <ellipse cx="104.5" cy="53" rx="61" ry="9" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_f_0_8409"
          x="0.00749207"
          y="0.507492"
          width="208.985"
          height="104.985"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="21.7463"
            result="effect1_foregroundBlur_0_8409"
          />
        </filter>
      </defs>
    </svg>
  );
};
