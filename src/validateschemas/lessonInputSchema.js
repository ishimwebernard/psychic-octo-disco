import Joi from "joi"

const LessonINputSchema = Joi.object({
    targetClass: Joi.string().required()
});
export default LessonINputSchema;