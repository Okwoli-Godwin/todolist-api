import {Router} from "express"
import { Delete, getall, post, search, update } from "../controller/todolistcontroller"

const router = Router()

router.route("/post").post(post)
router.route("getall").get(getall)
router.route("/update").patch(update)
router.route("/search").get(search)
router.route("/Delete/:id").delete(Delete)

export default router