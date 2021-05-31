import {Router} from "express"
import lessonsController from "../../controllers/lessons"
import lessonsValidator from '../../validators/lessonUploadValidator'
 
const router = Router();
router.post('/', lessonsValidator, lessonsController.UploadLesson)
export default router;