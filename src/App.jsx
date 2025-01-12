import React,{ useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, useNavigate,  } from 'react-router-dom';
import './App.css'
import Sidebar from './constants/components/Sidebar'
import Spinner from '../src/constants/components/Spinner'
const LoginPage = React.lazy(() => import('./containers/Pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('./containers/Pages/RegistrationPage'));
const HomePage = React.lazy(() => import('./containers/MainPage/HomePage'));
const ShopPage = React.lazy(() => import('./containers/MainPage/ShopPage'));
const AboutPage = React.lazy(() => import('./containers/MainPage/AboutPage'));
const ContactPage = React.lazy(() => import('./containers/MainPage/ContactPage'));

import { validateToken } from './constants/auth/authSaga';
import { bindActionCreators } from '@reduxjs/toolkit';
import { getCookies } from './constants/auth/cookies';

const App = (props) => {

  const cookieToken = getCookies()
  
  useEffect(() => {
    props.validateToken(cookieToken); 
  }, [cookieToken]);

  return (
    <>
      <div className="App">
        <Sidebar details={props.auth.response}/>
        <Suspense fallback={<Spinner spin={true} />}>
          <Routes>
            {!props.auth.isTokenValid && (
               <>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegistrationPage />} />
              </>
            )}
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  accessToken: state.login.accessToken
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
validateToken
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
