import NewsValidateSchema from '../validateschemas/newsvalidateSchema'
const ValidateNews = async(req, res, next)=>{
    const {error} = await NewsValidateSchema.validate(req.body);
    if(error){
        return res.status(400).send({
            data: error.message
        })
    }else{
        next();
    }
    
}
export default ValidateNews;