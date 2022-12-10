type Props = {
  color?: string;
  width?: string;
  height?: string;
};

function Search({ color, height, width }: Props) {
  return (
    <svg
      fill={color ? color : undefined}
      width={width ? width : '30px'}
      height={height ? height : undefined}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 487.9 487.9"
    >
      <path d="M482 453 342 313A192 192 0 0 0 193 0C87 0 0 86 0 191a192 192 0 0 0 313 150l140 141c8 8 21 8 29 0 8-9 8-21 0-29zM41 191c0-82 68-150 152-150s152 68 152 150a152 152 0 0 1-304 0z" />
    </svg>
  );
}

export default Search;
