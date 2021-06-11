import ClassCode from "../validateschemas/classcode"

export default async function ClassCodeValidator(req, res, next){
    const {error} =  await ClassCode.validate(req.body);
    if(error){
        return res.status(400).send({
            data: error.message
        })
    }else{
        next()
    }
}