import React from "react"
import classNames from "classnames"

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={classNames(
          "block",
          "h-[25px]",
          "w-full",
          "border",
          { "border-zinc-900": !error },
          { "border-red-500": error },
          "rounded-md",
          "px-2",
          "outline-none",
          "text-sm",
          "text-zinc-900",
          "placeholder:text-zinc-900"
        )}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
