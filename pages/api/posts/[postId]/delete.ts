import { NextApiHandler } from "next"

import {
  handleError,
  handleResponse,
  checkMethod
} from "@/src/services/backend/helpers"
import database from "@/src/services/simpleDatabase"

const deletePost: NextApiHandler = (req, res) => {
  if (!checkMethod(req, res, "DELETE")) {
    return
  }

  const postId = req.query.postId

  if (typeof postId != "string") {
    throw new Error("Invalid post id")
  }

  try {
    const postToDeleteIndex = database.posts.findIndex(
      (post) => post.id == postId
    )

    if (postToDeleteIndex == -1) {
      throw new Error("Post not found")
    }

    database.posts.splice(postToDeleteIndex, 1)

    handleResponse(res, 200, database.posts)
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, 400, error.message)
    } else {
      handleError(res, 500, "Internal error")
    }
  }
}

export default deletePost
