import { useQuery, useMutation } from "react-query"

import { getPosts, addPost, editPost, deletePost } from "./requests"

import type {
  GetPostsResponse,
  AddPostResponse,
  AddPostParams,
  EditPostParams,
  EditPostResponse,
  DeletePostResponse,
  DeletePostParams
} from "./types"
import type { Error } from "../helpers"
import type { QueryClient } from "react-query"

export const usePosts = () =>
  useQuery<GetPostsResponse["data"], Error>("posts", async () => {
    const response = await getPosts()

    return response.data
  })

export const useAddPost = (queryClient?: QueryClient) =>
  useMutation<AddPostResponse, Error, AddPostParams>(addPost, {
    onSuccess: () => {
      if (!queryClient) {
        return
      }

      queryClient.invalidateQueries("posts")
    }
  })

export const useEditPost = () =>
  useMutation<EditPostResponse, Error, EditPostParams>(editPost)

export const useDeletePost = () =>
  useMutation<DeletePostResponse, Error, DeletePostParams>(deletePost)
