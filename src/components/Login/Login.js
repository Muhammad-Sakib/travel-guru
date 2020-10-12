import React from 'react';
import Header from '../Header/Header';
import './login.css';
import fb from './fb.png';
import google from './google.png';
const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className="login-card">
                <h3>Login</h3>
                <input className="inpt" placeholder="Username or Email"/>
                <input className="inpt" placeholder="Password"/>
                <label class="">
                    <input type="checkbox"/>
                    <span class="checkmark">  Remember me</span>
                </label>
                <a href="#" className="forgot">Forgot Password</a>
                <button class="login-btn">Login</button>
                <span>Don't have an account?</span><a href="/CreateAccount">Create an account</a>
            </div>
            <div className="login-footer">
                    <div className="hr-line-l"><hr/></div>
                    Or
                    <div className="hr-line-r"><hr/></div>
                <button className="cont-box row">
                    <img src={fb} alt="" />
                    <span className="center">Continue with Facebook</span>
                </button>
                <button className="cont-box row">
                    <img src={google} alt="" />
                    <span className="center">Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;