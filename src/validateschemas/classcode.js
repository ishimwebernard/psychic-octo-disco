import Joi from "joi"

const ClassCOde = Joi.object({
    code: Joi.string().required()
});
export default ClassCOde