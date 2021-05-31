import UserValidationSchema from "../validateschemas/userLoginValidationSchema"

export default async function ValidateUser(req, res, next){
    const {error} =  await UserValidationSchema.validate(req.body);
    if(error){
        return res.status(400).send({
            data: error.message
        })
    }else{
        next()
    }
}