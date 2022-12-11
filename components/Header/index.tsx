import Link from "next/link";
import { useRef } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Search from "../Search";

type Props = {};

const navList = [
  {
    id: 0,
    to: "/movies",
    title: "Movies",
  },
  {
    id: 1,
    to: "/tv",
    title: "Tv",
  },
  {
    id: 2,
    to: "/popular",
    title: "Popular",
  },
  {
    id: 3,
    to: "/trending",
    title: "Trending",
  },
];

function Header(props: Props) {
  const navListRef = useRef(null);

  function handleMegaMenu() {
    if (navListRef.current) {
      let target: HTMLElement = navListRef.current;
      target.classList.toggle("active");
    }
  }

  return (
    <header>
      <Container className=" border-b">
        <div className="header-wrapper flex justify-between items-center flex-wrap md:flex-nowrap py-5">
          <div className="logo-wrapper">
            <Link href="/">
              <Logo color="#fff" />
            </Link>
          </div>
          <nav
            className="hidden md:flex flex-col md:flex-row mt-6 md:mt-0 w-full md:w-auto order-4 md:order-none justify-center"
            ref={navListRef}
          >
            {navList.map(({ id, to, title }) => (
              <Link className="px-5 py-3" key={id} href={to}>
                {title}
              </Link>
            ))}
          </nav>
          <div
            className="hamburger md:hidden cursor-pointer p-4 order-3"
            onClick={handleMegaMenu}
          >
            <span className="bar block w-10 h-1 rounded-sm bg-white"></span>
            <span className="bar block w-10 h-1 rounded-sm bg-white my-2"></span>
            <span className="bar block w-10 h-1 rounded-sm bg-white"></span>
          </div>
          <div className="extra ml-auto mr-4 md:ml-[unset] md:mr-0">
            <div className="search-wrapper cursor-pointer p-4">
              <Search color="#fff" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
