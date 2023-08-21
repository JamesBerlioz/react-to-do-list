function Checkbox({ completed }: { completed: boolean }) {
  return completed ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M1 21V5C1 2.79086 2.79086 1 5 1H21C23.2091 1 25 2.79086 25 5V21C25 23.2091 23.2091 25 21 25H5C2.79086 25 1 23.2091 1 21Z"
        stroke="url(#paint0_linear_118_1217)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M20.875 5.875L11.125 20.125L5.5 12.625"
        stroke="url(#paint0_linear_118_1217)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_118_1217"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#632329" />
          <stop offset="0.49648" stopColor="#F25551" />
          <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_118_1217"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#632329" />
          <stop offset="0.49648" stopColor="#F25551" />
          <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="4"
        stroke="url(#paint0_linear_118_1217)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_118_1217"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#632329" />
          <stop offset="0.49648" stopColor="#F25551" />
          <stop offset="1" stopColor="#50F283" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Checkbox;
