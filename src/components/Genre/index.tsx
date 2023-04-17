import { generateMovieDBUrl } from "@/helper/index"
import useFetch from "@/hooks/useFetch"
import { GetServerSideProps } from "next"

type GenreResponse = {
  genre: {
    id: number
    name: string
  }[]
}

const Genre = (props: GenreResponse) => {
  return <div></div>
}

export default Genre
