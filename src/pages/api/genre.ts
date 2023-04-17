import { generateMovieDBUrl } from "@/helper/index"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export default async function genreHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const request = await fetch(generateMovieDBUrl(["genre", "movie", "list"]))
    const response = await request.json()
    res.status(200).json(response)
  } catch (error: any) {
    res.status(500).json({
      error: "Something went wrong",
      dec: error.message,
    })
  }
}
