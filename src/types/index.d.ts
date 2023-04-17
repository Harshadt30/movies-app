export {}
declare global {
  interface FetchResponse {
    loading: boolean
    error: boolean
    response: object
  }
}
