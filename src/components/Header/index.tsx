/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
// import Container from "../Container"
import styles from "./Header.styles.module.sass"
import Container from "../Container"
type Props = {}

const linkWrapperStyles = "inline-flex gap-5"
const linkStyles = "px-3 py-6"

const Header = (props: Props) => {
  return (
    <header className="bg-black text-white">
      <Container>
        <div className={`${styles.headerWrapper}`}>
          <div>
            <Link href="/" title="MovieFlixx">
              <img src="/logo.png" alt="MovieFlixx" width={250} height={100} />
            </Link>
          </div>
          <nav className={linkWrapperStyles}>
            <Link className={linkStyles} href="/movies">
              Movies
            </Link>
            <Link className={linkStyles} href="/tv">
              Tv
            </Link>
            <Link className={linkStyles} href="/discover">
              Divcover
            </Link>
            <Link className={linkStyles} href="/trending">
              Trending
            </Link>
          </nav>
          <div className={linkWrapperStyles}>
            <Link className={linkStyles} href="/login">
              Login
            </Link>
            <Link className={linkStyles} href="/register">
              SignUp
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
