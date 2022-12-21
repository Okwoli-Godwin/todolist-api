import mongoose from "mongoose"

interface todolist {
    task: string,
    status: string,
    description: string
}

interface itodolist extends todolist, mongoose.Document{}

const list = new mongoose.Schema({
    task: String,
    status: String,
    description: String
})

export default mongoose.model<itodolist>("todo", list)