"use client"
import { useEffect } from "react"
import { generateMovieDBUrl } from "../../helper"
import useFetch from "../../hooks/useFetch"

type Props = {}

const Gener = (props: Props) => {
  const url = generateMovieDBUrl(["genre", "movie", "list"])
  console.log(url)

  const response = useFetch({ url: url, method: "GET" })
  console.log(response)
  return <div>Gener</div>
}

export default Gener
