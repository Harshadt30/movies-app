"use client"
import { generateMovieDBUrl } from "@/helper/index"
import useFetch from "@/hooks/useFetch"
import Link from "next/link"

type Props = {
  genreType: "movie" | "tv"
  title: string
}

type GenreResponse = {
  id: number
  name: string
}

interface FetcherData extends FetchResponse {
  response: {
    genres: GenreResponse[]
  }
}

const Genre = (props: Props) => {
  const url = generateMovieDBUrl(["genre", props.genreType, "list"])
  const { loading, error, response } = useFetch({
    url: url,
  }) as FetcherData

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Somethime went wrong...</h1>
  return (
    <div className="wrapper py-5 md:py-9 lg:py-14">
      <p className="text-2xl pb-5">{props.title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {response.genres.map(({ id, name }) => (
          <Link
            key={id}
            href={"/genres/" + name.toLowerCase()}
            className="border px-2 py-4 transition-all hover:font-bold hover:bg-black hover:text-white"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Genre
