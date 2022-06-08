import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import UserContext from './contexts/UserContext.js';
import usePersistedState from './hooks/usePersistedState.js';
import HomePage from './components/pages/HomePage';
import Header from './components/Header';
import Login from './components/pages/Login';

function App() {
    const [token, setToken] = usePersistedState('token', null);

    return (
        <UserContext.Provider value={{ token, setToken }}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<h1>tela de registro</h1>} />
                <Route path="/ranking" element={<h1>tela de ranking</h1>} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
