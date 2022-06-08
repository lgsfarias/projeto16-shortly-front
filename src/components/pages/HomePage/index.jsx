import React, { useState, useEffect } from 'react';

import api from '../../../services/api.js';
// import usePersistedState from '../../../hooks/usePersistedState.js';
import trophy from '../../../assets/img/trophy.png';
import * as S from './style.js';

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
        <S.Wrapper>
            <S.Main>
                <div className="logo">
                    <img src={trophy} alt="trophy" />
                    <h1>Ranking</h1>
                </div>
                <div className="ranking">
                    {ranking ? (
                        ranking.map((item, index) => (
                            <p className="ranking-item" key={item.id}>
                                <span>{index + 1}. </span>
                                <span>{item.name} - </span>
                                <span>{item.linksCount} links - </span>
                                <span>{item.visitCount} visualizações</span>
                            </p>
                        ))
                    ) : (
                        <p>Carregando...</p>
                    )}
                </div>
                <div className="create-account">
                    Crie sua conta para usar nosso serviço!
                </div>
            </S.Main>
        </S.Wrapper>
    );
};

export default HomePage;
