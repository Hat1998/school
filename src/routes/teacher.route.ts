import { Router } from "express";
import { addTeacher, getAllTeachers, getTeacherById } from "../controllers/teacher.controller";
let router = Router();
import validate from "../middleware/validate";
import { addteacher } from "../zod.schema/zod.teacher";


router.get("/", getAllTeachers);

 router.post("/", validate(addteacher), addTeacher);

  router.get('/byId/:id', getTeacherById)

  export default router;
