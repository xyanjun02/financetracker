import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home'; 
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from "./context/UserContext";

import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login"  exact element={<Login/>} />
          <Route path="/signup" exact element={<SignUp/>} />
          <Route path="/dashboard" exact element={<Home/>} />
          <Route path="/income" exact element={<Income/>} />
          <Route path="/expense" exact element={<Expense/>} />
        </Routes>
      </Router>
  <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize:'13px'
            },
          }}
        />
        
      </UserProvider>
    </div>
  );
};

// Define the Root component to handle the initial redirect
const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
