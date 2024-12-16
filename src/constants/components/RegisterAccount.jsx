
import React, { useEffect, useState } from 'react';
import './CreateAccount.css';
import { Link } from 'react-router-dom'
import * as CONST from '../payload/payload'
import InputField from './InputField';

export default function RegisterAccount(props) {
  
  const [state, setState] = useState(CONST.registerPayload)

  useEffect(() => {
   setState(CONST.registerPayload)
  }, [])

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleGitHubSignIn = () => {
    
  };

  const handleRegister = () => {
    
  };

  return (
    <div className="containers">
      <div className="create-account">
        <h2>Create Account</h2>
        <p className="subtitle">Enter your Fullname, email and password below to register your account</p>
        <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
                <InputField
                    label="Full Name"
                    type="text"
                    value={state.fullName}
                    onChange={(e) => setState({ ...state, fullName: e.target.value })}
                    placeholder="John Doe"
                />
            </div>
            <div className="form-group">
                <InputField
                    label="Email Address"
                    type="email"
                    value={state.emailAddress}
                    onChange={(e) => setState({ ...state, emailAddress: e.target.value })}
                    placeholder="john_doe@gmail.com"
                />
            </div>
            <div className="form-group">
                <InputField
                    label="Password"
                    type="password"
                    value={state.password}
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                    placeholder="@12345"
                />
            </div>
            <div className="form-group">
                <InputField
                    label="Re-Enter Password"
                    type="password"
                    value={state.repeatPassword}
                    onChange={(e) => setState({ ...state, repeatPassword: e.target.value })}
                    placeholder="@12345"
                />
            </div>
            <p style={{textAlign: 'center', color:'#111827'}}> Already have an account ? 
                <Link 
                style={{
                    textDecoration: 'blue',
                    marginLeft: '2px', 
                }}
                to='/login'
                >
                Login
                </Link>
            </p>
            <button type="submit" className="btn btn-primary">
                Register Account
            </button>
        </form>
      </div>
    </div>
  );
}

