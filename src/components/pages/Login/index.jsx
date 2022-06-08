import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import UserContext from '../../../contexts/UserContext.js';

import api from '../../../services/api';

import * as S from './style';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { setToken } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = {
            email,
            password,
        };

        try {
            const { data } = await api.post('signin', body);
            setToken(data.token);
            navigate('/');
        } catch (err) {
            setLoading(false);
            alert(err.response.data);
        }
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            setToken(token);
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.LoginWrapper>
            <S.Form onSubmit={handleSubmit}>
                <S.Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <S.Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
                <S.Button type="submit">
                    {loading ? <ThreeDots color="#fff" /> : 'Entrar'}
                </S.Button>
                <h2 className="link" onClick={() => navigate('/signup')}>
                    Primeira vez? Cadastre-se!
                </h2>
            </S.Form>
        </S.LoginWrapper>
    );
};

export default Login;
