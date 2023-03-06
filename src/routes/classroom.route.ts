import { Router } from "express";
import {   } from "../controllers/teacher.controller";
let router = Router();
import validate from "../middleware/validate";
import { addclassrom} from "../zod.schema/zod.classroom";
 import { addClassRoom, getAllClassRooms, getClassRoomById } from "../controllers/classRoom.controller";


router.get("/", getAllClassRooms);

 router.post("/", validate(addclassrom), addClassRoom);

  router.get('/byId/:id',  getClassRoomById)

  export default router;
