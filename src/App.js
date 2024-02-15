import React, { useState, useEffect } from "react";
import './assets/css/tailwind.css';
import './assets/scss/tailwind.scss';

import './assets/scss/icons.scss';

import {
  Route,
  Routes
} from "react-router-dom";


import Index from "./pages/index.js";
import IndexTwo from "./pages/index-two.js";
import IndexThree from "./pages/index-three.js";

import IndexFour from "./pages/index-four.js";
import IndexFive from "./pages/index-five.js";
import IndexSix from "./pages/index-six.js";
import IndexSeven from "./pages/index-seven.js";
import IndexEight from "./pages/index-eight.js";
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ResetPassword from './pages/auth/reset-password';
import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    handleRouteChange();
  }, []);


  // Route change method
  const handleRouteChange = () => {
    setLoading(false);
  }

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/index-two" element={<IndexTwo />} />
        <Route path="/index-three" element={<IndexThree />} />
        <Route path="/index-four" element={<IndexFour />} />
        <Route path="/index-five" element={<IndexFive />} />
        <Route path="/index-six" element={<IndexSix />} />
        <Route path="/index-seven" element={<IndexSeven />} />
        <Route path="/index-eight" element={<IndexEight />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<Signup />} />
        <Route path="/auth-reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );

}
