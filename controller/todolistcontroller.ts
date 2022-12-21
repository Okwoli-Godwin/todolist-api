import {Request, Response} from "express"
import todomodel from "../model/todolistmodel"

const post = async (req: Request, res: Response):Promise<Response> => {
    try {
        const {title, description, status} = req.body
        const newtitle = await todomodel.create({
            title, description, status
        })

        return res.status(201).json({
            message: "gotten successfully",
            data: newtitle
        })
    } catch (error) {
        return res.status(400).json({
            messgae: "an error occured",
            data: error
        })
    }
}

const getall = async (req: Request, res: Response):Promise<Response> => {
    try {
        const alllist = await todomodel.find()
        return res.status(201).json({
            message: " All list gotten",
            data: alllist
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

const update = async (req: Request, res: Response):Promise<Response> => {
    try {
        const {status} = req.body
        const updated = await todomodel.findByIdAndUpdate(req.params.id, {status}, {new: true})
        return res.status(201).json({
            message: "Updated",
            data: updated
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

const search = async (req: Request, res: Response):Promise<Response> => {
    try {
        const querydata = req.query
        const makesearch = await todomodel.find(querydata)

        return res.status(201).json({
            message: "Search found",
            data: makesearch
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

const Delete = async (req: Request, res: Response):Promise<Response> => {
    try {
        const remove = await todomodel.findByIdAndRemove(req.params.id)

        return res.status(201).json({
            message: "Data deleted",
            data: remove
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}

export {post, getall, update, search, Delete}