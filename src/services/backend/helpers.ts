import type { NextApiResponse, NextApiRequest } from "next"

/**
 * Set status header and send data as a JSON
 *
 * @param res response object
 * @param status response status
 * @param data response data
 */
export const handleResponse = <T>(
  res: NextApiResponse,
  status: number,
  data: T
) => {
  res.status(status).json({
    status,
    data
  })
}

/**
 * Set status header and send error message as a JSON
 *
 * @param res response object
 * @param status response status
 * @param message response data
 */
export const handleError = <T>(
  res: NextApiResponse,
  status: number,
  message: T
) => {
  res.status(status).json({
    status,
    message
  })
}

/**
 * Check if request method equals to the provided one/ones and respond with an error message
 *
 * @param req
 * @param res
 * @param method
 */
export const checkMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
  method: string[] | string
): boolean => {
  const isMethodArray = Array.isArray(method)

  const respondWithError = () => {
    res.status(405).json({
      status: 405,
      message: `Only ${isMethodArray ? method.join(", ") : method} ${
        isMethodArray ? "are" : "is"
      } allowed`
    })
  }

  const requestMethod = req.method

  if (!requestMethod) {
    respondWithError()

    return false
  }

  let equals = false

  if (isMethodArray) {
    equals = method.includes(requestMethod)
  } else {
    equals = requestMethod == method
  }

  if (!equals) {
    respondWithError()
  }

  return equals
}
