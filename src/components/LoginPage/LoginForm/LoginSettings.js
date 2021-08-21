import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const firebaseConfigInitializeApp = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
};




//============================= Google Sign in method start now =====================
export const googleHandler = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(googleProvider)
     .then((result) => {
       console.log(result, result.credential, result.credential.accessToken, result.user );
       const {displayName, email, photoURL} = result.user;
           const userInfo = {
             isSignIn: true,
             name:displayName,
             email:email,
             photo:photoURL,
             error: '',
             success:true
           }
           return userInfo;
     })
     .catch((err) => {
       console.log(err, err.message, err.code, err.email, err.credential);
     });
}



//====================================== Google Sign out method start now =========================
export const googleSignOutHandler = () => {
   return firebase.auth().signOut()
   .then(() => {
      console.log('sign out success');
      const signOutUser = {
       isSignedIn: false,
       name: '',
       email: '',
       photo: '',
       error: '',
       success: false
     }
   return signOutUser;
    }).catch((error) => {
      console.log('sign out not success');
    });
}


//=============================  signUp method start now =====================
export const signUpWithEmail = (name, email, password) =>{
       return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
          let userInfo = res.user
          userInfo.success = true;
          userInfo.error = '';
          updateProfileName(name)
          userInfo.name = name;
          console.log(res);
          return userInfo;
        })
        .catch((err) => {
          let userInfo = {}
          userInfo.error = err.message;
          userInfo.success = false;
          console.log(err, err.code, err.message);
          return userInfo;
        })
}



// ---------------------------------------------------------------- sign in method start now ===================
export const signInWithEmail = ( email, password, ) => {
       return  firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
          let userInfo = res.user;
          console.log(userInfo);
          userInfo.name= res.user.displayName;
          userInfo.success = true;
          userInfo.error= ''
          console.log(res, res.user);
          return userInfo;
        })
        .catch((err) => {
          let userInfo = {};
          userInfo.error = err.message
          userInfo.success = false;
          console.log(err, err.code, err.message);
          return userInfo;
        })
}


  //=============================== update user profile name ================================
  const updateProfileName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
    displayName: name
    })
    .then(function () {
     console.log('created successfully', name);
    })
    .catch(function (err) {
      console.log(err);
    });
};