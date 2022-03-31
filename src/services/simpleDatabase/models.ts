export type Post = {
  id: string
  title: string
  shortDescription?: string
  description: string
  text: string
}

const _isPost = (post: any, withId: boolean): post is Post => {
  return (
    (withId ? typeof post.id == "string" : typeof post.id == "undefined") &&
    typeof post.title == "string" &&
    (typeof post.shortDescription == "string" ||
      typeof post.shortDescription == "undefined") &&
    typeof post.description == "string" &&
    typeof post.text == "string"
  )
}

export const isPost = (post: any): post is Post => {
  return _isPost(post, true)
}

export const isPostWithoutId = (post: any): post is Omit<Post, "id"> => {
  return _isPost(post, false)
}

type Models = {
  posts: Post[]
}

export default Models
