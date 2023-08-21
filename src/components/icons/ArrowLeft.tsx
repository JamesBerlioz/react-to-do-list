function ArroLeft({ active }: { active: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      {active ? (
        <>
          <path
            d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19C1 28.9411 9.05887 37 19 37Z"
            stroke="#F25551"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M17.8563 25.3563L11.5 19L17.8563 12.6438"
            stroke="#F25551"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 19H26.5"
            stroke="#F25551"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19C1 28.9411 9.05887 37 19 37Z"
            stroke="#632329"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M17.8563 25.3563L11.5 19L17.8563 12.6438"
            stroke="#632329"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 19H26.5"
            stroke="#632329"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default ArroLeft;
