import React, { useState } from 'react';
import Header from '../Header/Header';
import './CreateAccount.css';
import fb from './fb.png';
import google from './google.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Login from '../Login/Login';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
firebase.initializeApp(firebaseConfig);

const CreateAccount = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignUpGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const SignedInUser ={
                isSignedIn: true,
                name: result.user.displayName,
            }
            setUser(SignedInUser);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);

        })
    }
    const handleSignUpFb =()=>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(result => {
            const SignedInUser ={
                isSignedIn: true,
                name: result.user.displayName,
            }
            setUser(SignedInUser);
          })
    }
    return (
        <div>
            <Header></Header>
            <form className="login-card">
                <h3>Create an account</h3>
                <input className="inpt" placeholder="First Name"/>
                <input className="inpt" placeholder="Last Name"/>
                <input className="inpt" placeholder="Username or Email"/>
                <input className="inpt" placeholder="Password"/>
                <input className="inpt" placeholder="Confirm Password"/>
                <input type="submit" value="Login" className="login-btn"/>
                <div className="center-text"><span>Already have an account?</span><a href="/Login">Login</a></div>
            </form>

            <div className="login-footer">
                    <div className="hr-line-l"><hr/></div>
                    Or
                    <div className="hr-line-r"><hr/></div>
                <button className="cont-box row"  onClick={handleSignUpFb}>
                    <img src={fb} alt="" />
                    <span className="center">Continue with Facebook</span>
                </button>
                <button className="cont-box row" onClick={handleSignUpGoogle}>
                    <img src={google} alt="" />
                    <span className="center" >Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;