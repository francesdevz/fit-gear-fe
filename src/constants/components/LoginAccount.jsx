import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import * as CONST from '../payload/payload'

export default function LoginAccount() {
  
  const [state, setState] = useState(CONST.loginPayload)

  const [email, setEmail] = useState('');
  
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
        <h2>Log In</h2>
        <p className="subtitle">Enter your email and password below to login your account</p>
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              id="Password"
              name="Password"
              type="Password"
              autoComplete="Password"
              required
              placeholder="12345@"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p style={{textAlign: 'center', color:'#111827'}}> Dont have an account ? 
            <Link 
              style={{
                textDecoration: 'blue',
                marginLeft: '2px', 
              }}
              to='/register'
            >
               Register
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <button onClick={handleGitHubSignIn} className="btn btn-github">
          <svg className="github-icon" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          GitHub
        </button>

        <button className="btn btn-google">
          <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
            <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
            <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
            <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
          </svg>
          Google
        </button>

        <p className="terms">
          By clicking continue, you agree to our{' '}
          <a href="#" className="link">Terms of Service</a> and{' '}
          <a href="#" className="link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

