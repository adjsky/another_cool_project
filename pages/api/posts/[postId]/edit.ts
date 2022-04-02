import { NextApiHandler } from "next"

import {
  handleError,
  handleResponse,
  checkMethod
} from "@/src/services/backend/helpers"
import database from "@/src/services/simpleDatabase"

import { isPostWithoutId } from "@/src/services/simpleDatabase/models"

const editPost: NextApiHandler = (req, res) => {
  if (!checkMethod(req, res, "PUT")) {
    return
  }

  const postId = req.query.postId

  if (typeof postId != "string") {
    throw new Error("Invalid post id")
  }

  try {
    const userPost = req.body

    if (!isPostWithoutId(userPost)) {
      throw new Error("Invalid body")
    }

    const postToUpdateIndex = database.posts.findIndex(
      (post) => post.id == postId
    )

    if (postToUpdateIndex == -1) {
      throw new Error("Post not found")
    }

    database.posts[postToUpdateIndex] = {
      id: postId,
      ...userPost
    }

    handleResponse(res, 200, database.posts)
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, 400, error.message)
    } else {
      handleError(res, 500, "Internal error")
    }
  }
}

export default editPost
