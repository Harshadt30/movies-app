type Props = {
  color?: string;
  width?: string;
  height?: string;
};

function Logo({ color, width, height }: Props) {
  return (
    <svg
      fill={color? color : undefined}
      width={width? width : undefined}
      height={height? height : '38px'}
    >
      <path d="M1 36V0l18 26h-2L35 0h1v36h-5V11v2L18 32 5 13l1-2v25H1Zm42-17a17 17 0 0 1 6-13 18 18 0 0 1 12-5l7 1 6 4a18 18 0 0 1 5 13 17 17 0 0 1-5 12l-6 4-7 1a18 18 0 0 1-16-10l-2-7Zm5 0a13 13 0 0 0 18 12l4-3 3-4 1-5a13 13 0 0 0-4-10 13 13 0 0 0-9-4l-5 1a13 13 0 0 0-7 8l-1 5ZM87 1l11 29-2-1 11-28h5L97 38 81 1h6Zm30 15h5v20h-5V16Zm0-7 1-2 2-1 1 1 1 2-1 2h-3l-1-2Zm14-8h22v5h-18v10h16v5h-16v11h19v4h-23V1Zm46 0h21v5h-16v11h14v4h-14v15h-5V1Zm28 0h5v31h18v4h-23V1Zm29 15h4v20h-4V16Zm0-7 1-2 1-1 2 1 1 2-1 2h-3l-1-2Zm10-8h6l23 35h-6L244 1Zm0 35 12-19 2 5-8 14h-6Zm14-21 9-14h5l-11 18-3-4Z" />
    </svg>
  );
}

export default Logo;
