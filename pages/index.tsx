import React from "react"

import Posts from "@/components/Home/Posts"
import PostForm from "@/components/Home/PostForm"

const Home = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center">
      <Posts />
      <PostForm />
    </main>
  )
}

export default Home
