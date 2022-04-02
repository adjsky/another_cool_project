import axios from "axios"

import type { AxiosRequestConfig } from "axios"

export type Response = {
  status: number
  data: any
}

export type Error = {
  status?: number
  message: any
}

export const makeRequest = async (
  props: AxiosRequestConfig
): Promise<Response> => {
  try {
    const response = await axios({ ...props })

    return {
      ...response.data
    }
  } catch (error) {
    const errorObject: Error = {
      message: "Server is unavailable"
    }

    if (axios.isAxiosError(error) && error.response) {
      const response = error.response

      errorObject.message = response.data.message
      errorObject.status = response.status
    }

    throw errorObject
  }
}
