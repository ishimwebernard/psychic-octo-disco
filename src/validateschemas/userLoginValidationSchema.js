import Joi from 'joi'

const loginUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});
export default loginUser;