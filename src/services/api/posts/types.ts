export type Post = {
  id: string
  title: string
  shortDescription?: string
  description: string
  text: string
}

export type AddPostParams = Omit<Post, "id">

export type AddPostResponse = {
  status: number
  data?: Post[]
  message?: string
}

export type GetPostsResponse = {
  status: number
  data?: Post[]
  message?: string
}

export type EditPostParams = Post

export type EditPostResponse = {
  status: number
  data?: Post[]
  message?: string
}

export type DeletePostParams = {
  id: string
}

export type DeletePostResponse = {
  status: number
  data?: Post[]
  message?: string
}
