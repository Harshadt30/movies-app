import Container from "@/components/Container"
import Gener from "@/components/Genre"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
      {/**
       * TODO: Move this to /genre
       */}
      <Gener genreType="movie" title="Movies" />
      <Gener genreType="tv" title="Tv Shows" />
    </Container>
  )
}

export default HomePage
