function Arrow({ className, active }: { className: string; active: boolean }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g opacity="0.8">
        {active ? (
          <path
            d="M12 6L22 16L12 26"
            stroke="#F25551"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M12 6L22 16L12 26"
            stroke="#FEEDE1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </g>
    </svg>
  );
}

export default Arrow;
