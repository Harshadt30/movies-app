"use client"
import { generateMovieDBUrl } from "@/helper/index"
import useFetch from "@/hooks/useFetch"

type GenreResponse = {
  id: number
  name: string
}

const Genre = (props: {}) => {
  const url = generateMovieDBUrl(["genre", "movie", "list"])
  console.log(url)

  const { loading, error, errorMessage, response } = useFetch({
    url: url,
    method: "GET",
  })
  return <div></div>
}

export default Genre
