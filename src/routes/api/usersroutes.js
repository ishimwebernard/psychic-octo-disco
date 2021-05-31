import {Router} from "express"
import Users from '../../controllers/users'
import loginMiddleware from "../../validators/userValidator"
const router = Router();
router.post('/login', loginMiddleware,Users.login);
export default router;