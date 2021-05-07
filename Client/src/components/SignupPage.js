import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

function SignupPage() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { name, email, password } = inputs;
    const SigningIn = useSelector(state => state.users.SigningIn);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.signup(name, email, password));
        }
    }

    return (
        <div className="col-lg-3 jumbotron offset-lg-4 center mt-50">
            <h2>Sign Up</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                    {submitted && !name &&
                        <div className="invalid-feedback">Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                    {submitted && !email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {SigningIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
}

export { SignupPage };