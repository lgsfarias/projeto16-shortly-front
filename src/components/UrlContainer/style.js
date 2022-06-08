import styled from 'styled-components';

export const UrlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    height: 60px;
`;

export const Infos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #80cc74;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    cursor: pointer;
`;

export const Trash = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 100%;
    background: #fff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
