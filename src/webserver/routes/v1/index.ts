import { clickRouter } from './click/click'
import { Application } from "express"

export const routes = (app: Application) => {
  app.use('/api/v1/click', clickRouter())
}