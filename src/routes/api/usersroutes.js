import {Router} from "express"
import Users from '../../controllers/users'
import loginMiddleware from "../../validators/userValidator"
import studentValidator from '../../validators/classCOde'

const router = Router();
router.post('/login', loginMiddleware,Users.login);
router.post('/student', studentValidator, Users.studeAuth )
export default router;