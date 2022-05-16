export type Post = {
  id: string
  title: string
  shortDescription?: string
  description: string
  text: string
}

export type AddPostParams = Omit<Post, "id">

export type GetPostParams = {
  id: string
}

export type EditPostParams = Post

export type DeletePostParams = {
  id: string
}
