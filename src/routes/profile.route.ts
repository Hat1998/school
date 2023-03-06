import { Router } from "express";
import {   } from "../controllers/teacher.controller";
let router = Router();
import validate from "../middleware/validate";
import { addprofile} from "../zod.schema/zod.profile";
 import { addProfile, getProfileById, getProfiles } from "../controllers/profile.controller";


router.get("/", getProfiles);

 router.post("/", validate(addprofile), addProfile);

  router.get('/byId/:id',  getProfileById)

  export default router;
