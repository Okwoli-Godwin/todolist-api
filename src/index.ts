import express, {Application, Request, Response} from "express"
const port: number | string = process.env.port || 2033;
require("../config/db")
import router from "../Router/todolistrouter"

const app: Application = express()
app.use(express.json())
app.use("server", router)

app.get("/", (req: Request,res: Response) => {
    res.status(200).json({
        message: "Server is working fine"
    })
})

app.listen(port, () => {
    console.log("Server is up and running")
})