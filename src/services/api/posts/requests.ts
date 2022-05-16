import { makeRequest } from "../helpers"

import type {
  AddPostParams,
  GetPostParams,
  EditPostParams,
  DeletePostParams,
  Post
} from "./types"

export const addPost = async (data: AddPostParams) => {
  return makeRequest<Post[]>({
    url: "/api/posts/add",
    method: "POST",
    data
  })
}

export const getPost = async ({ id }: GetPostParams) => {
  return makeRequest<Post>({
    url: `/api/posts/${id}`,
    method: "GET"
  })
}

export const getPosts = async () => {
  return makeRequest<Post[]>({
    url: "/api/posts",
    method: "GET"
  })
}

export const editPost = async (data: EditPostParams) => {
  return makeRequest<Post[]>({
    url: `/api/posts/${data.id}}/edit`,
    method: "PUT",
    data
  })
}

export const deletePost = async ({ id }: DeletePostParams) => {
  return makeRequest<Post[]>({
    url: `/api/posts/${id}/delete`,
    method: "DELETE"
  })
}
