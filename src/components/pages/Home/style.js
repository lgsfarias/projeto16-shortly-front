import styled from 'styled-components';
import Input from '../../../styles/elements/Input/Input';
import Button from '../../../styles/elements/Button/Button';
import Form from '../../../styles/elements/Form/Form';

export const HomeWrapper = styled.div`
    position: fixed;
    top: 270px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    padding: 0 90px;
    overflow-y: auto;
`;

export const HomeForm = styled(Form)`
    flex-direction: row;
    justify-content: space-between;
    gap: 70px;
    max-width: none;
    margin-bottom: 20px;
`;

export const HomeButton = styled(Button)`
    margin: 0;
`;

export { Input, Button, Form };
