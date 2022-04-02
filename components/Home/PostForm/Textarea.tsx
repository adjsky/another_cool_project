import React from "react"
import classNames from "classnames"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={classNames(
          "block",
          "w-full",
          "border",
          { "border-zinc-900": !error },
          { "border-red-500": error },
          "rounded-md",
          "p-2",
          "outline-none",
          "text-sm",
          "text-zinc-900",
          "placeholder:text-zinc-900"
        )}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export default Textarea
