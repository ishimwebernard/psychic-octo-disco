import firebase from '../firebaseconfig'
const db = firebase.firestore().collection("classcodes");

class Users{
    static login = (req, res) =>{
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((userCredential) => {
        const successUser = { displayName: userCredential.user.displayName, email: userCredential.user.email, uid: userCredential.user.uid};
        return res.status(200).json({
            message: 'User signed in Succesfully',
            data: successUser

        })
    })
    .catch((error) => {
        res.status(403).send({
            data: error.message
        })
});
  
    }
    static studeAuth = (req, res) => {
        let classcode, className;
        db.where("code", "==", `${req.body.code}`).get().then((qSnapshot)=>{
            //console.log(qSnapshot)
            qSnapshot.forEach((doc)=>{
                classcode = doc.data().code
                className = doc.data().classname
            });
            if(classcode){
                return res.status(200).send({
                    data: className,
                    message: "Authorized"
                })
            }else{
                return res.status(403).send({
                    data: 'No class found'
                })
            }
          
        });
    }

}
export default Users