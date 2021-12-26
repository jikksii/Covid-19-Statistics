import './App.css';
import React from 'react'
import {Route, Routes } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<PrivateRoute layout={MainLayout} />}>
            <Route path="/" element={<DashboardPage/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="*" element={<NotFoundPage/>}/> {/* path = * ,react will make sure to only render the element if non of the routes match */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
