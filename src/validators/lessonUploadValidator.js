import lessonSchema from '../validateschemas/lessonValidator'
const ValidateLesson = async(req, res, next) =>{
    const {error} = await lessonSchema.validate(req.body);
    if(error){
        return res.status(400).send({
            data: error.message
        })
    }else{
        next()
    }
}
export default ValidateLesson;