import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmail,
  checkUsernameAndPassword,
  getUserRole,
  chekJoingYear,
  checkJoingYearAfter,
  getUserByAge,
  updateUserByPassword,
  deleteUser
} from "../controllers/user.controller";
let router = Router();
import validate from "../middleware/validate";
import { addUser } from "../zod.schema/zod.user";

//1
router.get("/", getAllUsers);

//2
router.post("/", validate(addUser), createUser);

//3 Create endpoint that takes users id and return the user with this id
router.get('/byId/:id', getUserById)

//4 Create endpoint that takes email and return the user with this email
router.get("/byEmail/:email", getUserByEmail);

//5 Create endpoint that takes age and return the user with older than this age
router.get('/userage/:age', getUserByAge)


//6 Create endpoint that takes role and return the total count having this role
router.get('/role/:role', getUserRole)

//7
router.get('/checkUsernameAndPassword', checkUsernameAndPassword)

//8
router.put('/:id', updateUserByPassword)

//9 Create endpoint that takes joiningYear and userid , and return if this user joined with the date that being sent or not
router.get('/:id/:joiningYear', chekJoingYear)
 
//10 Create endpoint that takes joiningYear and return all the users who joined in this date or after
router.get('/joinYear/jy/:joiningYear', checkJoingYearAfter)
 
router.delete('/delete/:id', deleteUser)
export default router;
