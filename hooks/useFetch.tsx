import { useEffect, useReducer } from "react"

type FetcherProps = {
  url: string
  method: "GET" | "POST"
}

type IntialState = {
  loading: boolean
  error: boolean
  errorMessage: string
  response: object
}

type Actions =
  | { type: "loading"; payload: boolean }
  | { type: "error"; payload: boolean }
  | { type: "errorMessage"; payload: string }
  | { type: "response"; payload: object }

const intialState: IntialState = {
  loading: true,
  error: false,
  errorMessage: "",
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
    case "errorMessage":
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const useFetch = (props: FetcherProps) => {
  const [state, dispatch] = useReducer(fetchReducer, intialState)
  useEffect(() => {
    const fetcher = async () => {
      try {
        const request = await fetch(props.url, {
          method: props.method,
        })

        if (request.ok) {
          const response = await request.json()
          dispatch({ type: "response", payload: response })
          dispatch({ type: "loading", payload: false })
          return
        }
        dispatch({ type: "error", payload: true })
        dispatch({ type: "errorMessage", payload: `${request}` })
        dispatch({ type: "loading", payload: false })
      } catch (error: unknown) {
        dispatch({ type: "error", payload: true })
        dispatch({ type: "loading", payload: false })
        dispatch({ type: "errorMessage", payload: `${error}` })
      }
    }

    fetcher()
  }, [props.method, props.url])
  return state
}

export default useFetch
