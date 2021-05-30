import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from "./firebase";
import './Login.css';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://images-eu.ssl-images-amazon.com/images/I/41Ac16Tk8IL.png" alt="chat image" />
                <h1>Chat Box</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
