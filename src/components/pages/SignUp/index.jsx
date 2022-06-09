import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import * as S from '../Login/style';

import api from '../../../services/api';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = {
            name,
            email,
            password,
            confirmPassword,
        };

        try {
            await api.post('/signup', body);
            alert('Usuário criado com sucesso!');
            navigate('/login');
        } catch (err) {
            setLoading(false);
            alert(err.response.data.message);
        }
    };

    return (
        <S.LoginWrapper>
            <S.Form onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                />
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
                <S.Input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                />
                <S.Button type="submit">
                    {loading ? <ThreeDots color="#fff" /> : 'Cadastrar'}
                </S.Button>
            </S.Form>
        </S.LoginWrapper>
    );
};

export default SignUp;
