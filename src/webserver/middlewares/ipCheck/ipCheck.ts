import { Request, Response, NextFunction } from "express"

const hasIp = (ip: string, res: Response) => {
  if (!process.env.APPROVED_IP_LIST || !JSON.parse(process.env.APPROVED_IP_LIST).includes(ip)) {

    return res.status(401).json({ msg: 'Access Denied' })
  }
  return true
}

export const ipCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.socket.remoteAddress && hasIp(req.socket.remoteAddress, res)) {
      next()
    }
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Unknown Error Occurred' })
  }
}