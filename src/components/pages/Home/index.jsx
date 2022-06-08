import React, { useState, useContext, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import UrlContainer from '../../UrlContainer';
import UserContext from '../../../contexts/UserContext.js';

import api from './../../../services/api.js';

import * as S from './style.js';

const Home = () => {
    const { user, token } = useContext(UserContext);
    const [shortenedUrls, setShortenedUrls] = useState(null);
    const [url, setUrl] = useState('');

    const getShortenedUrls = async () => {
        try {
            const { data } = await api.get(`users/${user.id}`);
            setShortenedUrls(data.shortenedUrls);
        } catch (err) {
            console.log(err);
        }
    };

    const createShortenedUrl = async (url) => {
        try {
            const { data } = await api.post(
                `/urls/shorten`,
                { url },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            getShortenedUrls();
            setUrl('');
        } catch (err) {
            alert(err);
        }
    };

    const deleteShortenedUrl = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir essa url?')) {
            try {
                await api.delete(`/urls/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                getShortenedUrls();
            } catch (err) {
                alert(err);
            }
        }
    };

    const copyShortUrl = async (shortUrl) => {
        navigator.clipboard.writeText(
            process.env.REACT_APP_API_URL + '/urls/open/' + shortUrl
        );
        alert('URL copiada com sucesso!');
    };

    useEffect(() => {
        getShortenedUrls();
    }, []);

    return (
        <S.HomeWrapper>
            <S.HomeForm
                onSubmit={(e) => {
                    e.preventDefault();
                    createShortenedUrl(url);
                }}
            >
                <S.Input
                    type="url"
                    placeholder="Links que cabem no bolso"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    required
                />
                <S.HomeButton type="submit">Encurtar link</S.HomeButton>
            </S.HomeForm>
            {shortenedUrls ? (
                shortenedUrls.map((shortenedUrl) => (
                    <UrlContainer
                        key={shortenedUrl.id}
                        shortenedUrl={shortenedUrl}
                        deleteShortenedUrl={deleteShortenedUrl}
                        copyShortUrl={copyShortUrl}
                    />
                ))
            ) : (
                <ThreeDots color="#78b159" width="150" />
            )}
        </S.HomeWrapper>
    );
};

export default Home;
