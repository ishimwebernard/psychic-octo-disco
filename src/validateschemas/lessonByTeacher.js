import Joi from "joi"

const LessonsByTeacher = Joi.object({
    teacher: Joi.string().required()
});
export default LessonsByTeacher