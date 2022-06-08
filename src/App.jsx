import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import UserContext from './contexts/UserContext.js';
import usePersistedState from './hooks/usePersistedState.js';
import Ranking from './components/pages/Ranking';
import Header from './components/Header';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';

function App() {
    const [token, setToken] = usePersistedState('token', null);
    const [user, setUser] = usePersistedState('user', null);

    return (
        <UserContext.Provider value={{ token, setToken, user, setUser }}>
            <Header />
            <Routes>
                <Route path="/" element={<Ranking />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/ranking" element={<h1>tela de ranking</h1>} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
