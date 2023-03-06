import { Router } from "express";
import {   } from "../controllers/teacher.controller";
let router = Router();
import validate from "../middleware/validate";
import { addstudent} from "../zod.schema/zod.student";
import { getAllStudents, getStudentById, addStudent } from "../controllers/student.controller";


router.get("/", getAllStudents);

 router.post("/", validate(addstudent), addStudent);

  router.get('/byId/:id', getStudentById)

  export default router;
