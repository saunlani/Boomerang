import express from "express"
import { basicAuth } from "../../../middlewares/basicAuth/basicAuth"
import { ipCheck } from "../../../middlewares/ipCheck/ipCheck"
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware"

export const targetOneRouter = () => {
  const router = express.Router()
  // GET endpoints
  router.get('/', ipCheck, basicAuth, createProxyMiddleware({
    target: process.env.TARGET_URL_ONE,
    changeOrigin: true,
    onProxyReq: fixRequestBody
  }))

  // POST endpoints
  router.post('/', ipCheck, basicAuth, createProxyMiddleware({
    target: process.env.TARGET_URL_ONE,
    changeOrigin: true,
  }))
  return router
}