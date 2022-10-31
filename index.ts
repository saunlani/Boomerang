import express from "express"
import dotenv from "dotenv"
import { routes } from './src/webserver/routes/v1/index'
dotenv.config()

const main = async () => {
  // create web server
  try {
    const app = express()
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    routes(app)
    app.listen(process.env.WEBSERVER_PORT, () => {
      console.log("Server now running on port", process.env.WEBSERVER_PORT)
    })
  }
  catch (error) {
    console.error("Failed to create server:", error)
  }
}
main()