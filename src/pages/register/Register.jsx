import React from 'react'
import SignUp from './Signup'
import Login from './Login'
import './Register.scss';
const Register = ({ }) => {
    return (
        <div className="register">
            <SignUp />
            {/* <Login /> */}
        </div>
    );
}

export default Register;