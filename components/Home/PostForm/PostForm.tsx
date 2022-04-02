import React from "react"
import { useQueryClient } from "react-query"
import { useForm } from "react-hook-form"

import { useAddPost } from "@/src/services/api/posts/hooks"

import Input from "./Input"
import Textarea from "./Textarea"
import Error from "./Error"

import type { Post } from "@/src/services/api/posts/types"

function PostForm() {
  const queryClient = useQueryClient()
  const mutation = useAddPost(queryClient)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<Post, "id">>()
  const onSubmit = handleSubmit((data) => mutation.mutate(data))

  return (
    <form
      onSubmit={onSubmit}
      className="w-2/3 flex flex-col gap-2 h-screen justify-center"
    >
      <Input
        {...register("title", { required: "Title is required" })}
        error={errors.title != undefined}
        placeholder="Title"
      />
      {errors.title?.message && <Error message={errors.title.message} />}
      <Input
        {...register("shortDescription")}
        placeholder="Short description"
      />
      <Input
        {...register("description", { required: "Description is required" })}
        error={errors.description != undefined}
        placeholder="Description"
      />
      {errors.description?.message && (
        <Error message={errors.description.message} />
      )}
      <Textarea
        {...register("text", { required: "Post text is required" })}
        rows={3}
        error={errors.text != undefined}
        placeholder="Post text"
      />
      {errors.text?.message && <Error message={errors.text.message} />}

      <button
        type="submit"
        className="flex items-center justify-center h-[40px] border border-zinc-900 rounded-md text-sm font-normal"
      >
        Add post
      </button>
    </form>
  )
}

export default PostForm
