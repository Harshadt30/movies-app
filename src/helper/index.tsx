import { MOVIEDB_API_KEY, MOVIEDB_DOMAIN } from "@/constant/MOVIEDB"

export const generateMovieDBUrl = (params: string[]): string => {
  const url = `${MOVIEDB_DOMAIN}${params.join("/")}?api_key=${MOVIEDB_API_KEY}`
  return url
}

export async function fetcher(url: string, headers = {}) {
  try {
    const request = await fetch(url, {
      headers,
    })

    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
    return {
      error: "something went wrong",
    }
  }
}
