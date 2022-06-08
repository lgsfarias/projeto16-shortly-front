import styled from 'styled-components';
import Wrapper from '../../../styles/elements/Wrapper/Wrapper';
import Input from '../../../styles/elements/Input/Input';
import Button from '../../../styles/elements/Button/Button';
import Form from '../../../styles/elements/Form/Form';

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-top: 300px;
    width: 100vw;
    height: 100vh;
`;

export { Input, Button, Form };
