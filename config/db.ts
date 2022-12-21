import mongoose from "mongoose"

const URI: string = "mongodb://localhost/bookstore"
mongoose.connect(URI)
mongoose.connection
        .on("open", () => {
            console.log("Database Connected")
        })
        .once("error", () => {
            console.log("An error occured")
        })