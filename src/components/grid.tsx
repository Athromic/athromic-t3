const Grid = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full stroke-default-200/25 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-55%] h-[200%] skew-y-0"
    >
      <defs>
        <pattern
          height={60}
          id=":Rcv9uba:"
          patternUnits="userSpaceOnUse"
          width={60}
          x={-1}
          y={-1}
        >
          <path d="M.5 60V.5H60" fill="none" strokeDasharray={0} />
        </pattern>
      </defs>
      <rect fill="url(#:Rcv9uba:)" height="100%" width="100%" />
      <svg className="overflow-visible fill-default-100" x={-1} y={-1}>
        <rect
          fill="currentColor"
          height={59}
          strokeWidth={0}
          width={59}
          x={481}
          y={1021}
          opacity="0.07679242433368927"
        />

        <rect
          fill="currentColor"
          height={59}
          strokeWidth={0}
          width={59}
          x={141}
          y={321}
          opacity="0.07679242433368927"
        />
      </svg>
    </svg>
  );
};

export default Grid;
