import firebase from '../firebaseconfig'
import date from "date-and-time"
import { v4 as uuidv4 } from 'uuid'
const db = firebase.firestore().collection("lessons");


class Lessons{
    static UploadLesson = async (req, res) =>{
                try{
                    let docUUID = uuidv4();
                    const docRef = await db.doc(docUUID).set(
                        {description: req.body.description,
                        title: req.body.title,
                        targetClass: req.body.targetClass,
                        subject: req.body.subject,
                        userId: req.body.userId,
                        teacher: req.body.teacher,
                        file: req.body.file,
                        dateUPloaded:  String(date.format((new Date()), 'ddd, MMM DD YYYY')),
                        docUUID
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

    static getLessonsBYClass = async(req, res) => {
        const lessonsByClass = [];
        db.where("targetClass", "==", `${req.body.targetClass}`).get().then((qSnapshot)=>{
            qSnapshot.forEach((doc)=>{
                lessonsByClass.push(doc.data());
            });
            return res.status(200).send({
                data: lessonsByClass,
                message: "Data retrieved Succesfully"
            })
        });

    }

    static getLessonsByTeacher = async(req, res) => {
        const lessonByTeacher = [];
        db.where("teacher", "==", `${req.body.teacher}`).get().then((qSnapshot)=>{
            qSnapshot.forEach((doc)=>{
                lessonByTeacher.push(doc.data());
            });
            return res.status(200).send({
                data: lessonByTeacher,
                message: "Data retrieved Succesfully"
            })
        });

    }

    static deleteLesson = async(req, res)=> {

            console.log(req.body.doc)
            const c = await firebase.firestore().collection('lessons').doc(String(req.body.doc)).delete();
            return res.status(200).send({
                message: "Lesson deleted succesfully"
            })
       
    }
    
}
export default Lessons;