import Joi from "joi"
const NewsValidateSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    picture: Joi.string().required()
});
export default NewsValidateSchema;