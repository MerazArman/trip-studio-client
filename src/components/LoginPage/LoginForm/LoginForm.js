import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './Login.css';
import { firebaseConfigInitializeApp, signInWithEmail, signUpWithEmail } from './LoginSettings';
import { useHistory, useLocation } from 'react-router-dom';
import { googleHandler, googleSignOutHandler } from './LoginSettings';
import loginImg from '../../../images/undraw_Mobile_login_re_9ntv (1).png'





const LoginForm = () => {

    const [newUser, setNewUser] = useState(false);
    const [users, setUsers] = useState({
        isSignIn:false,
        name:'',
        email:'',
        password:'',
        confirmPassword: '',
        photo:'',
        error:'',
        success:false
    });
    const [userLogged, setUserLogged] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    //============================================= firebase configuration start now===============================   
    firebaseConfigInitializeApp()

    // ============================================== Google Sign in Handler Option start now ======================
    const googleBtn = () => {
        console.log('click');
        googleHandler()
            .then(res => {
                setUsers(res)
                setUserLogged(res)
                history.replace(from);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //========================= google sign out method =========================== =================================
    const googleSignOut = () => {
        googleSignOutHandler()
            .then(res => {
                setUsers(res)
                setUserLogged(res)
            })
            .catch(err => {
                console.log(err);
            })
    }

 //------------------------------------- email validation start now-----------------------------------  ------

 const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name === 'password') {
      isFormValid = /\d{1}/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name === 'confirmPassword') {
      isFormValid = /\d{1}/.test(e.target.value);
      // console.log(isFormValid);
    }

    if (isFormValid) {
      let userInfo = { ...users }
      userInfo[e.target.name] = e.target.value;
      setUsers(userInfo)
      console.log(userInfo);
    }

  }


 //  email sign up =================
 
 const signUp = (e) => {
    if (newUser && users.email && users.password) {
      if (users.password === users.confirmPassword) {
        signUpWithEmail(users.name, users.email, users.password)
        .then(res =>{
            setUsers(res)
            setUserLogged(res)
            history.replace(from);
        })
      }else{
        let userInfo = { ...users}
        userInfo.error = "Passwords don't match "
        userInfo.success =false;
        setUsers(userInfo)
      }
    }  
      e.preventDefault()
  }

  // email sign in=== ==

  const signIn = (e) =>{
    if (!newUser && users.email && users.password) {

        signInWithEmail(users.email, users.password)
        .then(res =>{
            setUsers(res)
            setUserLogged(res)
            history.replace(from);
        })

    }
    e.preventDefault()
  }


    return (
        <section>
            <button className="btn btn-danger" onClick={googleSignOut}>Sign out</button>
            <div class="container mt-5">
                <div class="row d-flex align-items-center login-container">
                    <div className="col-md-7">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </div>
                <div class="col-md-5 ">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Sign In</h5>
                                <form class="form-signin" onSubmit={newUser ? signUp : signIn} method="">
                                {
                                    newUser &&  
                                    <div class="form-label-group txt_field">
                                    <input type="text" id="inputName" name="name" class="" onBlur={handleBlur} required />
                                    <span></span>
                                    <label for="inputName">User Name</label>
                                    </div>
                                }
                                    <div class="form-label-group txt_field">
                                        <input type="email" id="inputEmail" class="" name="email" onBlur={handleBlur} required />
                                        <span></span>
                                        <label for="inputEmail">Email address</label>
                                    </div>

                                    <div class="form-label-group txt_field">
                                        <input type="password" id="inputPassword" class="" name="password" onBlur={handleBlur} required />
                                        <span></span>
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    {
                                        newUser && 
                                        <div class="form-label-group txt_field">
                                        <input type="password" id="inputConfirmPassword" class="" name="confirmPassword" onBlur={handleBlur} required />
                                        <span></span>
                                        <label for="inputConfirmPassword">Confirm Password</label>
                                        </div>
                                    }

                                   {
                                       !newUser &&  
                                       <div class="custom-control custom-checkbox mb-3">
                                       <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                       <label class="custom-control-label" for="customCheck1">Remember password</label>
                                       </div>
                                   }
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> {newUser ? "Sign Up" : "Sign In"} </button>
                                    <p className="text-center text-danger"> {users.error} </p>
                                    <div class="signup_link">
                                           {newUser ? 'have an account': 'Not a member? '} <span onClick={() => setNewUser(!newUser)}> {newUser ? 'Sign in': 'Sign up'} </span>
                                    </div>
                                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                        <div className="border-bottom w-100 ml-5"></div>
                                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                        <div className="border-bottom w-100 mr-5"></div>
                                    </div>
                                    <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={googleBtn}><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                    <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;