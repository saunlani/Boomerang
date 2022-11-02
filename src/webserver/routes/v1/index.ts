import { targetOneRouter } from './targetOne/targetOne'
import { Application } from "express"

export const routes = (app: Application) => {
  app.use('/api/v1/one', targetOneRouter())
}