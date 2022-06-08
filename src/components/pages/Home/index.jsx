import React, { useState, useContext, useEffect } from 'react';

import UrlContainer from '../../UrlContainer';
import UserContext from '../../../contexts/UserContext.js';

import api from './../../../services/api.js';

import * as S from './style.js';

const Home = () => {
    const { user, token } = useContext(UserContext);
    const [shortenedUrls, setShortenedUrls] = useState(null);

    const getShortenedUrls = async () => {
        try {
            const { data } = await api.get(`users/${user.id}`);
            setShortenedUrls(data.shortenedUrls);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getShortenedUrls();
    }, []);

    return (
        <S.HomeWrapper>
            <S.HomeForm>
                <S.Input type="text" placeholder="Links que cabem no bolso" />
                <S.HomeButton>Encurtar link</S.HomeButton>
            </S.HomeForm>
            {shortenedUrls ? (
                shortenedUrls.map((shortenedUrl) => (
                    <UrlContainer
                        key={shortenedUrl.id}
                        shortenedUrl={shortenedUrl}
                    />
                ))
            ) : (
                <p>carregando</p>
            )}
        </S.HomeWrapper>
    );
};

export default Home;
