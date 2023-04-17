import Genre from "@/components/Genre"
import { GetServerSideProps } from "next"
import { fetcher, generateMovieDBUrl } from "../helper"
type Props = {
  genre: {
    id: number
    name: string
  }[]
}

const Home = (props: Props) => {
  return (
    <div>
      <Genre genre={props.genre} />
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { genre: await fetcher(process.env.URL + "api/genre") },
  }
}
