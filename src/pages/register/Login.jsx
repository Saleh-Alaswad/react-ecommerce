import React from 'react'
import './Login.scss';

const Login = ({ }) => {
    return (
        <div className="signup">
            <div className="form">
                <h3 className="title">Sign Up</h3>
                <form action="" method="post">
                    <p className="input-type">first name</p>
                    <input type="text" className="text-field" value="" />
                    <p className="input-type">email address</p>
                    <input type="text" className="text-field" value="" />
                    <p className="input-type">password </p>
                    <input type="text" className="text-field" value="" />
                    <p className="input-type">repeat password</p>
                    <input type="text" className="text-field" value="" />
                    <button type="submit" className="button">SIGN UP</button>
                </form>
            </div>
        </div>
    );
}

export default Login;