import firebase from '../firebaseconfig'
import date from "date-and-time"
const db = firebase.firestore().collection("lessons");


class Lessons{
    static UploadLesson = async (req, res) =>{
                try{
                    const docRef = await db.add(
                        {description: req.body.description,
                        title: req.body.title,
                        targetClass: req.body.targetClass,
                        subject: req.body.subject,
                        userId: req.body.userId,
                        teacher: req.body.teacher,
                        file: req.body.file,
                        dateUPloaded:  String(date.format((new Date()), 'ddd, MMM DD YYYY'))
                    }
                    )
                    return res.status(200).send({
                        message: "Lesson UPloaded Succesfully"
                    })
                }catch(error){
                    return res.status(500).send({
                        message: error.message
                    })
                }
    }
    
}
export default Lessons;