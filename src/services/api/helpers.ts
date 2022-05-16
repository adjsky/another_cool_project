import axios from "axios"

import type { AxiosRequestConfig } from "axios"

export type CancelledResponse = {
  state: "cancelled"
}

export type UnavailableResponse = {
  state: "unavailable"
}

export type FailedResponse<T> = {
  state: "failed"
  status: number
  message: T
}

export type Error<T> =
  | CancelledResponse
  | UnavailableResponse
  | FailedResponse<T>

export type Response<T> = {
  status: number
  data: T
}

export const makeRequest = async <T>(
  props: AxiosRequestConfig
): Promise<Response<T>> => {
  try {
    const response = await axios(props)

    return {
      status: response.status,
      data: response.data
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      throw {
        state: "cancelled"
      }
    }

    if (axios.isAxiosError(error) && error.response) {
      throw {
        state: "failed",
        status: error.response.status,
        message: error.response.data.message
      }
    }

    throw {
      state: "unavailable"
    }
  }
}
