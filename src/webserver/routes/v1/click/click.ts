import express, { Request, Response } from "express"
import { basicAuth } from "../../../middlewares/basicAuth/basicAuth"
import { createProxyMiddleware } from "http-proxy-middleware"

export const clickRouter = () => {
  const router = express.Router()

  // GET endpoints
  router.get('/', basicAuth, createProxyMiddleware({
    target: process.env.TARGET_URL_CLICK,
    changeOrigin: true,
  }))

  // POST endpoints
  router.post('/', basicAuth, createProxyMiddleware({
    target: process.env.TARGET_URL_CLICK,
    changeOrigin: true,
  }))
  return router
}