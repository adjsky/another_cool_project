import React from "react"
import { useRouter } from "next/router"

import { usePost } from "@/src/services/api/posts/hooks"

function Post() {
  const router = useRouter()
  const postId = router.query.postId
  const processedPostId = postId
    ? typeof postId == "string"
      ? postId
      : postId[0]
    : ""

  const { data, error } = usePost(processedPostId)

  if (error || !data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="font-normal text-3xl tracking-widest">Post not found</h1>
      </div>
    )
  }

  return (
    <main className="max-w-screen-sm mx-auto pt-3">
      <h1 className="font-semibold tracking-wide text-2xl">{data.title}</h1>
      <div className="py-2" />
      <p className="font-normal text-xl">{data.description}</p>
      <div className="py-2" />
      <p className="font-normal text-lg">{data.text}</p>
    </main>
  )
}

export default Post
