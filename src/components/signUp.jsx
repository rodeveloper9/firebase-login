import React, { Fragment, useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext';

const Signup = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const confirmPass = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passRef.current.value !== confirmPass.current.value) {
            return setError('Password do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passRef.current.value);
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);

    }
    return (
        <Fragment>
            <form className="signUpFrom" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="heading">Sign Up</h1>
                {error && alert(error)}
                <input type="email" className="inputField" placeholder="Email" ref={emailRef} required></input>
                <input type="password" className="inputField" placeholder="Password" ref={passRef} required></input>
                <input type="password" className="inputField" placeholder="Confirm Password" ref={confirmPass} required></input>
                <button type="submit" className="inputSubmit" disabled={loading}>Sign Up</button>
            </form>
            <p>Already have account? <span>Log in</span></p>
        </Fragment>
    )
}

export default Signup