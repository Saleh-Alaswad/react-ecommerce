import React from 'react';
import './Modal.scss';
import { Link } from 'react-router-dom';
const LogIn = ({ onChange }) => {
    return (
        <div className="form">
            <h3 className="title">Sign In</h3>
            <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
            <form action="" method="post">
                <label className="label">Email</label>
                <input type="text" name="" id="" />
                <label className="label">Password</label>
                <input type="text" name="" id="" />
                <div className="checkbox">
                    <input type="checkbox" name="keep me signed in" id="keep" />
                    <label>keep me signed in</label>
                    <Link className='password'>Forgot your password?</Link>
                </div>

                <button type="submit" className="button">BECOME A MEMBER</button>
            </form>
            <p onClick={onChange}  /* href="/login" */ className="go-back" /* data-remodal-trigger="signin" data-remodal-action="close" */>Back to sign in</p>
        </div>
    );
}

export default LogIn;