import { Request, Response, NextFunction } from "express"
import auth from 'basic-auth'

export const basicAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = auth(req)
    if (user?.name.toLowerCase() === process.env.USERNAME && user?.pass === process.env.PASSWORD) {
      next()
    }
    else {
      return res.status(401).json({ msg: 'Invalid Credentials' })
    }
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Unknown Error Occurred' })
  }
}