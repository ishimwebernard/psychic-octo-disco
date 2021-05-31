import lessonSchema from '../validateschemas/lessonValidator'
import LessonInputSchema from '../validateschemas/lessonInputSchema'
import LessonByTeacher from '../validateschemas/lessonByTeacher'

class LessonValidator{
    static ValidateLesson = async(req, res, next) =>{
        const {error} = await lessonSchema.validate(req.body);
        if(error){
            return res.status(400).send({
                data: error.message
            })
        }else{
            next()
        }
    }
    static ValidateGetByClass = async(req, res, next) =>{
        const {error} = await LessonInputSchema.validate(req.body);
        if(error){
            return res.status(400).send({
                data: error.message
            })
        }else{
            next()
        }
    }

    static ValidateLessonByTeacher= async(req, res, next) =>{
        const {error} = await LessonByTeacher.validate(req.body);
        if(error){
            return res.status(400).send({
                data: error.message
            })
        }else{
            next()
        }
    }
}
export default LessonValidator;