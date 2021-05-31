import Joi from 'joi'
const lessonSchema = Joi.object({
    description: Joi.string().required(),
    title: Joi.string().required(),
    targetClass: Joi.string().required(),
    subject: Joi.string().required(),
    userId: Joi.string().required(),
    file: Joi.string().required(),
    teacher: Joi.string().required()
})
export default lessonSchema;