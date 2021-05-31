import {Router} from "express"
import lessonsController from "../../controllers/lessons"
import lessonsValidator from '../../validators/lessonUploadValidator'
 
const router = Router();
router.post('/', lessonsValidator.ValidateLesson, lessonsController.UploadLesson)
router.get('/lessonbyclass', lessonsValidator.ValidateGetByClass, lessonsController.getLessonsBYClass)
router.get('/lessonbyteacher', lessonsValidator.ValidateLessonByTeacher, lessonsController.getLessonsByTeacher)

export default router;