import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import usePersistedState from './hooks/usePersistedState.js';

function App() {
    const [token, setToken] = usePersistedState('token', null);

    return (
        <Routes>
            <Route path="/" element={<h1>tela inicial</h1>} />
            <Route path="/login" element={<h1>tela de login</h1>} />
            <Route path="/register" element={<h1>tela de registro</h1>} />
            <Route path="/ranking" element={<h1>tela de ranking</h1>} />
        </Routes>
    );
}

export default App;
