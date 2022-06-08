import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 60px;
    background: #5d9040;
    border-radius: 12px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

export default Button;
