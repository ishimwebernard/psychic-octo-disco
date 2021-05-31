import firebase from '../firebaseconfig'

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
}
export default Users