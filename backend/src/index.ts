import express from "express"
import cors from "cors"
import v1Routes from "./routes/v1/index"

const app = express()

app.use(cors())


app.use("/api/v1", v1Routes)

app.listen(3000, () => {
    console.log("The server is running on port 3000")
})
