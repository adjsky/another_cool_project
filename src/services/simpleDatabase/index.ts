import type Models from "./models"

export const createInstance = (): Models => {
  return {
    posts: []
  }
}

const shareableInstance: Models = createInstance()

export default shareableInstance
