import Image from "next/image"
import Link from "next/link"
type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="MovieFlixx" width={250} height={100} />
        </Link>
      </div>
      <nav>
        <Link href="/movies">Movies</Link>
        <Link href="/tv">Tv</Link>
        <Link href="/discover">Divcover</Link>
      </nav>
    </header>
  )
}

export default Header
