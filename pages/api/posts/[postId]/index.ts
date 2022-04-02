import { NextApiHandler } from "next"

import {
  handleError,
  handleResponse,
  checkMethod
} from "@/src/services/backend/helpers"
import database from "@/src/services/simpleDatabase"

const getPost: NextApiHandler = (req, res) => {
  if (!checkMethod(req, res, "GET")) {
    return
  }

  const postId = req.query.postId

  if (typeof postId != "string") {
    throw new Error("Invalid post id")
  }

  try {
    const post = database.posts.find((post) => post.id == postId)

    if (!post) {
      throw new Error("Post not found")
    }

    handleResponse(res, 200, post)
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, 400, error.message)
    } else {
      handleError(res, 500, "Internal error")
    }
  }
}

export default getPost
