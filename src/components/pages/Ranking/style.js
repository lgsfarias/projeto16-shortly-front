import styled from 'styled-components';

export const RankingWrapper = styled.main`
    position: fixed;
    top: 270px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 90px;
    overflow-y: auto;

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

    .create-account {
        margin-top: 80px;
        font-weight: 700;
        font-size: 36px;
    }
`;

export const Ranking = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 13px;

    width: 100%;
    padding: 20px 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    .item {
        font-weight: 500;
        font-size: 22px;
    }

    .load-spinner {
        margin: 0 auto;
    }
`;
