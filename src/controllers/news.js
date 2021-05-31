import firebase from '../firebaseconfig'
const db = firebase.firestore().collection("news");

class News{
    static getNews = (req, res) =>{
        const allnews = [];
         db.get().then((querySnapshot)=>{
             querySnapshot.forEach((doc)=>{
                 allnews.push(doc.data())
             })
             res.status(200).send({
                 data: allnews
             })
         });
        
    }
    static addNews = (req, res) =>{
        db.add(req.body).then((docref)=>{
            res.status(201).send({
                message: 'News Added Succesfullly',
                data: docref
            })
        })
    }
}
export default News;