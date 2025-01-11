import React from 'react';

const LoginPage = React.lazy(() => import('../../containers/Pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('../../containers/Pages/RegistrationPage'));
const HomePage = React.lazy(() => import('../../containers/MainPage/HomePage'));
const ShopPage = React.lazy(() => import('../../containers/MainPage/ShopePage'));
const ContactPage = React.lazy(() => import('../../containers/MainPage/ContactPage'));
const AboutPage = React.lazy(() => import('../../containers/MainPage/AboutPage'));

export const authRoutes = [
  { path: '/login', element: <LoginPage/> }, // Correct: <Component />
  { path: '/register', element: RegistrationPage }, // Correct: <Component />
];

