import { useQuery, useMutation } from "react-query"

import { getPosts, addPost, editPost, deletePost, getPost } from "./requests"

import type {
  AddPostParams,
  EditPostParams,
  DeletePostParams,
  Post
} from "./types"
import type { Error, Response } from "../helpers"
import type { QueryClient } from "react-query"

export const usePosts = () =>
  useQuery<Post[], Error<string>>("posts", async () => {
    const response = await getPosts()

    return response.data
  })

export const usePost = (id: string) =>
  useQuery<Post, Error<string>>(["post", id], async () => {
    const response = await getPost({ id })

    return response.data
  })

export const useAddPost = (queryClient?: QueryClient) =>
  useMutation<Response<Post[]>, Error<string>, AddPostParams>(addPost, {
    onSuccess: () => {
      if (!queryClient) {
        return
      }

      queryClient.invalidateQueries("posts")
    }
  })

export const useEditPost = () =>
  useMutation<Response<Post[]>, Error<string>, EditPostParams>(editPost)

export const useDeletePost = () =>
  useMutation<Response<Post[]>, Error<string>, DeletePostParams>(deletePost)
