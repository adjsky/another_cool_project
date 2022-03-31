import { NextApiHandler } from "next"
import { nanoid } from "nanoid"

import {
  handleError,
  handleResponse,
  checkMethod
} from "@/src/services/backend/helpers"
import database from "@/src/services/simpleDatabase"

import { Post, isPostWithoutId } from "@/src/services/simpleDatabase/models"

const addPost: NextApiHandler = (req, res) => {
  if (!checkMethod(req, res, "POST")) {
    return
  }

  try {
    const userPost = req.body

    if (!isPostWithoutId(userPost)) {
      throw new Error("Invalid body")
    }

    const generatedPost: Post = {
      id: nanoid(10),
      ...userPost
    }

    const updatedPosts = [generatedPost, ...database.posts]

    database.posts = updatedPosts

    handleResponse(res, 200, updatedPosts)
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, 400, error.message)
    } else {
      handleError(res, 500, "Internal error")
    }
  }
}

export default addPost
