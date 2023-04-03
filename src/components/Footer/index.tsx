import Container from "../Container"
import styles from "./Footer.styles.module.sass"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className={styles.footerWrapper}>
          <p>&copy; MovieFlixx {new Date().getFullYear()} all right reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
