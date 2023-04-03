declare namespace FetcherTypes {
  export interface FetchResponse {
    loading: boolean
    error: boolean
    errorMessage: string
    response: object
  }
}
