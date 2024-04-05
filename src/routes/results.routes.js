import { create, get, getId, remove } from "../controllers/results.controller"

const resultsRoutes = (app) => {
  app.post("/create-results", create)
  app.get("/list-all-results", get)
  app.get("/list-By-Id/:id", getId)
  app.delete("/remove-result/:id", remove)
}

export default resultsRoutes
