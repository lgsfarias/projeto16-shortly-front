import React, { useState, useEffect } from 'react';

import api from '../../../services/api.js';
// import usePersistedState from '../../../hooks/usePersistedState.js';

import Header from '../../Header';

const HomePage = () => {
    const [ranking, setRanking] = useState([]);

    const getRanking = async () => {
        try {
            const response = await api.get('/users/ranking');
            setRanking(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRanking();
    }, []);

    return (
        <div>
            <Header />
            <h1>HomePage</h1>
            {ranking ? (
                ranking.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.linksCount}</p>
                        <p>{item.visitCount}</p>
                    </div>
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default HomePage;
