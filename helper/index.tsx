import { MOVIEDB_API_KEY, MOVIEDB_DOMAIN } from "../constant/MOVIEDB"

export const generateMovieDBUrl = (params: string[]): string => {
  const url = `${MOVIEDB_DOMAIN}${params.join("/")}?api_key=${MOVIEDB_API_KEY}`
  return url
}
