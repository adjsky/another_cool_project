import { makeRequest } from "../helpers"

import type {
  AddPostParams,
  AddPostResponse,
  GetPostsResponse,
  GetPostParams,
  GetPostResponse,
  EditPostParams,
  EditPostResponse,
  DeletePostParams,
  DeletePostResponse
} from "./types"

export const addPost = async (
  data: AddPostParams
): Promise<AddPostResponse> => {
  return makeRequest({
    url: "/api/posts/add",
    method: "POST",
    data
  })
}

export const getPost = async ({
  id
}: GetPostParams): Promise<GetPostResponse> => {
  return makeRequest({
    url: `/api/posts/${id}`,
    method: "GET"
  })
}

export const getPosts = async (): Promise<GetPostsResponse> => {
  return makeRequest({
    url: "/api/posts",
    method: "GET"
  })
}

export const editPost = async (
  data: EditPostParams
): Promise<EditPostResponse> => {
  return makeRequest({
    url: `/api/posts/${data.id}}/edit`,
    method: "PUT",
    data
  })
}

export const deletePost = async ({
  id
}: DeletePostParams): Promise<DeletePostResponse> => {
  return makeRequest({
    url: `/api/posts/${id}/delete`,
    method: "DELETE"
  })
}
