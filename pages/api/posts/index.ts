import database from "@/src/services/simpleDatabase"
import { handleResponse, checkMethod } from "@/src/services/backend/helpers"

import type { NextApiHandler } from "next"

const getPosts: NextApiHandler = (req, res) => {
  if (!checkMethod(req, res, "GET")) {
    return
  }

  handleResponse(res, 200, database.posts)
}

export default getPosts
