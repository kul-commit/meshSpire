import {Router} from "express"
import studentRoutes from "./student/index"
import teacherRoutes from "./teacher/index"

const router = Router()

router.use("/", studentRoutes)
router.use("/teacher", teacherRoutes)


export default router;