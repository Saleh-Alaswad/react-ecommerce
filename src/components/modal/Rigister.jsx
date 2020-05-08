import React from 'react'
const Rigister = ({ onChange }) => {
    return (
        <div className="form">
            <h3 className="title">Sign Up</h3>
            <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
            <form action="" method="post">
                <label className="label">Email</label>
                <input type="text" name="" id="" />
                <label className="label">Password</label>
                <input type="text" name="" id="" />
                <label className="label">Date of birth</label>
                <input type="text" name="" id="" />
                <p>we want to give you a special treat on your birthday</p>
                <p>
                    By clicking ‘Become a member’, I agree to the Membership Terms and conditions.
                    To give you the full membership experience, we will process your personal data in accordance with the Privacy Notice.
                            </p>
                <button type="submit" className="button">BECOME A MEMBER</button>
            </form>
            <p onClick={onChange}  /* href="/login" */ className="go-back" /* data-remodal-trigger="signin" data-remodal-action="close" */>Back to sign in</p>
        </div>
    );
}

export default Rigister;