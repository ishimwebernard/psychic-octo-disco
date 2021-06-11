import {Router} from "express"
import lessonsController from "../../controllers/lessons"
import lessonsValidator from '../../validators/lessonUploadValidator'
import docValidator from '../../validators/docvalidator' 


const router = Router();
router.post('/lessonbyclass', lessonsValidator.ValidateGetByClass, lessonsController.getLessonsBYClass)
router.post('/lessonbyteacher', lessonsValidator.ValidateLessonByTeacher, lessonsController.getLessonsByTeacher)
router.post('/removelesson', docValidator,lessonsController.deleteLesson )
router.post('/', lessonsValidator.ValidateLesson, lessonsController.UploadLesson)


export default router;