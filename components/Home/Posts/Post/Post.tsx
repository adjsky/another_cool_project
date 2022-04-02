import React from "react"
import Link from "next/link"

type PostProps = {
  id: string
  title: string
  shortDescription?: string
}

function Post({ id, title, shortDescription }: PostProps) {
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <article className="min-h-min shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 p-4">
          <h2 className="text-xl font-semibold break-words">{title}</h2>
          {shortDescription && (
            <p className="mt-3 text-base font-normal break-words">
              {shortDescription}
            </p>
          )}
        </article>
      </a>
    </Link>
  )
}

export default Post
