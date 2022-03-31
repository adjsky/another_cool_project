import type { NextApiHandler } from "next"

const getInfo: NextApiHandler = (req, res) => {
  res.status(200).json({
    message: "Hi!"
  })
}

export default getInfo
