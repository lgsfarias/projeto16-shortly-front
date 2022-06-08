import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import api from '../../../services/api.js';
// import usePersistedState from '../../../hooks/usePersistedState.js';
import trophy from '../../../assets/img/trophy.png';
import * as S from './style.js';

const Ranking = () => {
    const [ranking, setRanking] = useState(null);

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
        <S.RankingWrapper>
            <div className="logo">
                <img src={trophy} alt="trophy" />
                <h1>Ranking</h1>
            </div>
            <S.Ranking>
                {ranking ? (
                    ranking.map((item, index) => (
                        <p className="item" key={item.id}>
                            <span>{index + 1}. </span>
                            <span>{item.name} - </span>
                            <span>{item.linksCount} links - </span>
                            <span>{item.visitCount} visualizações</span>
                        </p>
                    ))
                ) : (
                    <div className="load-spinner">
                        <ThreeDots color="#78b159" width="150" />
                    </div>
                )}
            </S.Ranking>
            <div className="create-account">
                Crie sua conta para usar nosso serviço!
            </div>
        </S.RankingWrapper>
    );
};

export default Ranking;
