import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom'
import './Modal.scss';
import Rigister from './Rigister';
import LogIn from './LogIn';
const SignUp = forwardRef(({ }, ref) => {
    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            closeModal: () => close()
        }
    })
    const [dispaly, setDispaly] = useState(false);
    const [form, setForm] = useState('register')
    const open = () => setDispaly(true)
    const close = () => setDispaly(false)



    const openSignIn = () => setForm('login');
    const openSignUp = () => setForm('register');

    if (dispaly) {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal-backdrop" onClick={close} />
                <div className="modal-box">
                    {form === 'register' && <Rigister onChange={openSignIn} />}
                    {form === 'login' && <LogIn onChange={openSignUp} />}
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    }
    return null;

})

export default SignUp;