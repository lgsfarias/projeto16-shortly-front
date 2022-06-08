import { useNavigate } from 'react-router-dom';
import shorts from '../../assets/img/short.png';

import * as S from './style.js';

const Header = () => {
    const navigate = useNavigate();
    return (
        <S.Header>
            <span></span>
            <div className="logo">
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
