import React from "react"

import { usePosts } from "@/src/services/api/posts/hooks"

import Post from "./Post"

function Posts() {
  const { data } = usePosts()

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 justify-self-stretch self-start gap-4 p-4">
      {data?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts
