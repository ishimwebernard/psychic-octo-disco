import Joi from "joi"

const LessonsByTeacher = Joi.object({
    doc: Joi.string().required()
});
export default LessonsByTeacher