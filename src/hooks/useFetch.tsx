import { useEffect, useReducer } from "react"

type FetcherProps = {
  url: string
}

type IntialState = {
  loading: boolean
  error: boolean
  response: object
}

type Actions =
  | { type: "loading"; payload: boolean }
  | { type: "error"; payload: boolean }
  | { type: "response"; payload: object }

const intialState: IntialState = {
  loading: true,
  error: false,
  response: {},
}

const fetchReducer = (state: IntialState, action: Actions): IntialState => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload }
    case "error":
      return { ...state, error: action.payload }
    case "response":
      return { ...state, response: action.payload }
    default:
      return state
  }
}

const useFetch = (props: FetcherProps) => {
  const [state, dispatch] = useReducer(fetchReducer, intialState)
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const fetcher = async () => {
      try {
        const request = await fetch(props.url, {
          signal,
        })

        if (request.ok) {
          const response = await request.json()
          dispatch({ type: "response", payload: response })
          dispatch({ type: "loading", payload: false })
          return
        }
        dispatch({ type: "error", payload: true })
        dispatch({ type: "loading", payload: false })
      } catch (error: unknown) {
        dispatch({ type: "error", payload: true })
        dispatch({ type: "loading", payload: false })
      }
    }
    fetcher()

    return () => controller.abort()
  }, [props.url])
  return state
}

export default useFetch
