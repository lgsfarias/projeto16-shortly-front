import styled from 'styled-components';

export const UrlContainer = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    min-height: 60px;
`;

export const Infos = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
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

    .originalUrl {
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .copyIcon {
        position: absolute;
        right: 10px;
    }
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
