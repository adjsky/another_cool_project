import React from "react"

type ErrorProps = {
  message: string
}

function Error({ message }: ErrorProps) {
  return <p className="font-normal text-xs text-red-500">{message}</p>
}

export default Error
