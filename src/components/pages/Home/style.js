import styled from 'styled-components';
import Input from '../../../styles/elements/Input/Input';
import Button from '../../../styles/elements/Button/Button';
import Form from '../../../styles/elements/Form/Form';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    gap: 40px;
    margin-top: 300px;
    padding: 0 90px;
    width: 100%;
    height: 100%;
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
