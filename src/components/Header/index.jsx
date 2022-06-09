import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import shorts from '../../assets/img/short.png';

import UserContext from '../../contexts/UserContext';

import * as S from './style.js';

const Header = () => {
    const { token, setToken, user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        navigate('/');
    };

    return token ? (
        <S.Header>
            <span>Seja bem-vindo(a), {user?.name}!</span>
            <div className="logo" onClick={() => navigate('/')}>
                <h1>Shortly</h1>
                <img src={shorts} alt="Shortly" />
            </div>
            <nav>
                <ul>
                    <li>
                        <p
                            className="nav-link"
                            onClick={() => {
                                navigate('/home');
                            }}
                        >
                            Home
                        </p>
                    </li>
                    <li>
                        <p
                            className="nav-link"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Ranking
                        </p>
                    </li>
                    <li>
                        <p
                            className="nav-link"
                            onClick={() => {
                                handleLogout();
                            }}
                        >
                            Sair
                        </p>
                    </li>
                </ul>
            </nav>
        </S.Header>
    ) : (
        <S.Header>
            <span></span>
            <div className="logo" onClick={() => navigate('/')}>
                <h1>Shortly</h1>
                <img src={shorts} alt="Shortly" />
            </div>
            <nav>
                <ul>
                    <li>
                        <p
                            className="nav-link"
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Login
                        </p>
                    </li>
                    <li>
                        <p
                            className="nav-link"
                            onClick={() => {
                                navigate('/register');
                            }}
                        >
                            Cadastre-se
                        </p>
                    </li>
                </ul>
            </nav>
        </S.Header>
    );
};

export default Header;
