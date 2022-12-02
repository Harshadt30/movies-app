import { useEffect, useReducer } from "react";

type Props = {
  url: URL | string;
  headers?: HeadersInit;
};

type IntialStateType = {
  loading: boolean;
  error: boolean;
  errorType: string;
  errorMessage: string;
  reponse: object;
};

type dispatchActions =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "SET_ERRORMESSAGE"; payload: string }
  | { type: "SET_ERRORTYPE"; payload: string }
  | { type: "SET_RESPONSE"; payload: object };

function fetchReducer(
  state: IntialStateType,
  action: dispatchActions
): IntialStateType {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: payload,
      };
    case "SET_ERRORTYPE":
      return {
        ...state,
        errorType: payload,
      };
    case "SET_ERRORMESSAGE":
      return {
        ...state,
        errorMessage: payload,
      };
    case "SET_RESPONSE":
      return {
        ...state,
        reponse: payload,
      };
  }
}

const intialState: IntialStateType = {
  loading: true,
  error: false,
  errorType: "",
  errorMessage: "",
  reponse: {},
};

export default function useFetch(props: Props) {
  const { url, headers } = props;
  const [state, dispatch] = useReducer(fetchReducer, intialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchReponse() {
      try {
        if (url) {
          const request = await fetch(url, {
            method: "GET",
            headers: headers,
            signal: signal,
          });

          if (!request.ok) {
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "SET_ERROR", payload: true });
            dispatch({ type: "SET_ERRORTYPE", payload: "Unknow" });
            dispatch({ type: "SET_ERRORMESSAGE", payload: `${request}` });
            dispatch({ type: "SET_RESPONSE", payload: {} });
          } else {
            const response = await request.json();
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "SET_RESPONSE", payload: response });
          }
        } else {
          dispatch({ type: "SET_LOADING", payload: false });
          dispatch({ type: "SET_ERROR", payload: true });
          dispatch({ type: "SET_ERRORTYPE", payload: "Missing feild" });
          dispatch({
            type: "SET_ERRORMESSAGE",
            payload: `URL is missing or wrond provided`,
          });
        }
      } catch (error: any) {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_ERROR", payload: true });
        dispatch({ type: "SET_ERRORTYPE", payload: "Unknow" });
        dispatch({ type: "SET_ERRORMESSAGE", payload: `${error.message}` });
      }
    }

    fetchReponse();
    return () => controller.abort();
  }, [url]);

  return state;
}
