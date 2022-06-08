import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 270px;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;

        img {
            width: 50px;
            margin-right: 10px;
        }

        h1 {
            font-weight: 700;
            font-size: 36px;
        }
    }

    .ranking {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 13px;

        width: calc(100vw - 180px);
        height: 100%;
        padding: 20px 40px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;

        &-item {
            font-weight: 500;
            font-size: 22px;
        }
    }

    .create-account {
        margin-top: 80px;
        font-weight: 700;
        font-size: 36px;
    }
`;

export { Wrapper, Main };
