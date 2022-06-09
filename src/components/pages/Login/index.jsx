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

    const { setToken, setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = {
            email,
            password,
        };

        try {
            const {
                data: { token },
            } = await api.post('signin', body);
            setToken(token);

            const {
                data: { user },
            } = await api.get('users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(user);

            navigate('/home');
        } catch (err) {
            setLoading(false);
            alert(err.response.data.message);
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
            </S.Form>
        </S.LoginWrapper>
    );
};

export default Login;
