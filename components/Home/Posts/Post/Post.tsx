import React from "react"

type PostProps = {
  title: string
  shortDescription?: string
}

function Post({ title, shortDescription }: PostProps) {
  return (
    <article className="min-h-min shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 p-4">
      <h2 className="text-xl font-semibold break-words">{title}</h2>
      {shortDescription && (
        <p className="mt-3 text-base font-normal break-words">
          {shortDescription}
        </p>
      )}
    </article>
  )
}

export default Post
