import React,{ useState, useEffect, Suspense  } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from './constants/sidebar/Sidebar'
import { CHECK_TOKEN } from "./constants/actions/token";


const LoginPage = React.lazy(() => import('./containers/Pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('./containers/Pages/RegistrationPage'));

const App = ({ token, dispatch }) => {
  
  useEffect(() => {
    if (token) {
      dispatch({ type: CHECK_TOKEN, payload: token });
    }
  }, [token, dispatch]);

  return (
    <>
       <Router>
        <div className="App">
          <Sidebar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegistrationPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

export default connect(mapStateToProps)(App)
