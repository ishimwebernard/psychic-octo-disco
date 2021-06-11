import DocValidationSchema from "../validateschemas/doc"

export default async function ValidateDoc(req, res, next){
    const {error} =  await DocValidationSchema.validate(req.body);
    if(error){
        return res.status(400).send({
            data: error.message
        })
    }else{
        next()
    }
}