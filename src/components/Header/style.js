import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;

    nav > ul {
        display: flex;

        li {
            margin-left: 27px;
        }
    }

    .nav-link {
        font-size: 14px;
        color: #9c9c9c;
        cursor: pointer;
    }

    .logo {
        position: fixed;
        left: 0;
        top: 100px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100px;
        }

        h1 {
            font-size: 64px;
            font-weight: 200;
        }
    }
`;

export { Header };
